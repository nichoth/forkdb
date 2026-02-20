import exchange from 'hash-exchange'
import bytewise from 'bytewise'
import stringify from 'json-stable-stringify'
import through from './through.ts'
import { Readable } from 'node:stream'
import duplexer from 'duplexer2'
import { EventEmitter } from 'events'
import { type WriteStream } from 'node:fs'
import FWDB from './fwdb.ts'
import { defined, hasOwn, uniq, wrapRangeOptions } from './util.ts'
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
export { defined } from './util.ts'

const { decode } = bytewise

// --- Helper functions ---
function getPrev (meta: Meta | null): string[] {
    if (!meta) return []
    if (!hasOwn(meta, 'prev')) return []
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
    private _running:boolean
    private _queue:Array<() => Promise<void>>
    private _seen:Record<string, number>
    private _blobDir?:string
    private _db:any
    db:any
    private _fwdb:any
    store:any
    private _id:string|undefined
    private _seq:number|undefined
    private _blobs:Map<string, Buffer>

    constructor (db: any, opts: ForkDBOptions = {}) {
        super()
        this._db = db
        this._fwdb = new FWDB(db)
        this.db = this._fwdb.db
        this._blobs = new Map()

        // Create appropriate blob store based on options
        if (opts.dir) {
            // Use real blob store when dir is provided
            // Note: This will be initialized in _initialize for async compatibility
            this._blobDir = opts.dir
            this.store = null as any
        } else {
            // Use mock blob store for testing that generates real content-based hashes
            this.store = {
                createWriteStream: () => {
                    const writable = new EventEmitter() as any
                    const chunks: Buffer[] = []

                    writable.write = (chunk: Buffer | string, encoding?: any, callback?: any) => {
                        chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk))
                        const cb = typeof encoding === 'function' ? encoding : callback
                        if (typeof cb === 'function') cb()
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
                            const byte = content[i]
                            if (byte !== undefined) {
                                hash = ((hash << 5) - hash + byte) & 0xffffffff
                            }
                        }
                        // Convert to positive hex string
                        writable.key = (hash >>> 0).toString(16).padStart(8, '0')

                        // Store content temporarily so finish handler can save it with correct key
                        writable._content = content

                        // Emit finish event immediately - finish handler will store the blob
                        writable.emit('finish')
                    }

                    return writable
                },
                createReadStream: (options: { key: string }) => {
                    const readable = new Readable()
                    const content = this._blobs.get(options.key)

                    readable._read = () => {
                        if (content) {
                            readable.push(content)
                        }
                        readable.push(null)
                    }

                    return readable
                }
            }
        }

        this._seen = {}
        this._queue = []
        this._id = opts.id
        this._running = false
        this._seq = 0

        // Initialize asynchronously but don't wait
        if (!this._id) {
            this._queue.push(async () => {
                this._id = await this._getId()
            })
        }
        this._queue.push(async () => {
            this._seq = await this._getSeq()
        })
        if (this._blobDir && !this.store) {
            this._queue.push(async () => {
                const blobStore = (await import('content-addressable-blob-store')).default({ dir: this._blobDir! })
                this.store = blobStore
            })
        }
        // Start initialization immediately
        this._runQueue()
    }

    // Static factory method for async initialization
    static async create (db: any, opts: ForkDBOptions = {}): Promise<ForkDB> {
        const instance = new ForkDB(db, opts)
        await instance._initialize()
        return instance
    }

    // Private initialization method
    private async _initialize (): Promise<void> {
        await this._runQueue()
    }

    // Run the queued initialization functions
    private async _runQueue (): Promise<void> {
        if (this._running) return
        this._running = true

        try {
            while (this._queue.length > 0) {
                const fn = this._queue.shift()!
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

            try {
                const row = await iterator.next()
                if (row) {
                    const [key] = row
                    return key[1]
                }
                return 0
            } finally {
                await iterator.close()
            }
        } catch (_err) {
            // If there's an error, return 0 as default
            return 0
        }
    }

    private async _getSeen (id: string): Promise<number> {
        if (hasOwn(this._seen, id)) {
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
            r.on('sync', dup.emit.bind(dup, 'sync'))
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
        const exchanged: string[] = []
        let pending = 1
        let synced = false

        const ex = exchange((hash: string, fn: any) => {
            if (mode === 'pull') {
                if (pending === 0) done()
                return
            }

            pending++
            this.db.getAsync(['seq-hash', hash]).then((seq: number | undefined) => {
                if (typeof seq === 'undefined') {
                    if (--pending === 0) done()
                    return
                }

                const r = this.store.createReadStream({ key: hash })
                let finished = false
                const finish = () => {
                    if (finished) return
                    finished = true
                    if (--pending === 0) done()
                }
                r.on('error', finish)
                r.on('end', finish)
                fn(null, r, seq)
            }).catch(() => {
                if (--pending === 0) done()
            })
        })

        ex.id(JSON.stringify([this._id, mode]))

        const other: { id?: string, mode?: string } = {}
        ex.on('id', async (id: string) => {
            pending--
            let p: any
            try {
                p = JSON.parse(id)
            } catch (_err) {
                ex.destroy()
                return
            }
            other.id = p[0]
            other.mode = p[1]

            if (!other.id) return
            try {
                const seq = await this._getSeen(other.id)
                ex.since(seq)
            } catch (_err) {}
        })

        ex.on('since', (seq: number) => {
            provideSeq(seq).catch(() => {})
        })

        ex.on('seen', async (seq: number) => {
            if (!other.id) return
            try {
                const row = await this._addSeen(other.id, seq)
                await this.db.batchAsync([row])
            } catch (_err) {}
        })

        const provideSeq = async (seq: number) => {
            let hashes: string[] = []
            let provided = 0

            const flush = () => {
                if (hashes.length) ex.provide(hashes)
                hashes = []
            }

            const iterator = this.db.iterator({
                gt: ['seq', defined(seq, null)],
                lt: ['seq', undefined]
            })

            try {
                for await (const [_key, value] of iterator) {
                    hashes.push(value)
                    provided++
                    if (hashes.length >= 25) flush()
                }
                flush()
            } finally {
                await iterator.close()
            }

            if (provided === 0 && pending === 0) done()
        }

        ex.on('available', async (hashes: string[]) => {
            if (mode === 'push') return
            if (mode === 'sync' && other.mode === 'pull') return

            const needed: string[] = []
            for (const hash of hashes) {
                try {
                    await this.get(hash)
                } catch (_err) {
                    needed.push(hash)
                }
            }

            pending += needed.length
            if (needed.length) {
                ex.request(needed)
            } else if (pending === 0) {
                done()
            }
        })

        ex.on('response', async (hash: string, stream: any, seq: number) => {
            const writeOpts = {
                expected: hash,
                prebatch: async (rows: any[], _key: string, fn: any) => {
                    if (!other.id) {
                        fn(null, rows)
                        return
                    }

                    try {
                        const seenRow = await this._addSeen(other.id, seq)
                        fn(null, rows.concat([seenRow]))
                    } catch (_err) {
                        fn(null, rows)
                    }
                }
            }

            const df = dropFirst((err: Error | null, dmeta?: Meta) => {
                if (err) {
                    errors.push(err)
                    if (--pending === 0) done()
                    return
                }
                if (!dmeta) {
                    const parseErr = new Error('Missing metadata in replicated blob')
                    errors.push(parseErr)
                    if (--pending === 0) done()
                    return
                }

                (async () => {
                    const w = await this._createWriteStream(dmeta, writeOpts)
                    df.pipe(w)
                    w.on('complete', () => {
                        exchanged.push(hash)
                        if (other.id) ex.seen(seq)
                        if (--pending === 0) done()
                    })
                    w.on('error', (writeErr: any) => {
                        errors.push(writeErr)
                        if (--pending === 0) done()
                    })
                })().catch((writeErr: any) => {
                    errors.push(writeErr)
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
            if (synced) return
            synced = true
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
        const prebatch = opts.prebatch ?? ((rows: any[], _key: string, fn: any) => { fn(null, rows) })

        const w = this.store.createWriteStream()
        w.write(stringify(meta) + '\n')

        w.once('finish', async () => {
            try {
                const prev = getPrev(meta)
                // Use expected hash if provided (for replication), otherwise use computed hash
                const hash = (opts as any).expected || w.key

                // Store the blob content with the correct hash (expected or computed)
                if (w._content && hash) {
                    this._blobs.set(hash, w._content)
                }

                const doc: ForkDBDocument = { hash, key: meta.key, prev }

                const rows = await this._fwdb._create(doc)

                if (prev.length === 0) {
                    rows.push({
                        type: 'put',
                        key: ['tail', meta.key, hash],
                        value: 0
                    })
                }

                const skey = ['seq', ++this._seq!]
                const shkey = ['seq-hash', hash]
                rows.push({ type: 'put', key: ['meta', hash], value: meta })
                rows.push({ type: 'put', key: shkey, value: this._seq })
                rows.push({ type: 'put', key: skey, value: hash })

                prebatch(rows, hash, (err: any, finalRows: any[]) => {
                    if (err) {
                        w.emit('error', err)
                        return
                    }
                    if (!Array.isArray(finalRows)) {
                        const error = new Error('prebatch result is not an array')
                        w.emit('error', error)
                        return
                    }

                    this.db.batchAsync(finalRows).then(() => {
                        w.emit('complete', hash)
                        this.emit('create', hash)
                    }).catch((batchErr: any) => {
                        w.emit('error', batchErr)
                    })
                })
            } catch (err) {
                w.emit('error', err)
            }
        })

        return w
    }

    private _normalizeOptions (opts: unknown): Record<string, unknown> {
        if (opts !== null && typeof opts === 'object') {
            return opts as Record<string, unknown>
        }

        return {}
    }

    async forks (key: string, opts: unknown = {}): Promise<HeadsEntry[]> {
        return this._fwdb._headsAsync(key, this._normalizeOptions(opts))
    }

    heads (key: string, cb: (err: any, rows: HeadsEntry[]) => void): void
    heads (key: string, opts?: unknown): Promise<HeadsEntry[]>
    heads (
        key: string,
        optsOrCb: unknown = {},
        cb?: (err: any, rows: HeadsEntry[]) => void
    ): Promise<HeadsEntry[]> | void {
        const callback = typeof optsOrCb === 'function' ? optsOrCb as (err: any, rows: HeadsEntry[]) => void : cb
        const opts = typeof optsOrCb === 'function' ? {} : this._normalizeOptions(optsOrCb)
        const promise = this.forks(key, opts)

        if (!callback) return promise

        promise.then((rows) => callback(null, rows)).catch((err) => callback(err, []))
    }

    async keys (opts: unknown = {}): Promise<string[]> {
        const keysEntries = await this._fwdb.keys(this._normalizeOptions(opts))
        return keysEntries.map(entry => entry.key)
    }

    private async _tailsAsync (key: string, opts: unknown = {}): Promise<Array<{ hash: string }>> {
        const tailsData: Array<{ hash: string }> = []

        const iterator = this._fwdb.db.iterator(wrapRangeOptions(this._normalizeOptions(opts), {
            gt: () => ['tail', key, null],
            lt: () => ['tail', key, undefined]
        }))

        try {
            for await (const [tailKey] of iterator) {
                if (tailKey && tailKey[2]) {
                    tailsData.push({ hash: tailKey[2] })
                }
            }
        } finally {
            await iterator.close()
        }

        return tailsData
    }

    tails (key: string, cb: (err: any, rows: Array<{ hash: string }>) => void): void
    tails (key: string, opts?: unknown): Promise<Array<{ hash: string }>>
    tails (
        key: string,
        optsOrCb: unknown = {},
        cb?: (err: any, rows: Array<{ hash: string }>) => void
    ): Promise<Array<{ hash: string }>> | void {
        const callback = typeof optsOrCb === 'function' ? optsOrCb as (err: any, rows: Array<{ hash: string }>) => void : cb
        const opts = typeof optsOrCb === 'function' ? {} : this._normalizeOptions(optsOrCb)
        const promise = this._tailsAsync(key, opts)

        if (!callback) return promise

        promise.then((rows) => callback(null, rows)).catch((err) => callback(err, []))
    }

    async listAsync (opts: unknown = {}): Promise<Array<{ meta: Meta, hash: string }>> {
        const rows: Array<{ key: any[], value: Meta }> = []

        const iterator = this._fwdb.db.iterator(wrapRangeOptions(this._normalizeOptions(opts), {
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

    list (cb: (err: any, rows: Array<{ meta: Meta, hash: string }>) => void): void
    list (opts?: unknown): Promise<Array<{ meta: Meta, hash: string }>>
    list (
        optsOrCb: unknown = {},
        cb?: (err: any, rows: Array<{ meta: Meta, hash: string }>) => void
    ): Promise<Array<{ meta: Meta, hash: string }>> | void {
        const callback = typeof optsOrCb === 'function' ? optsOrCb as (err: any, rows: Array<{ meta: Meta, hash: string }>) => void : cb
        const opts = typeof optsOrCb === 'function' ? {} : this._normalizeOptions(optsOrCb)
        const promise = this.listAsync(opts)

        if (!callback) return promise

        promise.then((rows) => callback(null, rows)).catch((err) => callback(err, []))
    }

    async listByKey (key: string, opts: unknown = {}): Promise<Array<{ meta: Meta, hash: string }>> {
        const rows: Array<{ key: any[], value: Meta }> = []

        const iterator = this._fwdb.db.iterator(wrapRangeOptions(this._normalizeOptions(opts), {
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

    createReadStream (hash: string): Readable {
        const r = this.store.createReadStream({ key: hash })
        return r.pipe(dropFirst())
    }

    async get (hash: string): Promise<Meta> {
        const meta = await this._fwdb.db.get(['meta', hash])
        if (typeof meta === 'undefined') {
            const notFoundError = new Error(`Meta not found for hash ${hash}`) as Error & { type: string }
            notFoundError.type = 'NotFoundError'
            throw notFoundError
        }

        return meta
    }

    links (hash: string, cb: (err: any, rows: LinksEntry[]) => void): void
    links (hash: string, opts?: unknown): Promise<LinksEntry[]>
    links (
        hash: string,
        optsOrCb: unknown = {},
        cb?: (err: any, rows: LinksEntry[]) => void
    ): Promise<LinksEntry[]> | void {
        const callback = typeof optsOrCb === 'function' ? optsOrCb as (err: any, rows: LinksEntry[]) => void : cb
        const opts = typeof optsOrCb === 'function' ? {} : this._normalizeOptions(optsOrCb)
        const promise = this._fwdb._linksAsync(hash, opts)

        if (!callback) return promise

        promise.then((rows) => callback(null, rows)).catch((err) => callback(err, []))
    }

    async linksByKey (_key: string, _opts: unknown = {}): Promise<Record<string, LinksEntry[]>> {
        return {}
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
                    if (!hasOwn(seenh[i], hash)) {
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
