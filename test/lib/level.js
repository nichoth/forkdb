// ES module wrapper for level CommonJS module
import { Level } from 'level'

// level is a function that creates a database instance
export default function level (path, options) {
    return new Level(path, options)
}
