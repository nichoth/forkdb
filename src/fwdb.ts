import bytewise from 'bytewise'
import through from './through.ts'
import readonly from 'read-only-stream'
import wrap from 'level-option-wrap'
import { EventEmitter } from 'events'
import type { Readable } from 'stream'
import { defined } from './index.ts'

const { encode } = bytewise

// Type definitions
export interface FWDBOptions {
    hash?: string
    key?: string
    prev?: string[] | string
    prebatch?: (rows: any[], done: (err: any, rows: any[]) => void) => void
}

export interface FWDBDocument {
    hash: string
    key: string
    prev: string[]
}

export interface DBRow {
    type: 'put' | 'del'
    key: any[]
    value?: any
}

export interface HeadsEntry {
    hash: string
}

export interface LinksEntry {
    key: string
    hash: string
}

export interface KeysEntry {
    key: string
}

export interface DanglingEntry {
    key: any[]
}

export default class FWDB extends EventEmitter {
    db: any

    constructor (db: any) {
        super()
        // Modern level modules handle encoding options directly
        this.db = db
        
        // Ensure the database has the required methods
        if (!this.db.getAsync) this.db.getAsync = this.db.get
        if (!this.db.putAsync) this.db.putAsync = this.db.put
        if (!this.db.delAsync) this.db.delAsync = this.db.del
        if (!this.db.batchAsync) this.db.batchAsync = this.db.batch
    }

    create (opts: FWDBOptions | FWDBOptions[], cb?: (err: any, rows?: DBRow[]) => void): void {
        if (!cb) cb = noop

        let i = 0
        const rows: DBRow[] = []

        const done = (_err: any, rows: DBRow[]) => {
            this.emit('batch', rows)
            this.db.batchAsync(rows).then(() => cb!(null)).catch(cb!)
        }

        const loop = (err?: any, rows_?: DBRow[]) => {
            if (err) return cb!(err)
            if (rows_) rows.push(...rows_)
            if (i === (opts as FWDBOptions[]).length) done(null, rows)
            else this._create((opts as FWDBOptions[])[i++]!, loop)
        }

        if (!Array.isArray(opts)) {
            this._create(opts as FWDBOptions, done)
        } else {
            loop()
        }
    }

    async _create (opts: FWDBOptions, cb?: (err: any, rows: DBRow[]) => void): Promise<DBRow[]> {
        if (typeof opts === 'function') {
            cb = opts as any
            opts = {}
        }
        if (!opts) opts = {}

        const hash = opts.hash
        let prev = defined(opts.prev, [])
        if (!Array.isArray(prev)) prev = [prev]

        let cbCalled = false
        const cb_ = (err: any, rows?: DBRow[]) => {
            if (!cbCalled) {
                if (cb) cb(err, rows || [])
                cbCalled = true
            }
        }

        const key = opts.key
        const prebatch = defined(
            opts.prebatch,
            (rows: DBRow[], done: (err: any, rows: DBRow[]) => void) => { done(null, rows) }
        )

        const rows: DBRow[] = []
        rows.push({ type: 'put', key: ['key', key], value: 0 })
        rows.push({ type: 'put', key: ['hash', hash], value: 0 })

        let pending = 1 + prev.length

        const commit = () => {
            prebatch(rows, done)
        }

        const done = (err: any, rows_?: DBRow[]) => {
            if (err) return cb_(err)
            if (!Array.isArray(rows_)) return cb_(new Error('prebatch result not an array'))
            cb_(null, rows_)
        }

        const ondangling = (dangling: DanglingEntry[], ex: boolean) => {
            if (dangling.length === 0 && !ex) {
                rows.push({
                    type: 'put',
                    key: ['head', key, hash],
                    value: 0
                })
            }
            dangling.forEach((d) => {
                rows.push({ type: 'del', key: d.key })
                rows.push({ type: 'del', key: ['head', key, hash] })
                rows.push({
                    type: 'put',
                    key: ['link', hash, d.key[3]],
                    value: key
                })
            })
            pending--
            if (pending === 0) commit()
        }

        for (const phash of prev) {
            try {
                const ex = await exists(this.db, ['hash', phash])
                if (ex) {
                    rows.push({
                        type: 'del',
                        key: ['head', key, phash],
                        value: 0
                    })
                    rows.push({
                        type: 'put',
                        key: ['link', phash, hash],
                        value: key
                    })
                } else {
                    rows.push({
                        type: 'put',
                        key: ['dangle', key, phash, hash],
                        value: 0
                    })
                }
                pending--
                if (pending === 0) commit()
            } catch (err) {
                cb_(err)
                return []
            }
        }

        try {
            const ex = await exists(this.db, ['hash', hash])
            const dangling = await getDangling(this.db, key!, hash!)
            ondangling(dangling, ex)
        } catch (err) {
            cb_(err)
            return []
        }

        return new Promise((resolve, reject) => {
            const originalCb = cb
            cb = (err: any, rows?: DBRow[]) => {
                if (originalCb) originalCb(err, rows || [])
                if (err) reject(err)
                else resolve(rows || [])
            }
        })
    }

