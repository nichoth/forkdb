import blob from 'content-addressable-blob-store'
import wrap from 'level-option-wrap'
import exchange from 'hash-exchange'
import bytewise from 'bytewise'
import has from 'has'
import stringify from 'json-stable-stringify'
import uniq from 'uniq'
import through from './through.js'
import { Readable } from 'readable-stream'
import readonly from 'read-only-stream'
import writeonly from 'write-only-stream'
import duplexer from 'duplexer2'
import { EventEmitter } from 'events'
import { type WriteStream } from 'node:fs'
import FWDB from './fwdb.js'
import type {
    Meta,
    ForkDBOptions,
    ReplicateOptions,
    PrebatchOptions,
    DBRow,
    ForkDBDocument,
    LinksEntry,
    HeadsEntry
} from './types.js'

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
        this.store = defined(
            opts.store,
            blob({ dir: defined(opts.dir, './forkdb.blob') })
        )
        this._seen = {}
        this._queue = []
        this._id = opts.id
        this._running = false

        if (this._id === undefined) {
            this._queue.push(async () => {
                this._id = await this._getId()
            })
        }

        this._queue.push(async () => {
            this._seq = await this._getSeq()
        })

        this._runQueue()
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
            return await this.db.get('_id')
        } catch (err: any) {
            if (err.type === 'NotFoundError') {
                const value = generateId()
                await this.db.put('_id', value)
                return value
            }
            throw err
        }
    }

    private async _getSeq (): Promise<number> {
        return new Promise((resolve, reject) => {
            const r = this.db.createReadStream({
                gt: ['seq', null],
                lt: ['seq', undefined],
                reverse: true,
                limit: 1
            })
            r.on('error', reject)
            r.pipe(through.obj(
                (row: any, _enc: BufferEncoding, _next: () => void) => {
                    resolve(row.key[1])
                },
                () => {
                    resolve(0)
                }
            ))
        })
    }

    private async _getSeen (id: string): Promise<number> {
        if (has(this._seen, id)) {
            return this._seen[id]!
        }

        try {
            const seq = await this.db.get(['_seen', id])
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

            this.db.get(['seq-hash', hash]).then((seq: number) => {
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

        ex.on('since', (seq: number) => {
            provideSeq(seq)
        })

        ex.on('seen', async (seq: number) => {
            await this._addSeen(other.id, seq)
        })

        const provideSeq = (seq: number) => {
            let hashes: string[] = []
            const r = this.db.createReadStream({
                gt: ['seq', defined(seq, null)],
                lt: ['seq', undefined]
            })
            let provided = 0

            function flush (this: any) {
                if (hashes.length) ex.provide(hashes)
                hashes = []
                if (provided === 0) done()
            }

            r.pipe(through.obj(
                (row: any, _enc: BufferEncoding, next: () => void) => {
                    hashes.push(row.value)
                    provided++
                    if (hashes.length >= 25) flush()
                    next()
                },
                flush
            ))
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
        const input = through()

        // Handle backward compatibility with callback
        let callback: ((err: any, hash: string) => void) | undefined
        let prebatchOpts: PrebatchOptions = {}

        if (typeof opts === 'function') {
            callback = opts
        } else {
            prebatchOpts = opts
        }

        this._queue.push(async () => {
            const w = await this._createWriteStream(meta, prebatchOpts)
            w.on('error', (err: any) => {
                if (callback) callback(err, '')
            })
            w.on('complete', (hash: string) => {
                if (callback) callback(null, hash)
            })
            input.pipe(w)
        })
        this._runQueue()
        return writeonly(input)
    }

    private async _createWriteStream (
        meta: Meta,
        opts: PrebatchOptions = {}
    ): Promise<WriteStream> {
        const prebatch = defined(
            opts.prebatch,
            (rows: any[], _key: string, fn: any) => { fn(null, rows) }
        )

        const w = this.store.createWriteStream()
        w.write(stringify(meta) + '\n')

        return new Promise((resolve, reject) => {
            w.once('finish', async () => {
                try {
                    const prev = getPrev(meta)
                    const doc: ForkDBDocument = { hash: w.key, key: meta.key, prev }

                    const rows = await this._fwdb._create(doc)

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
                            reject(err)
                            return
                        }
                        if (!Array.isArray(finalRows)) {
                            const error = new Error('prebatch result is not an array')
                            w.emit('error', error)
                            reject(error)
                            return
                        }

                        await this.db.batch(finalRows)
                        w.emit('complete', w.key)
                        this.emit('create', w.key)
                        resolve(w)
                    })
                } catch (err) {
                    w.emit('error', err)
                    reject(err)
                }
            })
        })
    }

    async forks (key: string, opts: any = {}): Promise<HeadsEntry[]> {
        return new Promise((resolve, reject) => {
            this._fwdb.heads(key, opts, (err: any, result: HeadsEntry[]) => {
                if (err) reject(err)
                else resolve(result)
            })
        })
    }

    heads (key: string, opts: any = {}): Promise<HeadsEntry[]> | Readable {
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
        return this.forks(key, opts)
    }

    async keys (opts: any = {}): Promise<string[]> {
        return new Promise((resolve, reject) => {
            this._fwdb.keys(opts, (err: any, result: string[]) => {
                if (err) reject(err)
                else resolve(result)
            })
        })
    }

    tails (key: string, opts: any = {}): Readable {
        const r = this._fwdb.db.createReadStream(wrap(opts, {
            gt: (_x: any) => ['tail', key, null],
            lt: (_x: any) => ['tail', key, undefined]
        }))
        const tr = through.obj(function (this: any, row: any, _enc: BufferEncoding, next: () => void) {
            this.push({ hash: row.key[2] })
            next()
        })
        r.on('error', (err: any) => { tr.emit('error', err) })
        return readonly(r.pipe(tr))
    }

    list (opts: any = {}): Readable {
        const r = this._fwdb.db.createReadStream(wrap(opts, {
            gt: (x: any) => ['meta', defined(x, null)],
            lt: (x: any) => ['meta', defined(x, undefined)]
        }))
        const tr = through.obj(function (this: any, row: any, _enc: BufferEncoding, next: () => void) {
            this.push({ meta: row.value, hash: row.key[1] })
            next()
        })
        r.on('error', (err:Error) => { tr.emit('error', err) })
        return readonly(r.pipe(tr))
    }

    createReadStream (hash:string):Readable {
        const r = this.store.createReadStream({ key: hash })
        return readonly(r.pipe(dropFirst()))
    }

    async get (hash:string):Promise<Meta> {
        return await this._fwdb.db.get(['meta', hash])
    }

    async links (hash:string, opts:any = {}):Promise<LinksEntry[]> {
        return new Promise((resolve, reject) => {
            this._fwdb.links(hash, opts, (err:any, result:LinksEntry[]) => {
                if (err) reject(err)
                else resolve(result)
            })
        })
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

        r._read = (): void => {
            if (!next) {
                r.push(null)
                return
            }

            let pending = 2
            const ref: { meta?: Meta; rows?: LinksEntry[] } = {}

            this.get(next).then((meta: Meta) => {
                ref.meta = meta
                if (--pending === 0) done()
            }).catch((err) => r.emit('error', err))

            this.links(next, {}).then((crows: LinksEntry[]) => {
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
                    next = undefined
                    r.push({ hash: prev, meta: ref.meta })
                    if (ref.rows) {
                        ref.rows.forEach((crow: LinksEntry) => {
                            r.emit('branch', this.future(hashOf(crow)))
                        })
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

        const next = async (hashes: string[][]): Promise<string[]> => {
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
            return next(prev)
        }

        const result = await next(hs)
        if (callback) {
            callback(null, result)
        }
        return result
    }
}

