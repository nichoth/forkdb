import { Transform } from 'stream';
// Main through2 function
export function through2(options, transformFunction, flushFunction) {
    // Handle different argument patterns
    if (typeof options === 'function') {
        flushFunction = transformFunction;
        transformFunction = options;
        options = {};
    }
    // Default to object mode if not specified
    const opts = { objectMode: true, ...options };
    return new Transform({
        ...opts,
        transform(chunk, encoding, callback) {
            if (transformFunction) {
                transformFunction.call(this, chunk, encoding, callback);
            }
            else {
                // Pass-through if no transform function provided
                callback(null, chunk);
            }
        },
        flush(callback) {
            if (flushFunction) {
                flushFunction.call(this, callback);
            }
            else {
                callback();
            }
        }
    });
}
// Object mode convenience function
through2.obj = function (transformFunction, flushFunction) {
    return through2({ objectMode: true }, transformFunction, flushFunction);
};
// Constructor function
const ctor = function (options, transformFunction, flushFunction) {
    // Handle different argument patterns
    if (typeof options === 'function') {
        flushFunction = transformFunction;
        transformFunction = options;
        options = {};
    }
    // Default to object mode if not specified
    const opts = { objectMode: true, ...options };
    class Through2Transform extends Transform {
        constructor(transformOptions) {
            super({ ...opts, ...transformOptions });
        }
        _transform(chunk, encoding, callback) {
            if (transformFunction) {
                transformFunction.call(this, chunk, encoding, callback);
            }
            else {
                // Pass-through if no transform function provided
                callback(null, chunk);
            }
        }
        _flush(callback) {
            if (flushFunction) {
                flushFunction.call(this, callback);
            }
            else {
                callback();
            }
        }
    }
    return Through2Transform;
};
// Constructor function for object mode
ctor.obj = function (transformFunction, flushFunction) {
    return ctor({ objectMode: true }, transformFunction, flushFunction);
};
through2.ctor = ctor;
export default through2;
//# sourceMappingURL=through.js.map