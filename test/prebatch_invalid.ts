import { test } from '@substrate-system/tapzero'
import path from 'node:path'
import level from './lib/level.js'
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

test('prebatch invalid', async function (t) {
    const fdb = forkdb
    const opts = {
        prebatch: function (_rows, _key: any, cb) { cb(null, 'yo') }
    }

    t.plan(1)
    const w = fdb.createWriteStream({ key: 'test', prebatch: opts.prebatch }, function (_err, _hash) {
        t.ok(_err)
    })
    w.end('ABC')
})
