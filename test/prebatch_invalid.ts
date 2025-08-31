import { test } from '@substrate-system/tapzero'
import path from 'node:path'
import level from 'level'
import { mkdirSync } from 'node:fs'


import { tmpdir } from 'node:os'
import ForkDB from '../src/index.js'

const testDir = path.join(
    tmpdir(),
    'forkdb-test-' + Math.random()
)
mkdirSync(testDir, { recursive: true })

const db = level(path.join(testDir, 'db'))
const forkdb = new ForkDB(db, { dir: path.join(testDir, 'blob') })

test('prebatch invalid', async function (t: any) {
    const fdb = forkdb
    const opts = {
        prebatch: function (rows, key: any, cb) { cb(null, 'yo') }
    }

    t.plan(1)
    const w = fdb.createWriteStream({ key: 'test' }, opts, function (_err: any, hash: any) {
        t.ok(err)
    })
    w.end('ABC')
})
