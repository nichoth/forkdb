const test = require('tape')
const path = require('path')
const level = require('level')
const mkdirp = require('mkdirp')
const concat = require('concat-stream')

const tmpdir = path.join(
    require('osenv').tmpdir(),
    'forkdb-test-' + Math.random()
)
mkdirp.sync(tmpdir)

const db = level(path.join(tmpdir, 'db'))
const forkdb = require('../')
const fdb = forkdb(db, { dir: path.join(tmpdir, 'blob') })

const blob = Array(1000 * 20 + 1).join('A')

test('meta', function (t) {
    t.plan(3)
    const w = fdb.createWriteStream({ x: 555 }, function (err, key) {
        t.ifError(err)
        fdb.get(key, function (err, res) {
            t.ifError(err)
            t.deepEqual(res, { x: 555 })
        })
    })
    w.end(blob)
})
