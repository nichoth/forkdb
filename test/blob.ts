import { test } from '@substrate-system/tapzero'
import path from 'node:path'
import { Level } from 'level'
import mkdirp from 'mkdirp'
import concat from 'concat-stream'
import os from 'node:os'
import Forkdb from '../src/index.js'

const tmpdir = path.join(
    os.tmpdir(),
    'forkdb-test-' + Math.random()
)
mkdirp.sync(tmpdir)

const db = new Level(path.join(tmpdir, 'db'))
const fdb = new Forkdb(db, { dir: path.join(tmpdir, 'blob') })

const blob = Array(1000 * 200 + 1).join('A')

test('blob', function (t) {
    t.plan(2)
    const w = fdb.createWriteStream({}, function (err, key) {
        t.ifError(err)
        fdb.createReadStream(key).pipe(concat(function (body) {
            t.equal(body.toString('utf8'), blob)
        }))
    })
    w.end(blob)
})
