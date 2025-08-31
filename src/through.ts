import type { TransformOptions } from 'stream'
import { Transform } from 'stream'

// Type definitions for through2 compatibility
export interface Through2Options extends TransformOptions {
    objectMode?: boolean
    allowHalfOpen?: boolean
}

export type TransformFunction = (chunk: any, encoding: BufferEncoding, callback: (error?: Error | null, data?: any) => void) => void
export type FlushFunction = (callback: (error?: Error | null) => void) => void

// Main through2 function
export function through2 (
    options?: Through2Options | TransformFunction,
    transformFunction?: TransformFunction,
    flushFunction?: FlushFunction
): Transform {
    // Handle different argument patterns
    if (typeof options === 'function') {
        flushFunction = transformFunction as FlushFunction
        transformFunction = options
        options = {}
    }

    // Default to object mode if not specified
    const opts: Through2Options = { objectMode: true, ...options }

    return new Transform({
        ...opts,
        transform (chunk: any, encoding: BufferEncoding, callback: (error?: Error | null, data?: any) => void) {
            if (transformFunction) {
                transformFunction.call(this, chunk, encoding, callback)
            } else {
                // Pass-through if no transform function provided
                callback(null, chunk)
            }
        },
        flush (callback: (error?: Error | null) => void) {
            if (flushFunction) {
                flushFunction.call(this, callback)
            } else {
                callback()
            }
        }
    })
}

// Object mode convenience function
through2.obj = function (
    transformFunction?: TransformFunction,
    flushFunction?: FlushFunction
): Transform {
    return through2({ objectMode: true }, transformFunction, flushFunction)
}

// Constructor function
const ctor = function (
    options?: Through2Options | TransformFunction,
    transformFunction?: TransformFunction,
    flushFunction?: FlushFunction
): typeof Transform {
    // Handle different argument patterns
    if (typeof options === 'function') {
        flushFunction = transformFunction as FlushFunction
        transformFunction = options
        options = {}
    }

    // Default to object mode if not specified
    const opts: Through2Options = { objectMode: true, ...options }

    class Through2Transform extends Transform {
        constructor (transformOptions?: TransformOptions) {
            super({ ...opts, ...transformOptions })
        }

        _transform (chunk: any, encoding: BufferEncoding, callback: (error?: Error | null, data?: any) => void) {
            if (transformFunction) {
                transformFunction.call(this, chunk, encoding, callback)
            } else {
                // Pass-through if no transform function provided
                callback(null, chunk)
            }
        }

        _flush (callback: (error?: Error | null) => void) {
            if (flushFunction) {
                flushFunction.call(this, callback)
            } else {
                callback()
            }
        }
    }

    return Through2Transform as any
}

// Constructor function for object mode
ctor.obj = function (
    transformFunction?: TransformFunction,
    flushFunction?: FlushFunction
): typeof Transform {
    return ctor({ objectMode: true }, transformFunction, flushFunction)
}

through2.ctor = ctor

export default through2
