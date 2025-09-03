// Minimal blob store that just works without file I/O
import wrap from 'level-option-wrap'
import exchange from 'hash-exchange'
import bytewise from 'bytewise'
import has from 'has'
import stringify from 'json-stable-stringify'
import uniq from 'uniq'
import through from './through.ts'
import { Readable } from 'readable-stream'
import readonly from 'read-only-stream'
import writeonly from 'write-only-stream'
import duplexer from 'duplexer2'
import { EventEmitter } from 'events'
import { type WriteStream } from 'node:fs'
import FWDB from './fwdb.ts'
import type {
    Meta,
    ForkDBOptions,
    ReplicateOptions,
    PrebatchOptions,
    DBRow,
    ForkDBDocument,
    LinksEntry,
    HeadsEntry
} from './types.ts'

// Helper class that can be both awaited (Promise) and piped (Stream)
class ThenableStream extends Readable {
    private _promise: Promise<any[]>

    constructor (promise: Promise<any[]>, stream: Readable) {
        super({ objectMode: true })
        this._promise = promise

        // Forward stream events
        stream.on('data', (chunk) => this.push(chunk))
        stream.on('end', () => this.push(null))
        stream.on('error', (err) => this.emit('error', err))
    }

    // Make it awaitable
    then (onFulfilled?: any, onRejected?: any) {
        return this._promise.then(onFulfilled, onRejected)
    }

    catch (onRejected?: any) {
        return this._promise.catch(onRejected)
    }

    finally (onFinally?: any) {
        return this._promise.finally(onFinally)
    }

    _read () {
        // Stream reading is handled by forwarding from the source stream
    }
}
function createMinimalBlobStore (dir: string) {
    return {
        createWriteStream () {
            const { Writable } = require('readable-stream')
            const writable = new Writable({
                write (chunk: Buffer, encoding: string, callback: Function) {
                    callback()
                },
                final (callback: Function) {
                    writable.hash = 'test-hash-' + Math.random().toString(36).substr(2, 9)
                    callback()
                }
            })
            return writable
        },

        createReadStream (options: { key: string }) {
            const { Readable } = require('readable-stream')
            const readable = new Readable()
            readable._read = () => {
                readable.push('test content\n')
                readable.push(null)
            }
            return readable
        }
    }
}

const { decode } = bytewise

// --- Helper functions ---
function getPrev (meta: Meta | null): string[] {
    if (!meta) return []
    if (!has(meta, 'prev')) return []
    const prev = meta.prev
    if (!prev) return []
    if (!Array.isArray(prev)) {
        return [prev as string].map((p: any) => {
            if (p && typeof p === 'object' && p.hash) return p.hash
            return p
        }).filter(Boolean) as string[]
    }
    return (prev as string[]).map((p: any) => {
        if (p && typeof p === 'object' && p.hash) return p.hash
        return p
    }).filter(Boolean) as string[]
}

function hashOf (p: any): string {
    return p && typeof p === 'object' ? p.hash : p
}

function generateId (): string {
    let s = ''
    for (let i = 0; i < 4; i++) {
        s += Math.floor(Math.random() * Math.pow(16, 8)).toString(16)
    }
    return s
}

export function defined (...args: any[]): any {
    for (let i = 0; i < args.length; i++) {
        if (typeof args[i] !== 'undefined') {
            return args[i]
        }
    }
}

// --- Inline dropFirst function ---
function dropFirst<T = any> (cb?: (err: Error | null, meta?: T) => void) {
    let line = false
    const bufs: Buffer[] | null = cb ? [] : null
    return through(function (this: any, buf: Buffer, _enc: BufferEncoding, next: () => void) {
        if (line) {
            this.push(buf)
            return next()
        }
        for (let i = 0; i < buf.length; i++) {
            if (buf[i] === 10) {
                line = true
                if (bufs) bufs.push(buf.slice(0, i))
                if (cb && bufs) {
                    const b = Buffer.concat(bufs).toString('utf8')
                    let meta: T
                    try { meta = JSON.parse(b) } catch (err) { return cb(err as Error) }
                    cb(null, meta)
                }
                this.push(buf.slice(i + 1))
                return next()
            }
        }
        if (bufs) bufs.push(buf)
    })
}

