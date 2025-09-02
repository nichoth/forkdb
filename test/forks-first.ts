import { test } from '@substrate-system/tapzero'
import path from 'node:path'
import level from './lib/level.js'
import { mkdirSync } from 'node:fs'
import concat from './lib/concat-stream.js'
import { tmpdir } from 'node:os'
import ForkDB from '../src/index.ts'

test('first doc', async function (t) {
    t.plan(5)

    // Create fresh database for this test
    const testDir = path.join(
        tmpdir(),
        'forkdb-test-' + Math.random()
    )
    mkdirSync(testDir, { recursive: true })

    const db = level(path.join(testDir, 'db'))
    const fdb = await ForkDB.create(db, { dir: path.join(testDir, 'blob') })

    const key = await new Promise<string>((resolve, reject) => {
        const w = fdb.createWriteStream({ key: 'blorp' })
        w.on('complete', (hash) => resolve(hash))
        w.on('error', (err) => reject(err))
        w.end('beep boop\n')
    })

    const expected: ExpectedData = {
        heads: [{ hash: key }],
        tails: [{ hash: key }],
        list: [{ hash: key, meta: { key: 'blorp' } }],
        links: {}
    }

    t.ok(key, 'should get a valid hash')
    await check(t, fdb, expected)
})

async function check (t: any, fdb: any, expected: ExpectedData) {
    const heads = await fdb.heads('blorp')
    t.deepEqual(heads, expected.heads, 'heads')

    const tails = await fdb.tails('blorp')
    t.deepEqual(tails, expected.tails, 'tails')

    const list = await fdb.listByKey('blorp')
    t.deepEqual(list, expected.list, 'list')

    const links = await fdb.linksByKey('blorp')
    t.deepEqual(links, expected.links, 'links')
}

interface ExpectedData {
    heads: { hash: string }[]
    tails: { hash: string }[]
    list: { hash: string, meta: { key: string } }[]
    links: Record<string, { key: string, hash: string }[]>
}
