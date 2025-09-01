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

const blob = Array(1000 * 20 + 1).join('A')

test('fnmeta', async function (t) {
    t.plan(3)
    const w = forkdb.createWriteStream({ key: 'test' }, function (_err, key) {
        t.ifError(_err)
        forkdb.get(key).then(res => {
            t.deepEqual(res, { key: 'test' })
        }).catch(err => t.fail(err))
    })
    w.end(blob)
})

test('notmeta', async function (t) {
    t.plan(3)
    const w = forkdb.createWriteStream({ key: 'test' }, function (_err, key) {
        t.ifError(_err)
        forkdb.get(key).then(res => {
            t.deepEqual(res, { key: 'test' })
        }).catch(err => t.fail(err))
    })
    w.end(blob)
})
