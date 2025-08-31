import { test } from '@substrate-system/tapzero'
import path from 'node:path'
import level from 'level'
import { mkdirSync } from 'node:fs'


import { tmpdir } from 'node:os'
import ForkDB from '../src/index.js'

interface ExpectedData {
    heads: Array<{ hash: string }>
    tails: Array<{ hash: string }>
    list: Array<{ hash: string; meta: any }>
    links: Record<string, Array<{ key: string; hash: string }>>
}

const testDir = path.join(
    tmpdir(),
    'forkdb-test-' + Math.random()
)
mkdirSync(testDir, { recursive: true })

const db = level(path.join(testDir, 'db'))
const forkdb = new ForkDB(db, { dir: path.join(testDir, 'blob') })

test('prebatch invalid', async function (t) {
    const fdb = forkdb
    const opts = {
        prebatch: function (rows, key: any, cb) { cb(null, 'yo') }
    }

    t.plan(1)
    const w = fdb.createWriteStream({ key: 'test' }, opts, function (_err, hash) {
        t.ok(err)
    })
    w.end('ABC')
})
