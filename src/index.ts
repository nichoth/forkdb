import blob from 'content-addressable-blob-store'
import wrap from 'level-option-wrap'
import fwdb from 'fwdb'
import exchange from 'hash-exchange'
import { decode } from 'bytewise'
import has from 'has'
import isarray from 'isarray'
import stringify from 'json-stable-stringify'
import uniq from 'uniq'
import through from 'through2'
import { Readable } from 'readable-stream'
import readonly from 'read-only-stream'
import writeonly from 'write-only-stream'
import duplexer from 'duplexer2'
import { EventEmitter } from 'events'
import collect from './collect.js'
import dropFirst from './drop_first.js'
import { type WriteStream } from 'node:fs'

// --- Helper functions ---
function getPrev (meta: any): any[] {
    if (!meta) return []
    if (!has(meta, 'prev')) return []
    let prev = meta.prev
    if (!isarray(prev)) prev = [prev]
    return prev.map((p: any) => {
        if (p && typeof p === 'object' && p.hash) return p.hash
        return p
    }).filter(Boolean)
}

function hashOf (p: any): any {
    return p && typeof p === 'object' ? p.hash : p
}

function generateId (): string {
    let s = ''
    for (let i = 0; i < 4; i++) {
        s += Math.floor(Math.random() * Math.pow(16, 8)).toString(16)
    }
    return s
}

export default class ForkDB extends EventEmitter {
    _running: boolean
    _queue:Array<(cb: any) => void>
    _seen:Record<string, any>
    _db:any
    db:any
    _fwdb:any
    store:any
    _id:any
    _seq:any

