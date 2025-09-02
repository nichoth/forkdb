// ES module wrapper for level CommonJS module
import { Level } from 'level'
import bytewise from 'bytewise'

// level is a function that creates a database instance
// level@9.x has better promise support and modern API
export default function level (path, options = {}) {
    const db = new Level(path, {
        // Modern level options with proper encoding
        valueEncoding: 'json',
        keyEncoding: bytewise,
        ...options
    })

    // level@9.x supports promises natively, but we'll add explicit async methods
    // for compatibility with the existing code
    db.getAsync = db.get
    db.putAsync = db.put
    db.delAsync = db.del
    db.batchAsync = db.batch

    return db
}