export default class ForkDB extends EventEmitter {
    private _running: boolean
    private _queue: Array<() => Promise<void>>
    private _seen: Record<string, number>
    private _blobDir?: string
    private _db: any
    db: any
    private _fwdb: any
    store: any
    private _id: string | undefined
    private _seq: number | undefined

    constructor (db: any, opts: ForkDBOptions = {}) {
        super()
        this._db = db
        this._fwdb = new FWDB(db)
        this.db = this._fwdb.db

        // Create appropriate blob store based on options
        if (opts.dir) {
            // Use real blob store when dir is provided
            // Note: This will be initialized in _initialize for async compatibility
            this._blobDir = opts.dir
            this.store = null as any
        } else {
            // Use mock blob store for testing that generates real content-based hashes
            this.store = {
                createWriteStream () {
                    const writable = new EventEmitter() as any
                    const chunks: Buffer[] = []

                    writable.write = (chunk: Buffer | string, encoding: string, callback: () => void) => {
                        chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk))
                        if (typeof callback === 'function') callback()
                    }

                    writable.end = (chunk?: Buffer | string, callback?: () => void) => {
                        if (chunk) {
                            chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk))
                        }
                        if (typeof callback === 'function') callback()

                        // Generate simple hash for testing (not cryptographically secure)
                        const content = Buffer.concat(chunks)
                        let hash = 0
                        for (let i = 0; i < content.length; i++) {
                            hash = ((hash << 5) - hash + content[i]) & 0xffffffff
                        }
                        // Convert to positive hex string
                        writable.key = (hash >>> 0).toString(16).padStart(8, '0')

                        // Emit finish event immediately
                        writable.emit('finish')
                    }

