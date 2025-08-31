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
const fdb = new ForkDB(db, { dir: path.join(testDir, 'blob') })

const blob = Array(1000 * 200 + 1).join('A')

test('blob', async function (t: any) {
    t.plan(2)
    const key = await new Promise<string>((resolve, reject) => {
        const w = fdb.createWriteStream({ key: 'blob' })
        w.on('complete', (hash: string) => resolve(hash))
        w.on('error', (err: any) => reject(err))
        w.end(blob)
    })

    const body = await new Promise((resolve) => {
        fdb.createReadStream(key).pipe(concat(function (body: any) {
            t.equal(body.toString('utf8'), blob)
            resolve(body)
        }))
    })
})
