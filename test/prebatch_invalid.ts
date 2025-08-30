const test = require('tape')
const path = require('path')
const level = require('level')
const mkdirp = require('mkdirp')
const through = require('through2')
const concat = require('concat-stream')

const tmpdir = path.join(
    require('osenv').tmpdir(),
    'forkdb-test-' + Math.random()
)
mkdirp.sync(tmpdir)

const db = level(path.join(tmpdir, 'db'))
const forkdb = require('../')

test('prebatch invalid', function (t) {
    const fdb = forkdb(db, {
        dir: path.join(tmpdir, 'blob')
    })
    const opts = {
        prebatch: function (rows, key, cb) { cb(null, 'yo') }
    }

    t.plan(1)
    const w = fdb.createWriteStream({}, opts, function (err, hash) {
        t.ok(err)
    })
    w.end('ABC')
})