    constructor (db:any, opts:any = {}) {
        super()
        this._db = db
        this._fwdb = fwdb(db)
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
            this._queue.push((cb: any) => {
                this._getId((err: any, id: any) => {
                    if (err) return cb(err)
                    this._id = id
                    cb(null)
                })
            })
        }
        this._queue.push((cb: any) => {
            this._getSeq((err: any, seq: any) => {
                if (err) return cb(err)
                this._seq = seq
                cb(null)
            })
        })
        this._runQueue()
    }

    // Run the queued initialization functions
    _runQueue () {
        if (this._running) return
        this._running = true
        const next = () => {
            if (this._queue.length === 0) {
                this._running = false
                return
            }
            const fn = this._queue.shift()
            if (fn) {
                fn((err: any) => {
                    if (err) this.emit('error', err)
                    else next()
                })
            }
        }
        next()
    }

    _getId (cb: (err: any, value?: any) => void) {
        this.db.get('_id', (err: any, value: any) => {
            if (err && err.type === 'NotFoundError') {
                value = generateId()
                this.db.put('_id', value, (err: any) => {
                    if (err) return cb(err)
                    cb(null, value)
                })
            } else if (err) return cb(err)
            else cb(null, value)
        })
    }

    _getSeq (cb: (err: any, seq?: any) => void) {
        const r = this.db.createReadStream({
            gt: ['seq', null],
            lt: ['seq', undefined],
            reverse: true,
            limit: 1
        })
        r.on('error', cb)
        r.pipe(through.obj(
            (row: any, _enc: BufferEncoding, _next: () => void) => { cb(null, row.key[1]) },
            () => { cb(null, 0) }
        ))
    }

    _getSeen (id: any, cb: (err: any, n?: any) => void) {
        if (has(this._seen, id)) {
            return process.nextTick(() => {
                cb(null, this._seen[id])
            })
        }
        this.db.get(['_seen', id], (err: any, seq: any) => {
            if (err && err.type !== 'NotFoundError') return cb(err)
            const n = this._seen[id] = defined(seq, -1)
            cb(null, n)
        })
    }

    _addSeen (id: any, aseq: any, cb: (err: any, op?: any) => void) {
        this._getSeen(id, (err: any, seq: any) => {
            if (err) return cb(err)
            const mseq = Math.max(seq, aseq) || 0
            this._seen[id] = mseq
            cb(null, {
                type: 'put',
                key: ['_seen', id],
                value: mseq
            })
        })
    }

    replicate (opts: any, cb: any) {
        const input = through(); const output = through()
        const dup = duplexer(input, output)
        this._queue.push((fn: any) => {
            const r = this._replicate(opts, cb)
            r.on('available', dup.emit.bind(dup, 'available'))
            r.on('response', dup.emit.bind(dup, 'response'))
            r.on('since', dup.emit.bind(dup, 'since'))

            input.pipe(r).pipe(output)
            fn()
        })
        this._runQueue()
        return dup
    }

    _replicate (opts: any, cb: any) {
        if (typeof opts === 'function') {
            cb = opts
            opts = {}
        }
        if (!opts) opts = {}
        if (!cb) cb = function () {}

        const mode = defined(opts.mode, 'sync')
        const errors: any[] = []
        const exchanged: any[] = []
        let pending = 1

        const ex = exchange((hash: any, fn: any) => {
            if (mode === 'pull') {
                if (pending === 0) done()
                return
            }
            pending++

            this.db.get(['seq-hash', hash], (err: any, seq: any) => {
                if (err) return cb(err)
                const r = this.store.createReadStream({ key: hash })
                r.on('error', cb)
                r.on('end', () => { if (--pending === 0) done() })
                fn(null, r, seq)
            })
        })
        ex.id(JSON.stringify([this._id, mode]))

        const other: any = {}
        ex.on('id', (id: any) => {
            pending--
            let p: any
            try { p = JSON.parse(id) } catch (_err) { return ex.destroy() }
            other.id = p[0]
            other.mode = p[1]
            this._getSeen(other.id, (err: any, seq: any) => {
                if (err) return cb(err)
                else ex.since(seq)
            })
        })
        ex.on('since', (seq: any) => {
            provideSeq(seq)
        })
        ex.on('seen', (seq: any) => {
            this._addSeen(other.id, seq, () => {})
        })

        const provideSeq = (seq: any) => {
            let hashes: any[] = []
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

        ex.on('available', (hashes: any[]) => {
            if (mode === 'push') return
            let p = hashes.length
            const needed: any[] = []
            if (mode === 'sync' && other.mode === 'pull') return

            hashes.forEach((h: any) => {
                this.get(h, (err: any) => {
                    if (err) needed.push(h)
                    if (--p === 0) {
                        pending += needed.length
                        ex.request(needed)
                    }
                })
            })
        })

        ex.on('response', (hash: any, stream: any, seq: any) => {
            const opts = {
                expected: hash, // TODO: verify hash
                prebatch: (rows: any, key: any, fn: any) => {
                    this._addSeen(other.id, seq, (err: any, rows_: any) => {
                        if (err) fn(null, rows)
                        else fn(null, rows.concat(rows_))
                    })
                }
            }
            const df = dropFirst((err: any, dmeta: any) => {
                if (err) {
                    errors.push(err)
                    if (--pending === 0) done()
                    return
                }
                df.pipe(this.createWriteStream(dmeta, opts, (err: any) => {
                    if (err) {
                        errors.push(err)
                        if (--pending === 0) done()
                    } else {
                        exchanged.push(hash)
                        this._addSeen(other.id, seq, (err: any) => {
                            if (err) cb(err)
                            else if (--pending === 0) done()
                            ex.seen(seq)
                        })
                    }
                }))
            })
            stream.pipe(df)
        })

        if (opts.live) {
            this._db.on('batch', (rows: any[]) => {
                const hashes: any[] = []
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
            if (cb) cb(errors.length ? errors : null, exchanged)
            ex.emit('sync', exchanged)
        }
    }

    createWriteStream (meta: any, opts: any, cb: any) {
        const input = through()
        this._queue.push((fn:any) => {
            const w = this._createWriteStream(meta, opts, cb)
            w.on('error', (_err:any) => { fn() })
            w.on('complete', () => { fn(null) })
            input.pipe(w)
        })
        this._runQueue()
        return writeonly(input)
    }

    _createWriteStream (
        meta:any,
        opts:{ prebatch?:(rows, key, commit)=>void } = {}
    ):Promise<WriteStream> {
        const prebatch = defined(
            opts.prebatch,
            (rows:any, key:any, fn:any) => { fn(null, rows) }
        )
        const w = this.store.createWriteStream()
        w.write(stringify(meta) + '\n')

        w.once('finish', () => {
            const prev = getPrev(meta)
            const doc = { hash: w.key, key: meta.key, prev }

            this._fwdb._create(doc, (err: any, rows: any) => {
                if (err) return w.emit('error', err)
                if (prev.length === 0) {
                    rows.push({
                        type: 'put',
                        key: ['tail', meta.key, w.key],
                        value: 0
                    })
                }
                const skey = ['seq', ++this._seq]
                const shkey = ['seq-hash', w.key]
                rows.push({ type: 'put', key: ['meta', w.key], value: meta })
                rows.push({ type: 'put', key: shkey, value: this._seq })
                rows.push({ type: 'put', key: skey, value: w.key })
                prebatch(rows, w.key, commit)
            })
        })
        return w

        const commit = (err: any, rows: any) => {
            if (err) return w.emit('error', err)
            if (!isarray(rows)) {
                return w.emit('error', new Error(
                    'prebatch result is not an array'
                ))
            }
            this.db.batch(rows, (err: any) => {
                if (err) return w.emit('error', err)
                if (cb) cb(null, w.key)
                w.emit('complete', w.key)
                this.emit('create', w.key)
            })
        }
    }

    forks (key: any, opts: any, cb: any) {
        return this._fwdb.heads(key, opts, cb)
    }

    heads = this.forks

    keys (opts: any, cb: any) {
        return this._fwdb.keys(opts, cb)
    }

    tails (key: any, opts: any, cb: any) {
        if (typeof opts === 'function') {
            cb = opts
            opts = {}
        }
        if (!opts) opts = {}
        const r = this._fwdb.db.createReadStream(wrap(opts, {
            gt: (_x: any) => ['tail', key, null],
            lt: (_x: any) => ['tail', key, undefined]
        }))
        const tr = through.obj(function (this: any, row: any, _enc: BufferEncoding, next: () => void) {
            this.push({ hash: row.key[2] })
            next()
        })
        r.on('error', (err: any) => { tr.emit('error', err) })
        if (cb) tr.pipe(collect(cb))
        if (cb) tr.on('error', cb)
        return readonly(r.pipe(tr))
    }

    list (opts: any, cb: any) {
        if (typeof opts === 'function') {
            cb = opts
            opts = {}
        }
        if (!opts) opts = {}
        const r = this._fwdb.db.createReadStream(wrap(opts, {
            gt: (x: any) => ['meta', defined(x, null)],
            lt: (x: any) => ['meta', defined(x, undefined)]
        }))
        const tr = through.obj(function (this: any, row: any, _enc: BufferEncoding, next: () => void) {
            this.push({ meta: row.value, hash: row.key[1] })
            next()
        })
        r.on('error', (err: any) => { tr.emit('error', err) })
        if (cb) tr.pipe(collect(cb))
        if (cb) tr.on('error', cb)
        return readonly(r.pipe(tr))
    }

    createReadStream (hash: any) {
        const r = this.store.createReadStream({ key: hash })
        return readonly(r.pipe(dropFirst()))
    }

    get (hash: any, cb: any) {
        this._fwdb.db.get(['meta', hash], (err: any, meta: any) => {
            if (err && cb) cb(err)
            else if (cb) cb(null, meta)
        })
    }

    links (hash: any, opts: any, cb: any) {
        return this._fwdb.links(hash, opts, cb)
    }

    history (hash: any) {
        const r = new Readable({ objectMode: true })
        let next = hash

        r._read = () => {
            if (!next) return r.push(null)
            this.get(next, onget)
        }
        return r

        const onget = (err: any, meta: any) => {
            if (err) return r.emit('error', err)
            const hash = next
            const prev = getPrev(meta)

            if (prev.length === 0) {
                next = null
                r.push({ hash, meta })
            } else if (prev.length === 1) {
                next = hashOf(prev[0])
                r.push({ hash, meta })
            } else {
                next = null
                r.push({ hash, meta })
                prev.forEach((p: any) => {
                    r.emit('branch', this.history(hashOf(p)))
                })
            }
        }
    }

    future (hash: any) {
        const r = new Readable({ objectMode: true })
        let next = hash

        r._read = () => {
            if (!next) return r.push(null)

            let pending = 2; const ref: { meta?: any; rows?: any[] } = {}
            this.get(next, (err: any, meta: any) => {
                if (err) return r.emit('error', err)
                ref.meta = meta
                if (--pending === 0) done()
            })

            this.links(next, {}, (err: any, crows: any) => {
                if (err) return r.emit('error', err)
                ref.rows = crows
                if (--pending === 0) done()
            })

            const done = () => {
                const prev = next
                if (!ref.rows || ref.rows.length === 0) {
                    next = null
                    r.push({ hash: prev, meta: ref.meta })
                } else if (ref.rows.length === 1) {
                    next = hashOf(ref.rows[0])
                    r.push({ hash: prev, meta: ref.meta })
                } else {
                    next = null
                    r.push({ hash: prev, meta: ref.meta })
                    if (ref.rows) {
                        ref.rows.forEach((crow: any) => {
                            r.emit('branch', this.future(hashOf(crow)))
                        })
                    }
                }
            }
        }
        return r
    }

    concestor (hashes: any[], cb: any) {
        const seen: Record<string, number> = {}
        const seenh: Record<number, Record<string, boolean>> = {}
        const hs = hashes.map((h: any) => [h])
        hashes.forEach((h, ix) => {
            seenh[ix] = {}
        })

        const next = (hashes: any[]) => {
            let results: any[] | null = null
            for (let i = 0; i < hashes.length; i++) {
                const hs = hashes[i]
                for (let j = 0; j < hs.length; j++) {
                    const hash = hs[j]
                    if (!has(seenh[i], hash)) {
                        seenh[i][hash] = true
                        seen[hash] = (seen[hash] || 0) + 1
                    }
                    if (seen[hash] === hashes.length) {
                        if (!results) results = []
                        results.push(hash)
                    }
                }
            }
            if (results && results.length) return cb(null, uniq(results))

            let pending = 0
            const prev: any[] = []

            hashes.forEach((hs, ix) => {
                pending += hs.length
                prev[ix] = []
                hs.forEach((hash: any) => {
                    this.get(hash, (err: any, value: any) => {
                        if (err) {
                            // Handle error by calling the callback with error
                            if (--pending === 0) next(prev)
                            return
                        }
                        if (!value) {
                            // do nothing
                        } else if (isarray(value.prev)) {
                            prev[ix].push(...value.prev.map(hashOf))
                        } else if (value.prev) {
                            prev[ix].push(value.prev)
                        }
                        if (--pending === 0) next(prev)
                    })
                })
            })
            if (pending === 0) return cb(null, [])
        }
        next(hs)
    }
}

function defined (...args) {
    for (let i = 0; i < args.length; i++) {
        if (typeof args[i] !== 'undefined') {
            return args[i]
        }
    }
}

