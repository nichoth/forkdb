import wrap from 'level-option-wrap'
import { EventEmitter } from 'events'
import { defined } from './index.ts'

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

    async create (opts: FWDBOptions | FWDBOptions[]): Promise<DBRow[]> {
        if (!Array.isArray(opts)) {
            const rows = await this._create(opts as FWDBOptions)
            this.emit('batch', rows)
            await this.db.batchAsync(rows)
            return rows
        } else {
            const allRows: DBRow[] = []
            for (const opt of opts) {
                const rows = await this._create(opt)
                allRows.push(...rows)
            }
            this.emit('batch', allRows)
            await this.db.batchAsync(allRows)
            return allRows
        }
    }

    async _create (opts: FWDBOptions): Promise<DBRow[]> {
        if (!opts) opts = {}

        const hash = opts.hash
        let prev = defined(opts.prev, [])
        if (!Array.isArray(prev)) prev = [prev]

        const key = opts.key
        const prebatch = defined(
            opts.prebatch,
            (rows: DBRow[], done: (err: any, rows: DBRow[]) => void) => { done(null, rows) }
        )

        const rows: DBRow[] = []
        rows.push({ type: 'put', key: ['key', key], value: 0 })
        rows.push({ type: 'put', key: ['hash', hash], value: 0 })

        let pending = 1 + prev.length

        const commit = (): Promise<DBRow[]> => {
            return new Promise((resolve, reject) => {
                prebatch(rows, (err: any, finalRows: DBRow[]) => {
                    if (err) {
                        reject(err)
                        return
                    }
                    resolve(finalRows || rows)
                })
            })
        }

        const ondangling = (dangling: DanglingEntry[], ex: boolean): Promise<DBRow[]> => {
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
            if (pending === 0) {
                return commit()
            }
            return Promise.resolve(rows)
        }

        for (const phash of prev) {
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
            if (pending === 0) {
                return commit()
            }
        }

        const ex = await exists(this.db, ['hash', hash])
        const dangling = await getDangling(this.db, key!, hash!)
        return ondangling(dangling, ex)
    }

    async _headsAsync (key: string, opts: any = {}): Promise<HeadsEntry[]> {
        const results: HeadsEntry[] = []
        const iterator = this.db.iterator(wrap(opts, {
            gt: (x: any) => ['head', key, defined(x, null)],
            lt: (x: any) => ['head', key, defined(x, undefined)]
        }))

        for await (const [key, _value] of iterator) {
            results.push({ hash: key[2] })
        }

        return results
    }

    // Callback-based version for backward compatibility
    heads (key: string, opts: any, cb: (err: any, result: HeadsEntry[]) => void): void {
        this._headsAsync(key, opts).then((result) => {
            cb(null, result)
        }).catch((err) => {
            cb(err, [])
        })
    }

    async _linksAsync (hash: string, opts: any = {}): Promise<LinksEntry[]> {
        const results: LinksEntry[] = []
        const iterator = this.db.iterator(wrap(opts, {
            gt: (x: any) => ['link', hash, defined(x, null)],
            lt: (x: any) => ['link', hash, defined(x, undefined)]
        }))

        for await (const [key, value] of iterator) {
            results.push({ key: value, hash: key[2] })
        }

        return results
    }

    // Callback-based version for backward compatibility
    links (hash: string, opts: any, cb: (err: any, result: LinksEntry[]) => void): void {
        this._linksAsync(hash, opts).then((result) => {
            cb(null, result)
        }).catch((err) => {
            cb(err, [])
        })
    }

    async keys (opts: any = {}): Promise<KeysEntry[]> {
        const results: KeysEntry[] = []
        const iterator = this.db.iterator(wrap(opts, {
            gt: (x: any) => ['key', defined(x, null)],
            lt: (x: any) => ['key', defined(x, undefined)]
        }))

        for await (const [key, _value] of iterator) {
            results.push({ key: key[1] })
        }

        return results
    }
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
        for await (const [key, _value] of iterator) {
            results.push({ key })
        }
    } finally {
        await iterator.close()
    }

    return results
}
