// ES module wrapper for concat-stream CommonJS module
import concatStreamModule from 'concat-stream'

// concat-stream is a function that creates a stream
export default function concatStream (callback) {
    return concatStreamModule(callback)
}