    async heads (key: string, opts: any = {}, cb?: (err: any, result?: HeadsEntry[]) => void): Promise<HeadsEntry[]> {
        if (typeof opts === 'function') {
            cb = opts
            opts = {}
        }
        if (!opts) opts = {}

        try {
            const results: HeadsEntry[] = []
            const iterator = this.db.iterator(wrap(opts, {
                gt: (x: any) => ['head', key, defined(x, null)],
                lt: (x: any) => ['head', key, defined(x, undefined)]
            }))

            for await (const [key, value] of iterator) {
                results.push({ hash: key[2] })
            }

            if (cb) cb(null, results)
            return results
        } catch (err) {
            if (cb) cb(err, [])
            throw err
        }
    }

    async links (hash: string, opts: any = {}, cb?: (err: any, result?: LinksEntry[]) => void): Promise<LinksEntry[]> {
        if (typeof opts === 'function') {
            cb = opts
            opts = {}
        }
        if (!opts) opts = {}

        try {
            const results: LinksEntry[] = []
            const iterator = this.db.iterator(wrap(opts, {
                gt: (x: any) => ['link', hash, defined(x, null)],
                lt: (x: any) => ['link', hash, defined(x, undefined)]
            }))

            for await (const [key, value] of iterator) {
                results.push({ key: value, hash: key[2] })
            }

            if (cb) cb(null, results)
            return results
        } catch (err) {
            if (cb) cb(err, [])
            throw err
        }
    }

    async keys (opts: any = {}, cb?: (err: any, result?: KeysEntry[]) => void): Promise<KeysEntry[]> {
        if (typeof opts === 'function') {
            cb = opts
            opts = {}
        }
        if (!opts) opts = {}

        try {
            const results: KeysEntry[] = []
            const iterator = this.db.iterator(wrap(opts, {
                gt: (x: any) => ['key', defined(x, null)],
                lt: (x: any) => ['key', defined(x, undefined)]
            }))

            for await (const [key, value] of iterator) {
                results.push({ key: key[1] })
            }

            if (cb) cb(null, results)
            return results
        } catch (err) {
            if (cb) cb(err, [])
            throw err
        }
    }
}

function collect<T> (cb: (err: any, rows: T[]) => void) {
    const rows: T[] = []
    return through.obj(
        function write (row: T, _enc: BufferEncoding, next: () => void) {
            rows.push(row)
            next()
        },
        function end () {
            cb(null, rows)
        }
    )
}

async function exists (db: any, key: any[]): Promise<boolean> {
    try {
        const result = await db.get(key)
        return result !== undefined
    } catch (err: any) {
        if (err.type === 'NotFoundError' || err.code === 'LEVEL_NOT_FOUND') {
            return false
        }
        throw err
    }
}

async function getDangling (db: any, key: string, hash: string): Promise<DanglingEntry[]> {
    const results: DanglingEntry[] = []
    const iterator = db.iterator({
        gt: ['dangle', key, hash, null],
        lt: ['dangle', key, hash, undefined]
    })
    
    try {
        for await (const [key, value] of iterator) {
            results.push({ key })
        }
    } finally {
        await iterator.close()
    }
    
    return results
}

function noop (): void {}
