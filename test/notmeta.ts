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

const blob = Array(1000 * 20 + 1).join('A')

test('fnmeta', async function (t: any) {
    t.plan(3)
    const w = forkdb.createWriteStream(function (_err: any, key: any) {
        t.ifError(err)
        forkdb.get(key, function (_err: any, res) {
            t.ifError(err)
            t.deepEqual(res, {})
        })
    })
    w.end(blob)
})

test('notmeta', async function (t: any) {
    t.plan(3)
    const w = forkdb.createWriteStream(null, function (_err: any, key: any) {
        t.ifError(err)
        forkdb.get(key, function (_err: any, res) {
            t.ifError(err)
            t.deepEqual(res, {})
        })
    })
    w.end(blob)
})
