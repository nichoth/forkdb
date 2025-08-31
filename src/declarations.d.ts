// Type declarations for external modules without TypeScript definitions

declare module 'content-addressable-blob-store' {
    interface BlobStoreOptions {
        dir?: string
    }

    interface WriteStream extends NodeJS.WritableStream {
        key: string
    }

    interface ReadStream extends NodeJS.ReadableStream {}

    interface BlobStore {
        createWriteStream(): WriteStream
        createReadStream(options: { key: string }): ReadStream
    }

    function blob(options?: BlobStoreOptions): BlobStore
    export = blob
}

declare module 'level-option-wrap' {
    function wrap<T>(options: T, defaults: Record<string, any>): T
    export = wrap
}

declare module 'levelup-defaults' {
    function defaults(db: any, options: any): any
    export = defaults
}

declare module 'hash-exchange' {
    interface ExchangeOptions {}

    interface Exchange {
        id(id: string): void
        since(seq: number): void
        seen(seq: number): void
        provide(hashes: string[]): void
        request(hashes: string[]): void
        on(event: string, listener: (...args: any[]) => void): this
        emit(event: string, ...args: any[]): boolean
        destroy(): void
    }

    function exchange(handler: (hash: string, fn: any) => void, options?: ExchangeOptions): Exchange
    export = exchange
}

declare module 'bytewise' {
    function encode(value: any): Buffer
    function decode(buffer: Buffer): any
    export { encode, decode }
}

declare module 'has' {
    function has(obj: any, key: string): boolean
    export = has
}

declare module 'json-stable-stringify' {
    function stringify(value: any, options?: any): string
    export = stringify
}

declare module 'uniq' {
    function uniq<T>(array: T[]): T[]
    export = uniq
}

declare module 'readable-stream' {
    export { Readable } from 'stream'
}

declare module 'read-only-stream' {
    import type { Readable } from 'stream'

    function readonly(stream: Readable): Readable
    export = readonly
}

declare module 'write-only-stream' {
    import type { Writable } from 'stream'

    function writeonly(stream: Writable): Writable
    export = writeonly
}

declare module 'duplexer2' {
    import type { Duplex } from 'stream'

    function duplexer(writable: NodeJS.WritableStream, readable: NodeJS.ReadableStream): Duplex
    export = duplexer
}

// Test dependencies
declare module 'tape' {
    interface Test {
        plan(count: number): void
        equal(actual: any, expected: any, message?: string): void
        deepEqual(actual: any, expected: any, message?: string): void
        ifError(err: any): void
        fail(message?: string): void
        on(event: string, listener: (...args: any[]) => void): this
        bind(context: any): (err: any, ...args: any[]) => void
    }

    function test(name: string, fn: (t: Test) => void): void
    export = test
}

declare module 'level' {
    interface LevelDB {
        get(key: any): Promise<any>
        put(key: any, value: any): Promise<void>
        batch(operations: any[]): Promise<void>
        createReadStream(options?: any): NodeJS.ReadableStream
    }

    function level(location: string, options?: any): LevelDB
    export = level
}

declare module 'mkdirp' {
    function mkdirp(path: string): Promise<void>
    function mkdirp(path: string, callback: (err: any) => void): void
    function sync(path: string): void
    export = mkdirp
}

declare module 'concat-stream' {
    import type { Writable } from 'stream'

    function concat(callback: (data: Buffer) => void): Writable
    export = concat
}
