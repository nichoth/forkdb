import through2 from 'through2'

export default function collect<T> (cb: (err: Error | null, rows: T[]) => void) {
    const rows: T[] = []
    return through2.obj(
        function write (row: T, _enc: BufferEncoding, next: () => void) {
            rows.push(row)
            next()
        },
        function end (this: any) {
            cb(null, rows)
        }
    )
}
