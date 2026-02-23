/**
 * Browser-native ForkDB adapter.
 *
 * Implements the forkdb data model — content-addressed, append-only nodes
 * with backward `prev` links and head tracking — on top of `browser-level`
 * (IndexedDB).  No Node.js streams or Buffer polyfills required.
 */
import { BrowserLevel } from 'browser-level'

// ---- types ----------------------------------------------------------------

export interface Meta {
    key:string
    prev?:string[]
    [k:string]:unknown
}

export interface ForkDBDocument {
    hash:string
    key:string
    prev:string[]
}

export interface NodeEntry {
    hash:string
    meta:Meta
}

export interface LinksEntry {
    key:string
    hash:string
}

// ---- helpers ---------------------------------------------------------------

/**
 * Simple content hash (not cryptographic – fine for a demo).
 */
function contentHash (input:string):string {
    let h = 0x811c9dc5   // FNV offset basis
    for (let i = 0; i < input.length; i++) {
        h ^= input.charCodeAt(i)
        h = Math.imul(h, 0x01000193)  // FNV prime
    }
    return (h >>> 0).toString(16).padStart(8, '0')
}

function getPrev (meta:Meta):string[] {
    if (!meta.prev) return []
    return meta.prev.filter(Boolean)
}

function hasPrefix (key:unknown, prefix:string[]):key is string[] {
    if (!Array.isArray(key)) return false
    if (key.length < prefix.length) return false
    for (let i = 0; i < prefix.length; i++) {
        if (key[i] !== prefix[i]) return false
    }
    return true
}

// ---- BrowserForkDB ---------------------------------------------------------

export class BrowserForkDB {
    private db:BrowserLevel<unknown, unknown>
    private _name:string
    _id:string

    constructor (name = 'forkdb') {
        this.db = new BrowserLevel(name, {
            keyEncoding: 'json',
            valueEncoding: 'json',
        })
        this._id = Math.random().toString(36).slice(2)
        this._name = name
    }

    /** Open the underlying IndexedDB store. */
    async open ():Promise<void> {
        await this.db.open()
    }

    /** Close the store. */
    async close ():Promise<void> {
        await this.db.close()
    }

    // ---- write -------------------------------------------------------------

    /**
     * Append a new document.  Returns the content-addressed hash.
     */
    async put (meta:Meta, body = ''):Promise<string> {
        const prev = getPrev(meta)
        const hashInput = JSON.stringify({ key: meta.key, prev, body })
        const hash = contentHash(hashInput)

        const ops:Array<{ type:'put'|'del', key:string[], value?:unknown }> = []

        // Mark key and hash
        ops.push({ type: 'put', key: ['key', meta.key], value: 0 })
        ops.push({ type: 'put', key: ['hash', hash], value: 0 })

        // Store meta
        ops.push({ type: 'put', key: ['meta', hash], value: meta })

        // Store body blob
        ops.push({ type: 'put', key: ['blob', hash], value: body })

        // Tail (if no prev)
        if (prev.length === 0) {
            ops.push({ type: 'put', key: ['tail', meta.key, hash], value: 0 })
        }

        // Head management – remove old heads that this commit supersedes
        for (const phash of prev) {
            ops.push({ type: 'del', key: ['head', meta.key, phash] })
            ops.push({
                type: 'put',
                key: ['link', phash, hash],
                value: meta.key,
            })
        }
        ops.push({ type: 'put', key: ['head', meta.key, hash], value: 0 })

        await this.db.batch(ops as any)
        return hash
    }

    // ---- read --------------------------------------------------------------

    /** Get the metadata for a hash. */
    async get (hash:string):Promise<Meta> {
        const meta = await this.db.get(['meta', hash] as any) as Meta
        if (meta === undefined) {
            throw Object.assign(
                new Error(`Not found: ${hash}`),
                { type: 'NotFoundError' },
            )
        }
        return meta
    }

    /** Get the body blob for a hash. */
    async getBody (hash:string):Promise<string> {
        return (await this.db.get(['blob', hash] as any)) as string
    }

    /** List every key in the store. */
    async keys ():Promise<string[]> {
        const result:string[] = []
        for await (const [key] of this.db.iterator()) {
            if (!hasPrefix(key, ['key'])) continue
            const k = key[1]
            if (typeof k === 'string') {
                result.push(k)
            }
        }
        return result
    }

    /** List all documents. */
    async list ():Promise<NodeEntry[]> {
        const result:NodeEntry[] = []
        for await (const [key, value] of this.db.iterator()) {
            if (!hasPrefix(key, ['meta'])) continue
            const hash = key[1]
            if (typeof hash !== 'string') continue
            result.push({
                hash,
                meta: value as Meta,
            })
        }
        return result
    }

    /** Current heads (latest versions) for a key. */
    async heads (key:string):Promise<string[]> {
        const result:string[] = []
        for await (const [k] of this.db.iterator()) {
            if (!hasPrefix(k, ['head', key])) continue
            const hash = k[2]
            if (typeof hash === 'string') {
                result.push(hash)
            }
        }
        return result
    }

    /** Forward links – what documents reference `hash` as a prev. */
    async links (hash:string):Promise<LinksEntry[]> {
        const result:LinksEntry[] = []
        for await (const [k, value] of this.db.iterator()) {
            if (!hasPrefix(k, ['link', hash])) continue
            const linkedHash = k[2]
            if (typeof linkedHash !== 'string') continue
            result.push({
                hash: linkedHash,
                key: value as string,
            })
        }
        return result
    }

    /** Walk backward through history from a given hash. */
    async history (hash:string):Promise<NodeEntry[]> {
        const result:NodeEntry[] = []
        const visited = new Set<string>()
        let current:string|undefined = hash

        while (current && !visited.has(current)) {
            visited.add(current)
            const meta = await this.get(current)
            result.push({ hash: current, meta })
            const prev = getPrev(meta)
            // Follow first prev link (linear history)
            current = prev[0]
        }

        return result
    }

    /** Tails (root documents with no prev) for a key. */
    async tails (key:string):Promise<string[]> {
        const result:string[] = []
        for await (const [k] of this.db.iterator()) {
            if (!hasPrefix(k, ['tail', key])) continue
            const hash = k[2]
            if (typeof hash === 'string') {
                result.push(hash)
            }
        }
        return result
    }

    /**
     * Delete the IndexedDB database entirely.
     */
    async destroy ():Promise<void> {
        await this.close()
        // browser-level stores data in an IndexedDB database named after
        // the constructor argument.
        const req = indexedDB.deleteDatabase(this._name)
        await new Promise<void>((resolve, reject) => {
            req.onsuccess = () => resolve()
            req.onerror = () => reject(req.error)
        })
    }
}
