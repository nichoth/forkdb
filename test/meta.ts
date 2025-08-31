import { test } from '@substrate-system/tapzero'
import path from 'node:path'
import level from 'level'
import { mkdirSync } from 'node:fs'
import concat from 'concat-stream'
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

test('meta', async function (t: any) {
    t.plan(3)
    const w = forkdb.createWriteStream({ x: 555 }, function (_err: any, key: any) {
        t.ifError(err)
        forkdb.get(key, function (_err: any, res) {
            t.ifError(err)
            t.deepEqual(res, { x: 555 })
        })
    })
    w.end(blob)
})
