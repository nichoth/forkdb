import through2 from 'through2'

export default function dropFirst<T = any> (cb?: (err: Error | null, meta?: T) => void) {
    let line = false
    const bufs: Buffer[] | null = cb ? [] : null
    return through2(function (this: any, buf: Buffer, _enc: BufferEncoding, next: () => void) {
        if (line) {
            this.push(buf)
            return next()
        }
        for (let i = 0; i < buf.length; i++) {
            if (buf[i] === 10) {
                line = true
                if (bufs) bufs.push(buf.slice(0, i))
                if (cb && bufs) {
                    const b = Buffer.concat(bufs).toString('utf8')
                    let meta: T
                    try { meta = JSON.parse(b) } catch (err) { return cb(err as Error) }
                    cb(null, meta)
                }
                this.push(buf.slice(i + 1))
                return next()
            }
        }
        if (bufs) bufs.push(buf)
    })
}
