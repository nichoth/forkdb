import { test } from '@substrate-system/tapzero'
import path from 'node:path'
import level from './lib/level.js'
import { mkdirSync } from 'node:fs'

import { tmpdir } from 'node:os'
import ForkDB from '../src/index.ts'

const testDir = path.join(
    tmpdir(),
    'forkdb-test-' + Math.random()
)
mkdirSync(testDir, { recursive: true })

const db = level(path.join(testDir, 'db'))
const forkdb = await ForkDB.create(db, { dir: path.join(testDir, 'blob') })

const blob = Array(1000 * 20 + 1).join('A')

test('meta', async function (t) {
    t.plan(3)
    const w = forkdb.createWriteStream({ key: 'meta', x: 555 }, function (_err, key) {
        t.ifError(_err)
        forkdb.get(key).then(res => {
            t.deepEqual(res, { key: 'meta', x: 555 })
        }).catch(err => t.fail(err))
    })
    w.end(blob)
})
