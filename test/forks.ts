import { test } from '@substrate-system/tapzero'
import path from 'node:path'
import level from './lib/level.js'
import { mkdirSync } from 'node:fs'
import concat from './lib/concat-stream.js'
import { tmpdir } from 'node:os'
import ForkDB from '../src/index.ts'

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
const fdb = await ForkDB.create(db, { dir: path.join(testDir, 'blob') })

test('first doc', async function (t) {
    t.plan(6)

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

test('second doc', async function (t) {
    t.plan(8)

    const w = fdb.createWriteStream({
        key: 'blorp',
        prev: [globalThis.firstHash]
    }, onfinish)

    async function onfinish (_err: any, key: any) {
        t.ifError(_err)
        t.ok(key, 'should get a valid hash')

        const expected: ExpectedData = {
            heads: [{ hash: key }],
            tails: [{ hash: globalThis.firstHash }],
            list: [
                { hash: globalThis.firstHash, meta: { key: 'blorp' } },
                {
                    hash: key,
                    meta: {
                        key: 'blorp',
                        prev: [globalThis.firstHash]
                    }
                }
            ],
            links: {
                [globalThis.firstHash]: [{ key: 'blorp', hash: key }]
            }
        }

        await check(t, fdb, expected)
        fdb.createReadStream(globalThis.firstHash).pipe(concat(function (body) {
            t.equal(body.toString('utf8'), 'beep boop\n')
        }))
        fdb.createReadStream(key).pipe(concat(function (body) {
            t.equal(body.toString('utf8'), 'BEEP BOOP\n')
        }))
    }
    w.end('BEEP BOOP\n')
})

test('third doc (conflict)', async function (t) {
    t.plan(9)

    const expected: ExpectedData = {
        heads: [],
        tails: [],
        list: [],
        links: {}
    }

    const w = fdb.createWriteStream({
        key: 'blorp',
        prev: [globalThis.firstHash]
    }, onfinish)
    
    async function onfinish (_err: any, key: any) {
        t.ifError(_err)
        t.ok(key, 'should get a valid hash')
        
        await check(t, fdb, expected)
        fdb.createReadStream(globalThis.firstHash).pipe(concat(function (body) {
            t.equal(body.toString('utf8'), 'beep boop\n')
        }))
        fdb.createReadStream(key).pipe(concat(function (body) {
            t.equal(body.toString('utf8'), 'BEEP BOOP\n')
        }))
    }
    w.end('BEEP BOOP\n')
})

test('fourth doc (resolve conflict)', async function (t) {
    t.plan(11)

    const w = fdb.createWriteStream({
        key: 'blorp',
        prev: [globalThis.secondHash, globalThis.thirdHash]
    }, onfinish)
    
    async function onfinish (_err: any, key: any) {
        t.ifError(_err)
        t.ok(key, 'should get a valid hash')
        
        const expected: ExpectedData = {
            heads: [{ hash: key }],
            tails: [],
            list: [
                { hash: globalThis.firstHash, meta: { key: 'blorp' } },
                {
                    hash: globalThis.secondHash,
                    meta: {
                        key: 'blorp',
                        prev: [globalThis.firstHash]
                    }
                },
                {
                    hash: globalThis.thirdHash,
                    meta: {
                        key: 'blorp',
                        prev: [globalThis.firstHash]
                    }
                },
                {
                    hash: key,
                    meta: {
                        key: 'blorp',
                        prev: [globalThis.secondHash, globalThis.thirdHash]
                    }
                }
            ],
            links: {
                [globalThis.firstHash]: [
                    { key: 'blorp', hash: globalThis.secondHash },
                    { key: 'blorp', hash: globalThis.thirdHash }
                ],
                [globalThis.secondHash]: [{ key: 'blorp', hash: key }],
                [globalThis.thirdHash]: [{ key: 'blorp', hash: key }]
            }
        }
        
        await check(t, fdb, expected)
        fdb.createReadStream(globalThis.firstHash).pipe(concat(function (body) {
            t.equal(body.toString('utf8'), 'beep boop\n')
        }))
        fdb.createReadStream(globalThis.secondHash).pipe(concat(function (body) {
            t.equal(body.toString('utf8'), 'BEEP BOOP\n')
        }))
        fdb.createReadStream(globalThis.thirdHash).pipe(concat(function (body) {
            t.equal(body.toString('utf8'), 'BEEP BOOP\n')
        }))
        fdb.createReadStream(key).pipe(concat(function (body) {
            t.equal(body.toString('utf8'), 'BEEPITY BOOPITY\n')
        }))
    }
    w.end('BEEPITY BOOPITY\n')
})

async function check (t: any, fdb: any, expected: ExpectedData) {
    const heads = await fdb.heads('blorp')
    t.deepEqual(heads, expected.heads, 'heads')
    
    const tails = await fdb.tails('blorp')
    t.deepEqual(tails, expected.tails, 'tails')
    
    const list = await fdb.list('blorp')
    t.deepEqual(list, expected.list, 'list')
    
    const links = await fdb.links('blorp')
    t.deepEqual(links, expected.links, 'links')
}

// Store hashes globally for use across tests
globalThis.firstHash = await new Promise<string>((resolve, reject) => {
    const w = fdb.createWriteStream({ key: 'blorp' })
    w.on('complete', resolve)
    w.on('error', reject)
    w.end('beep boop\n')
})

globalThis.secondHash = await new Promise<string>((resolve, reject) => {
    const w = fdb.createWriteStream({
        key: 'blorp',
        prev: [globalThis.firstHash]
    })
    w.on('complete', resolve)
    w.on('error', reject)
    w.end('BEEP BOOP\n')
})

globalThis.thirdHash = await new Promise<string>((resolve, reject) => {
    const w = fdb.createWriteStream({
        key: 'blorp',
        prev: [globalThis.firstHash]
    })
    w.on('complete', resolve)
    w.on('error', reject)
    w.end('BEEP BOOP\n')
})
