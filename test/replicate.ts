import { test } from '@substrate-system/tapzero'
import path from 'node:path'
import level from './lib/level.js'
import { mkdirSync } from 'node:fs'

import ForkDB from '../src/index.ts'
import { tmpdir } from 'node:os'

const testDir = path.join(
    tmpdir(),
    'forkdb-test-' + Math.random()
)
mkdirSync(testDir, { recursive: true })

const db1 = level(path.join(testDir, 'db1'))
const db2 = level(path.join(testDir, 'db2'))
const forkdb1 = await ForkDB.create(db1, { dir: path.join(testDir, 'blob1') })
const forkdb2 = await ForkDB.create(db2, { dir: path.join(testDir, 'blob2') })

const hashes = [
    '9c0564511643d3bc841d769e27b1f4e669a75695f2a2f6206bca967f298390a0',
    'fcbcbe4389433dd9652d279bb9044b8e570d7f033fab18189991354228a43e99',
    'c3122c908bf03bb8b36eaf3b46e27437e23827e6a341439974d5d38fb22fbdfc',
    'e3bd9d14b8c298e57dbbb10235306bd46d12ebaeccd067dc9cdf7ed25b10a96d'
]

test('populate replicate', async function (t) {
    const docs: any = { a: [], b: [] }
    docs.a.push({
        hash: hashes[0]!,
        body: 'beep boop\n',
        meta: { key: 'blorp' }
    })
    docs.b.push({
        hash: hashes[1]!,
        body: 'BEEP BOOP\n',
        meta: {
            key: 'blorp',
            prev: [{ hash: hashes[0]!, key: 'blorp' }]
        }
    })
    docs.a.push({
        hash: hashes[2]!,
        body: 'BeEp BoOp\n',
        meta: {
            key: 'blorp',
            prev: [{ hash: hashes[0]!, key: 'blorp' }]
        }
    })
    docs.b.push({
        hash: hashes[2]!,
        body: 'BeEp BoOp\n',
        meta: {
            key: 'blorp',
            prev: [{ hash: hashes[0]!, key: 'blorp' }]
        }
    })
    docs.b.push({
        hash: hashes[3]!,
        body: 'BEEPITY BOOPITY\n',
        meta: {
            key: 'blorp',
            prev: [
                { hash: hashes[1]!, key: 'blorp' },
                { hash: hashes[2]!, key: 'blorp' }
            ]
        }
    })
    t.plan((docs.a.length + docs.b.length) * 2);

    (function next () {
        if (docs.a.length === 0) return
        const doc = docs.a.shift()
        const w = forkdb1.createWriteStream(doc.meta, function (_err, hash) {
            t.ifError(_err)
            t.equal(doc.hash, hash)
            next()
        })
        w.end(doc.body)
    })();

    (function next () {
        if (docs.b.length === 0) return
        const doc = docs.b.shift()
        const w = forkdb2.createWriteStream(doc.meta, function (_err, hash) {
            t.ifError(_err)
            t.equal(doc.hash, hash)
            next()
        })
        w.end(doc.body)
    })()
})

test('replicating', async function (t) {
    t.plan(4)
    const ra = forkdb1.replicate((err: any, hs: any) => {
        t.ifError(err)
        t.deepEqual(
            hs.sort(),
            [hashes[1]!, hashes[3]!].sort(),
            'hashes received by forkdb1'
        )
    })
    const rb = forkdb2.replicate((err: any, hs: any) => {
        t.ifError(err)
        t.deepEqual(
            hs.sort(),
            [hashes[0]!, hashes[2]!].sort(),
            'hashes received by forkdb2'
        )
    })
    ra.pipe(rb).pipe(ra)
})

test('replicate verify', async function (t) {
    t.plan(16)

    const expected = {
        heads: [{ hash: hashes[3]! }],
        tails: [{ hash: hashes[0]! }],
        list: [
            { hash: hashes[0]!, meta: { key: 'blorp' } },
            {
                hash: hashes[1]!,
                meta: {
                    key: 'blorp',
                    prev: [{ hash: hashes[0]!, key: 'blorp' }]
                }
            },
            {
                hash: hashes[2]!,
                meta: {
                    key: 'blorp',
                    prev: [{ hash: hashes[0]!, key: 'blorp' }]
                }
            },
            {
                hash: hashes[3]!,
                meta: {
                    key: 'blorp',
                    prev: [
                        { hash: hashes[1]!, key: 'blorp' },
                        { hash: hashes[2]!, key: 'blorp' }
                    ]
                }
            }
        ],
        links: {} as Record<string, Array<{ key: string; hash: string }>>
    }
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

    check(t, forkdb1, expected)
    check(t, forkdb2, expected)
})

function check (t:any, fdb:any, expected:any) {
    fdb.heads('blorp', (err: any, rows: any) => {
        t.ifError(err)
        t.deepEqual(rows.sort(sortByHash), expected.heads.sort(sortByHash), 'heads')
    })
    fdb.tails('blorp', (err: any, rows: any) => {
        t.ifError(err)
        t.deepEqual(rows.sort(sortByHash), expected.tails.sort(sortByHash), 'tails')
    })
    Object.keys(expected.links).forEach((hash: string) => {
        fdb.links(hash, (err: any, rows: any) => {
            t.ifError(err)
            t.deepEqual(rows.sort(sortByHash), expected.links[hash].sort(sortByHash), 'links for ' + hash)
        })
    })
    fdb.list('blorp', (err: any, rows: any) => {
        t.ifError(err)
        t.deepEqual(rows.sort(sortByHash), expected.list.sort(sortByHash), 'list')
    })
}

function sortByHash (a: any, b: any) {
    if (a.hash !== undefined && b.hash !== undefined) {
        if (a.hash < b.hash) return -1
        if (a.hash > b.hash) return 1
    }
    return 0
}
