// Core interfaces for ForkDB
export interface Meta {
    key:string
    prev?:string[]|string|Array<{hash:string, key:string}>
    [key:string]:any
}

export interface ForkDBOptions {
    store?: any
    dir?: string
    id?: string
}

export interface ReplicateOptions {
    mode?: 'sync' | 'push' | 'pull'
    live?: boolean
}

export interface DBRow {
    type: 'put' | 'del'
    key: any[]
    value?: any
}

export interface PrebatchOptions {
    prebatch?: (rows: DBRow[], key: string, commit: (err: any, rows: DBRow[]) => void) => void
}

export interface ForkDBDocument {
    hash: string
    key: string
    prev: string[]
}

export interface HistoryEntry {
    hash: string
    meta: Meta
}

export interface ListEntry {
    meta: Meta
    hash: string
}

export interface LinksEntry {
    key: string
    hash: string
}

export interface TailsEntry {
    hash: string
}

export interface HeadsEntry {
    hash: string
}

// Stream types
export interface ReadableStream extends NodeJS.ReadableStream {
    _read(): void
}

export interface WritableStream extends NodeJS.WritableStream {
    write(chunk: any): boolean
    end(chunk?: any): this
}

// Database operation types
export interface BatchOperation {
    type: 'put' | 'del'
    key: any[]
    value?: any
}

// Replication types
export interface ReplicationExchange {
    id(id: string): void
    since(seq: number): void
    seen(seq: number): void
    provide(hashes: string[]): void
    request(hashes: string[]): void
    on(event: string, listener: (...args: any[]) => void): this
    emit(event: string, ...args: any[]): boolean
    destroy(): void
}

// Store types
export interface BlobStore {
    createWriteStream(): WritableStream & { key: string }
    createReadStream(options: { key: string }): ReadableStream
}

// FWDB types
export interface FWDB {
    db: any
    heads(key: string, opts: any, cb: (err: any, result: HeadsEntry[]) => void): void
    keys(opts: any, cb: (err: any, result: string[]) => void): void
    links(hash: string, opts: any, cb: (err: any, result: LinksEntry[]) => void): void
    _create(doc: ForkDBDocument): Promise<DBRow[]>
}