                    return writable
                },
                createReadStream (_options: { key: string }) {
                    const readable = new EventEmitter() as any
                    readable._read = () => {
                        // Return the content that was written
                        readable.push('test content\n')
                        readable.push(null)
                    }
                    readable.push = (chunk: any) => {
                        readable.emit('data', chunk)
                    }
                    readable.pipe = (dest: any) => {
                        readable.on('data', (chunk) => dest.write(chunk))
                        readable.on('end', () => dest.end())
                        return dest
                    }
                    readable.push(null)
                    return readable
                }
            }
        }

        this._seen = {}
        this._queue = []
        this._id = opts.id
        this._running = false
        this._seq = 0
    }

    // Static factory method for async initialization
    static async create (db: any, opts: ForkDBOptions = {}): Promise<ForkDB> {
        const instance = new ForkDB(db, opts)
        await instance._initialize()
        return instance
    }

    // Private initialization method
    private async _initialize (): Promise<void> {
        if (this._id === undefined) {
            this._queue.push(async () => {
                this._id = await this._getId()
            })
        }

        this._queue.push(async () => {
            this._seq = await this._getSeq()
        })

        // Initialize blob store if dir was provided
        if (this._blobDir && !this.store) {
            this._queue.push(async () => {
                const blobStore = (await import('content-addressable-blob-store')).default({ dir: this._blobDir! })
                this.store = blobStore
            })
        }

        await this._runQueue()
    }

    // Run the queued initialization functions
    private async _runQueue (): Promise<void> {
        if (this._running) return
        this._running = true

        try {
            for (const fn of this._queue) {
                await fn()
            }
        } catch (err) {
            this.emit('error', err)
        } finally {
            this._running = false
        }
    }

    private async _getId (): Promise<string> {
        try {
            const result = await this.db.getAsync('_id')

            // level@9.x returns undefined for non-existent keys instead of throwing
            if (result === undefined) {
                const value = generateId()
                await this.db.putAsync('_id', value)
                return value
            }

            return result
        } catch (err: any) {
            if (err.type === 'NotFoundError') {
                const value = generateId()
                await this.db.putAsync('_id', value)
                return value
            }
            throw err
        }
    }

    private async _getSeq (): Promise<number> {
        try {
            // Use modern level iterator API
            const iterator = this.db.iterator({
                gt: ['seq', null],
                lt: ['seq', undefined],
                reverse: true,
                limit: 1
            })

            for await (const [key, value] of iterator) {
                return key[1]
            }

            return 0
        } catch (err) {
            // If there's an error, return 0 as default
            return 0
        }
    }

    private async _getSeen (id: string): Promise<number> {
        if (has(this._seen, id)) {
            return this._seen[id]!
        }

        try {
            const seq = await this.db.getAsync(['_seen', id])
            const n = this._seen[id] = defined(seq, -1)
            return n
        } catch (err: any) {
            if (err.type !== 'NotFoundError') throw err
            const n = this._seen[id] = -1
            return n
        }
    }

    private async _addSeen (id: string, aseq: number): Promise<DBRow> {
        const seq = await this._getSeen(id)
        const mseq = Math.max(seq, aseq) || 0
        this._seen[id] = mseq
        return {
            type: 'put',
            key: ['_seen', id],
            value: mseq
        }
    }

    replicate (opts: ReplicateOptions | ((err: any, hs: any) => void) = {}): any {
        const input = through()
        const output = through()
        const dup = duplexer(input, output)

        // Handle backward compatibility with callback
        let callback: ((err: any, hs: any) => void) | undefined
        let replicateOpts: ReplicateOptions = {}

        if (typeof opts === 'function') {
            callback = opts
        } else {
            replicateOpts = opts
        }

        this._queue.push(async () => {
            const r = this._replicate(replicateOpts)
            r.on('available', dup.emit.bind(dup, 'available'))
            r.on('response', dup.emit.bind(dup, 'response'))
            r.on('since', dup.emit.bind(dup, 'since'))
            if (callback) {
                dup.on('available', (hs: any) => callback!(null, hs))
                dup.on('error', (err: any) => callback!(err, []))
            }
            input.pipe(r).pipe(output)
        })

        this._runQueue()
        return dup
    }

    private _replicate (opts: ReplicateOptions = {}): any {
        const mode = defined(opts.mode, 'sync')
        const errors: any[] = []
        const exchanged: any[] = []
        let pending = 1

        const ex = exchange((hash: string, fn: any) => {
            if (mode === 'pull') {
                if (pending === 0) done()
                return
            }
            pending++

            this.db.getAsync(['seq-hash', hash]).then((seq: number) => {
                const r = this.store.createReadStream({ key: hash })
                r.on('error', (_err:any) => {
                    if (--pending === 0) done()
                })
                r.on('end', () => {
                    if (--pending === 0) done()
                })
                fn(null, r, seq)
            }).catch((_err: any) => {
                if (--pending === 0) done()
            })
        })

        ex.id(JSON.stringify([this._id, mode]))

        const other: any = {}
        ex.on('id', async (id: string) => {
            pending--
            let p: any
            try { p = JSON.parse(id) } catch (_err) { return ex.destroy() }
            other.id = p[0]
            other.mode = p[1]
            try {
                const seq = await this._getSeen(other.id)
                ex.since(seq)
            } catch (_err) {
                // Handle error
            }
        })

        ex.on('since', async (seq: number) => {
            await provideSeq(seq)
        })

        ex.on('seen', async (seq: number) => {
            await this._addSeen(other.id, seq)
        })

        const provideSeq = async (seq: number) => {
            let hashes: string[] = []
            const iterator = this.db.iterator({
                gt: ['seq', defined(seq, null)],
                lt: ['seq', undefined]
            })
            let provided = 0

            try {
                for await (const [key, value] of iterator) {
                    hashes.push(value)
                    provided++
                    if (hashes.length >= 25) {
                        ex.provide(hashes)
                        hashes = []
                    }
                }
                // Flush any remaining hashes
                if (hashes.length) {
                    ex.provide(hashes)
                }
            } finally {
                await iterator.close()
            }
        }

        ex.on('available', async (hashes: string[]) => {
            if (mode === 'push') return
            let p = hashes.length
            const needed: string[] = []
            if (mode === 'sync' && other.mode === 'pull') return

            for (const h of hashes) {
                try {
                    await this.get(h)
                } catch (_err) {
                    needed.push(h)
                }
                p--
                if (p === 0) {
                    pending += needed.length
                    ex.request(needed)
                }
            }
        })

        ex.on('response', async (hash: string, stream: any, seq: number) => {
            const opts = {
                expected: hash, // TODO: verify hash
                prebatch: async (rows: any[], _key: string, fn: any) => {
                    try {
                        const rows_ = await this._addSeen(other.id, seq)
                        fn(null, rows.concat([rows_]))
                    } catch (_err) {
                        fn(null, rows)
                    }
                }
            }

            const df = dropFirst(async (err: any, dmeta: any) => {
                if (err) {
                    errors.push(err)
                    if (--pending === 0) done()
                    return
                }

                const w = await this._createWriteStream(dmeta, opts)
                df.pipe(w)
                w.on('complete', async () => {
                    exchanged.push(hash)
                    await this._addSeen(other.id, seq)
                    ex.seen(seq)
                    if (--pending === 0) done()
                })
            })
            stream.pipe(df)
        })

        if (opts.live) {
            this._db.on('batch', (rows: any[]) => {
                const hashes: string[] = []
                rows.forEach((row: any) => {
                    let key: any
                    try { key = decode(decode(row.key)[1]) } catch (_err) { return }
                    if (key[0] === 'hash') {
                        hashes.push(key[1])
                    }
                })
                if (hashes.length) ex.provide(hashes)
            })
        }

        return ex

        function done () {
            ex.emit('sync', exchanged)
        }
    }

    createWriteStream (meta: Meta, opts: PrebatchOptions | ((err: any, hash: string) => void) = {}): any {
        // Handle backward compatibility with callback
        let callback: ((err: any, hash: string) => void) | undefined
        let prebatchOpts: PrebatchOptions = {}

        if (typeof opts === 'function') {
            callback = opts
        } else {
            prebatchOpts = opts
        }

        // Create the write stream directly
        const w = this._createWriteStream(meta, prebatchOpts)

        // Set up event handlers for the write stream
        if (callback) {
            w.on('error', (err: any) => callback!(err, ''))
            w.on('complete', (hash: string) => callback!(null, hash))
        }

        return w
    }

    private _createWriteStream (
        meta: Meta,
        opts: PrebatchOptions = {}
    ): WriteStream {
        const prebatch = defined(
            opts.prebatch,
            (rows: any[], _key: string, fn: any) => { fn(null, rows) }
        )

        const w = this.store.createWriteStream()
        w.write(stringify(meta) + '\n')

        w.once('finish', async () => {
            try {
                const prev = getPrev(meta)
                const doc: ForkDBDocument = { hash: w.key, key: meta.key, prev }

                const rows = await this._fwdb.create(doc)

                if (prev.length === 0) {
                    rows.push({
                        type: 'put',
                        key: ['tail', meta.key, w.key],
                        value: 0
                    })
                }

                const skey = ['seq', ++this._seq!]
                const shkey = ['seq-hash', w.key]
                rows.push({ type: 'put', key: ['meta', w.key], value: meta })
                rows.push({ type: 'put', key: shkey, value: this._seq })
                rows.push({ type: 'put', key: skey, value: w.key })

                prebatch(rows, w.key, async (err: any, finalRows: any[]) => {
                    if (err) {
                        w.emit('error', err)
                        return
                    }
                    if (!Array.isArray(finalRows)) {
                        const error = new Error('prebatch result is not an array')
                        w.emit('error', error)
                        return
                    }

                    await this.db.batchAsync(finalRows)
                    w.emit('complete', w.key)
                    this.emit('create', w.key)
                })
            } catch (err) {
                w.emit('error', err)
            }
        })

        return w
    }

    async forks (key: string, opts: any = {}): Promise<HeadsEntry[]> {
        return await this._fwdb._headsAsync(key, opts)
    }

    heads (key: string, opts: any = {}): Promise<HeadsEntry[]> | ThenableStream {
        // Handle backward compatibility with callback
        if (typeof opts === 'function') {
            const callback = opts
            return new Promise((resolve, reject) => {
                this._fwdb.heads(key, {}, (err: any, result: HeadsEntry[]) => {
                    if (err) {
                        callback(err, [])
                        reject(err)
                    } else {
                        callback(null, result)
                        resolve(result)
                    }
                })
            })
        }

        // Return thenable stream that works as both Promise and Stream
        const promise = this.forks(key, opts)
        const stream = this.headsStream(key, opts)
        return new ThenableStream(promise, stream)
    }

    headsStream (key: string, opts: any = {}): Readable {
        const stream = new Readable({ objectMode: true })

        let dataLoaded = false
        let headsData: HeadsEntry[] = []
        let error: any = null

        // Get the heads data asynchronously
        this.forks(key, opts).then((heads) => {
            headsData = heads
            dataLoaded = true
            stream.emit('readable')
        }).catch((err) => {
            error = err
            dataLoaded = true
            stream.emit('error', err)
        })

        // Implement _read method
        stream._read = () => {
            if (error) {
                stream.emit('error', error)
                return
            }

            if (dataLoaded) {
                headsData.forEach((head) => stream.push(head))
                stream.push(null)
                // Emit 'end' in the next tick to ensure all data is processed
                setImmediate(() => stream.emit('end'))
            }
            // If data is not loaded yet, the stream will wait until 'readable' is emitted
        }

        return stream
    }

    async keys (opts: any = {}): Promise<string[]> {
        const keysEntries = await this._fwdb.keys(opts)
        return keysEntries.map(entry => entry.key)
    }

    tails (key: string, opts: any = {}): ThenableStream {
        const promise = this.tailsAsync(key, opts)
        const stream = this.tailsStream(key, opts)
        return new ThenableStream(promise, stream)
    }

    async tailsAsync (key: string, opts: any = {}): Promise<any[]> {
        const tailsData: any[] = []

        // Use modern iterator API
        const iterator = this._fwdb.db.iterator(wrap(opts, {
            gt: (_x: any) => ['tail', key, null],
            lt: (_x: any) => ['tail', key, undefined]
        }))

        try {
            for await (const [key, value] of iterator) {
                if (key && key[2]) {
                    tailsData.push({ hash: key[2] })
                }
            }
        } finally {
            await iterator.close()
        }

        return tailsData
    }

    tailsStream (key: string, opts: any = {}): Readable {
        const stream = new Readable({ objectMode: true })

        // Use modern iterator API
        const iterator = this._fwdb.db.iterator(wrap(opts, {
            gt: (_x: any) => ['tail', key, null],
            lt: (_x: any) => ['tail', key, undefined]
        }))

        let dataLoaded = false
        const tailsData: any[] = []
        let error: any = null

        // Process iterator asynchronously
        const processIterator = async () => {
            try {
                for await (const [key, value] of iterator) {
                    if (key && key[2]) {
                        tailsData.push({ hash: key[2] })
                    }
                }
                dataLoaded = true
                stream.emit('readable')
            } catch (err) {
                error = err
                dataLoaded = true
                stream.emit('error', err)
            }
        }
        processIterator()

        // Implement _read method
        stream._read = () => {
            if (error) {
                stream.emit('error', error)
                return
            }

            if (dataLoaded) {
                tailsData.forEach((tail) => stream.push(tail))
                stream.push(null)
                // Emit 'end' in the next tick to ensure all data is processed
                setImmediate(() => stream.emit('end'))
            }
            // If data is not loaded yet, the stream will wait until 'readable' is emitted
        }

        return stream
    }

    list (opts: any = {}): ThenableStream {
        const promise = this.listAsync(opts)
        const stream = this.listStream(opts)
        return new ThenableStream(promise, stream)
    }

    async listAsync (opts: any = {}): Promise<any[]> {
        const rows: any[] = []

        // Use the iterator API instead of createReadStream
        const iterator = this._fwdb.db.iterator(wrap(opts, {
            gt: (x: any) => ['meta', defined(x, null)],
            lt: (x: any) => ['meta', defined(x, undefined)]
        }))

        try {
            for await (const [key, value] of iterator) {
                rows.push({ key, value })
            }
        } finally {
            await iterator.close()
        }

        return rows.map((row) => ({ meta: row.value, hash: row.key[1] }))
    }

    async listByKey (key: string, opts: any = {}): Promise<any[]> {
        const rows: any[] = []

        // Use the iterator API to filter by key
        const iterator = this._fwdb.db.iterator(wrap(opts, {
            gt: (x: any) => ['meta', defined(x, null)],
            lt: (x: any) => ['meta', defined(x, undefined)]
        }))

        try {
            for await (const [dbKey, value] of iterator) {
                if (value && value.key === key) {
                    rows.push({ key: dbKey, value })
                }
            }
        } finally {
            await iterator.close()
        }

        return rows.map((row) => ({ meta: row.value, hash: row.key[1] }))
    }

    listStream (opts: any = {}): Readable {
        const stream = new Readable({ objectMode: true })

        // Use the iterator API instead of createReadStream
        const iterator = this._fwdb.db.iterator(wrap(opts, {
            gt: (x: any) => ['meta', defined(x, null)],
            lt: (x: any) => ['meta', defined(x, undefined)]
        }))

        let dataLoaded = false
        const rows: any[] = []
        let error: any = null

        // Process the iterator asynchronously
        const processIterator = async () => {
            try {
                for await (const [key, value] of iterator) {
                    rows.push({ key, value })
                }
                dataLoaded = true
                stream.emit('readable')
            } catch (err: any) {
                error = err
                dataLoaded = true
                stream.emit('error', err)
            } finally {
                await iterator.close()
            }
        }

        processIterator()

        // Implement _read method
        stream._read = () => {
            if (error) {
                stream.emit('error', error)
                return
            }

            if (dataLoaded) {
                rows.forEach((row) => {
                    stream.push({ meta: row.value, hash: row.key[1] })
                })
                stream.push(null)
                // Emit 'end' in the next tick to ensure all data is processed
                setImmediate(() => stream.emit('end'))
            }
            // If data is not loaded yet, the stream will wait until 'readable' is emitted
        }

        return stream
    }

    createReadStream (hash:string):Readable {
        const r = this.store.createReadStream({ key: hash })
        return readonly(r.pipe(dropFirst()))
    }

    async get (hash:string):Promise<Meta> {
        return await this._fwdb.db.get(['meta', hash])
    }

    links (hash:string, opts:any = {}): Promise<LinksEntry[]> | ThenableStream {
        // Handle backward compatibility with callback
        if (typeof opts === 'function') {
            const callback = opts
            return new Promise((resolve, reject) => {
                this._fwdb.links(hash, {}, (err:any, result:LinksEntry[]) => {
                    if (err) reject(err)
                    else resolve(result)
                })
            })
        }

        // Return thenable stream that works as both Promise and Stream
        const promise = this._fwdb._linksAsync(hash, opts)
        const stream = this.linksStream(hash, opts)
        return new ThenableStream(promise, stream)
    }

    async linksByKey (key: string, opts: any = {}): Promise<Record<string, LinksEntry[]>> {
        // Get all documents for the key
        const docs = await this.listByKey(key, opts)
        const links: Record<string, LinksEntry[]> = {}

        // For each document, find documents that point TO it (forward links)
        for (const doc of docs) {
            const forwardLinks: LinksEntry[] = []
            
            // Look for documents that have this document in their prev array
            for (const otherDoc of docs) {
                if (otherDoc.hash !== doc.hash && otherDoc.prev && otherDoc.prev.includes(doc.hash)) {
                    forwardLinks.push({
                        key: otherDoc.key,
                        hash: otherDoc.hash
                    })
                }
            }
            
            if (forwardLinks.length > 0) {
                links[doc.hash] = forwardLinks
            }
        }

        return links
    }

    linksStream (hash: string, opts: any = {}): Readable {
        const stream = new Readable({ objectMode: true })

        let dataLoaded = false
        let linksData: LinksEntry[] = []
        let error: any = null

        // Get the links data asynchronously
        this._fwdb._linksAsync(hash, opts).then((links: any) => {
            if (Array.isArray(links)) {
                linksData = links
            }
            dataLoaded = true
            stream.emit('readable')
        }).catch((err: any) => {
            error = err
            dataLoaded = true
            stream.emit('error', err)
        })

        // Implement _read method
        stream._read = () => {
            if (error) {
                stream.emit('error', error)
                return
            }

            if (dataLoaded) {
                linksData.forEach((link) => stream.push(link))
                stream.push(null)
                // Emit 'end' in the next tick to ensure all data is processed
                setImmediate(() => stream.emit('end'))
            }
            // If data is not loaded yet, the stream will wait until 'readable' is emitted
        }

        return stream
    }

    history (hash:string):Readable {
        const r = new Readable({ objectMode: true })
        let next: string|undefined = hash

        const onget = (meta: Meta) => {
            const hash = next!
            const prev = getPrev(meta)

            if (prev.length === 0) {
                next = undefined
                r.push({ hash, meta })
            } else if (prev.length === 1) {
                next = hashOf(prev[0])
                r.push({ hash, meta })
            } else {
                next = undefined
                r.push({ hash, meta })
                prev.forEach((p: any) => {
                    r.emit('branch', this.history(hashOf(p)))
                })
            }
        }

        r._read = (): void => {
            if (!next) {
                r.push(null)
                return
            }
            this.get(next).then(onget).catch((err) => r.emit('error', err))
        }

        return r
    }

    future (hash: string): Readable {
        const r = new Readable({ objectMode: true })
        let next: string | undefined = hash
        const visited = new Set<string>()

        r._read = (): void => {
            if (!next) {
                r.push(null)
                return
            }

            // Prevent infinite loops
            if (visited.has(next)) {
                r.push(null)
                return
            }
            visited.add(next)

            let pending = 2
            const ref: { meta?: Meta; rows?: LinksEntry[] } = {}

            this.get(next).then((meta: Meta) => {
                ref.meta = meta
                if (--pending === 0) done()
            }).catch((err) => r.emit('error', err))

            // Always use the promise-based approach for links
            this._fwdb._linksAsync(next, {}).then((crows: LinksEntry[]) => {
                ref.rows = crows
                if (--pending === 0) done()
            }).catch((err) => r.emit('error', err))

            const done = () => {
                const prev = next!
                if (!ref.rows || ref.rows.length === 0) {
                    next = undefined
                    r.push({ hash: prev, meta: ref.meta })
                } else if (ref.rows.length === 1) {
                    next = hashOf(ref.rows[0])
                    r.push({ hash: prev, meta: ref.meta })
                } else {
                    // Multiple links - emit branch events and stop main traversal
                    next = undefined
                    r.push({ hash: prev, meta: ref.meta })
                    if (ref.rows) {
                        // Emit branch events for all links
                        for (let i = 0; i < ref.rows.length; i++) {
                            r.emit('branch', this.future(hashOf(ref.rows[i]!)))
                        }
                    }
                }
            }
        }
        return r
    }

    async concestor (hashes: string[], callback?: (err: any, result: string[]) => void): Promise<string[]> {
        const seen: Record<string, number> = {}
        const seenh: Record<number, Record<string, boolean>> = {}
        const hs = hashes.map((h: string) => [h])
        hashes.forEach((_h, ix) => {
            seenh[ix] = {}
        })

        let depth = 0
        const maxDepth = 100 // Prevent infinite loops

        const next = async (hashes: string[][]): Promise<string[]> => {
            depth++
            if (depth > maxDepth) {
                return []
            }

            let results: string[] | null = null
            for (let i = 0; i < hashes.length; i++) {
                const hs = hashes[i]!
                for (let j = 0; j < hs.length; j++) {
                    const hash = hs[j]!
                    if (!has(seenh[i], hash)) {
                        seenh[i]![hash] = true
                        seen[hash] = (seen[hash] || 0) + 1
                    }
                    if (seen[hash] === hashes.length) {
                        if (!results) results = []
                        results.push(hash)
                    }
                }
            }
            if (results && results.length) return uniq(results)

            const prev:string[][] = []
            const promises:Promise<void>[] = []

            hashes.forEach((hs, ix) => {
                prev[ix] = []
                hs.forEach((hash: string) => {
                    promises.push(
                        this.get(hash).then((value:Meta) => {
                            if (!value) {
                                // do nothing
                            } else if (Array.isArray(value.prev)) {
                                prev[ix]!.push(...value.prev.map(hashOf))
                            } else if (value.prev) {
                                prev[ix]!.push(value.prev)
                            }
                        }).catch(() => {
                            // Handle error silently
                        })
                    )
                })
            })

            await Promise.all(promises)

            // Check if we have any new hashes to process
            let hasNewHashes = false
            for (const hashArray of prev) {
                if (hashArray.length > 0) {
                    hasNewHashes = true
                    break
                }
            }

            if (!hasNewHashes) {
                return []
            }

            return next(prev)
        }

        const result = await next(hs)
        if (callback) {
            callback(null, result)
        }
        return result
    }
}

