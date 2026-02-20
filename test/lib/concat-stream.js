import { Writable } from 'node:stream'

export default function concatStream (callback) {
    const chunks = []

    return new Writable({
        write (chunk, _encoding, next) {
            chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk))
            next()
        },
        final (next) {
            callback(Buffer.concat(chunks))
            next()
        }
    })
}
