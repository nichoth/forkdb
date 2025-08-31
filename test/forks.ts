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

const hashes: string[] = [
    '9c0564511643d3bc841d769e27b1f4e669a75695f2a2f6206bca967f298390a0',
    'f5ff29843ef0658e2a1e14ed31198807ce8302936116545928756844be45fe41',
    '6c0c881fad7adb3fec52b75ab0de8670391ceb8847c8e4c3a2dce9a56244b328',
    '96b51029baa85e07be09a25ec568132f104eaa1f06db35c28e21767e9d5b9eb7'
]

test('first doc', async function (t: any) {
    t.plan(6)

    const expected: any = {}
    expected.heads = [{ hash: hashes[0]! }]
    expected.tails = [{ hash: hashes[0]! }]
    expected.list = [{ hash: hashes[0]!, meta: { key: 'blorp' } }]
    expected.links = {}

    const key = await new Promise<string>((resolve, reject) => {
        const w = fdb.createWriteStream({ key: 'blorp' })
        w.on('complete', (hash: string) => resolve(hash))
        w.on('error', (err: any) => reject(err))
        w.end('beep boop\n')
    })

    t.equal(key, hashes[0]!)
    await check(t, fdb, expected)
})

test('second doc', async function (t: any) {
    t.plan(8)

    const expected: any = {}
    expected.heads = [{ hash: hashes[1]! }]
    expected.tails = [{ hash: hashes[0]! }]
    expected.list = [
        { hash: hashes[0]!, meta: { key: 'blorp' } },
        {
            hash: hashes[1]!,
            meta: {
                key: 'blorp',
                prev: [hashes[0]!]
            }
        }
    ]
    expected.links = {}
    expected.links[hashes[0]!] = [{ key: 'blorp', hash: hashes[1]! }]

    const w = fdb.createWriteStream({
        key: 'blorp',
        prev: [hashes[0]!]
    }, onfinish)
    function onfinish (err: any, key: any) {
        t.ifError(err)
        t.equal(key, hashes[1]!)
        check(t, fdb, expected)
        fdb.createReadStream(hashes[0]!).pipe(concat(function (body: any) {
            t.equal(body.toString('utf8'), 'beep boop\n')
        }))
        fdb.createReadStream(hashes[1]!).pipe(concat(function (body: any) {
            t.equal(body.toString('utf8'), 'BEEP BOOP\n')
        }))
    }
    w.end('BEEP BOOP\n')
})

test('third doc (conflict)', async function (t: any) {
    t.plan(9)

    const expected: any = {}
    expected.heads = [
        { hash: hashes[2]! },
        { hash: hashes[1]! }
    ]
    expected.tails = [{ hash: hashes[0]! }]
    expected.list = [
        { hash: hashes[0]!, meta: { key: 'blorp' } },
        {
            hash: hashes[1]!,
            meta: {
                key: 'blorp',
                prev: [hashes[0]!]
            }
        },
        {
            hash: hashes[2]!,
            meta: {
                key: 'blorp',
                prev: [hashes[0]!]
            }
        }
    ]
    expected.links = {}
    expected.links[hashes[0]!] = [
        { key: 'blorp', hash: hashes[2]! },
        { key: 'blorp', hash: hashes[1]! }
    ]

    const w = fdb.createWriteStream({
        key: 'blorp',
        prev: [hashes[0]!]
    }, onfinish)
    function onfinish (err: any, key: any) {
        t.ifError(err)
        t.equal(key, hashes[2]!)
        check(t, fdb, expected)
        fdb.createReadStream(hashes[0]!).pipe(concat(function (body: any) {
            t.equal(body.toString('utf8'), 'beep boop\n')
        }))
        fdb.createReadStream(hashes[1]!).pipe(concat(function (body: any) {
            t.equal(body.toString('utf8'), 'BEEP BOOP\n')
        }))
        fdb.createReadStream(hashes[2]!).pipe(concat(function (body: any) {
            t.equal(body.toString('utf8'), 'BeEp BoOp\n')
        }))
    }
    w.end('BeEp BoOp\n')
})

test('fourth doc (merge)', async function (t: any) {
    t.plan(12)

    const expected: any = {}
    expected.heads = [{ hash: hashes[3]! }]
    expected.tails = [{ hash: hashes[0]! }]
    expected.list = [
        { hash: hashes[0]!, meta: { key: 'blorp' } },
        {
            hash: hashes[1]!,
            meta: {
                key: 'blorp',
                prev: [hashes[0]!]
            }
        },
        {
            hash: hashes[2]!,
            meta: {
                key: 'blorp',
                prev: [hashes[0]!]
            }
        },
        {
            hash: hashes[3]!,
            meta: {
                key: 'blorp',
                prev: [hashes[1]!, hashes[2]!]
            }
        }
    ]
    expected.links = {}
    expected.links[hashes[0]!] = [
        { key: 'blorp', hash: hashes[1]! },
        { key: 'blorp', hash: hashes[2]! }
    ]
    expected.links[hashes[1]!] = [
        { key: 'blorp', hash: hashes[3]! }
    ]
    expected.links[hashes[2]!] = [
        { key: 'blorp', hash: hashes[3]! }
    ]

    const key = await new Promise<string>((resolve, reject) => {
        const w = fdb.createWriteStream({
            key: 'blorp',
            prev: [hashes[1]!, hashes[2]!]
        })
        w.on('complete', (hash: string) => resolve(hash))
        w.on('error', (err: any) => reject(err))
        w.end('BEEPITY BOOPITY\n')
    })

    t.equal(key, hashes[3]!)
    await check(t, fdb, expected)
})

async function check (t: any, fdb: any, expected: any) {
    const heads = await fdb.heads('blorp')
    t.deepEqual(heads, sort(expected.heads), 'heads')

    const tails = await fdb.tails('blorp')
    t.deepEqual(tails, sort(expected.tails), 'tails')

    for (const hash of Object.keys(expected.links)) {
        const links = await fdb.links(hash)
        t.deepEqual(links, sort(expected.links[hash]), 'links')
    }

    const list = await fdb.list()
    t.deepEqual(list, sort(expected.list), 'list')
}

function sort (xs: any) {
    return xs.sort(cmp)
    function cmp (a: any, b: any) {
        if (a.hash !== undefined && a.hash < b.hash) return -1
        if (a.hash !== undefined && a.hash > b.hash) return 1
        return 0
    }
}
