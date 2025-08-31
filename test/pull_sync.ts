import { test } from '@substrate-system/tapzero'
import path from 'node:path'
import level from 'level'
import { mkdirSync } from 'node:fs'


import ForkDB from '../src/index.js'

interface ExpectedData {
    heads: Array<{ hash: string }>
    tails: Array<{ hash: string }>
    list: Array<{ hash: string; meta: any }>
    links: Record<string, Array<{ key: string; hash: string }>>
}
import { tmpdir } from 'node:os'

const testDir = path.join(
    tmpdir(),
    'forkdb-test-' + Math.random()
)
mkdirSync(testDir, { recursive: true })

const db1 = level(path.join(testDir, 'db1'))
const db2 = level(path.join(testDir, 'db2'))
const forkdb1 = new ForkDB(db1, { dir: path.join(testDir, 'blob1') })
const forkdb2 = new ForkDB(db2, { dir: path.join(testDir, 'blob2') })

const hashes = [
    '9c0564511643d3bc841d769e27b1f4e669a75695f2a2f6206bca967f298390a0',
    'fcbcbe4389433dd9652d279bb9044b8e570d7f033fab18189991354228a43e99',
    'c3122c908bf03bb8b36eaf3b46e27437e23827e6a341439974d5d38fb22fbdfc',
    'e3bd9d14b8c298e57dbbb10235306bd46d12ebaeccd067dc9cdf7ed25b10a96d'
]

test('populate pull sync', async function (t) {
    const docs = { a: [], b: [] }
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
            t.equal(doc!.hash, hash)
            next()
        })
        w.end(doc!.body)
    })();

    (function next () {
        if (docs.b.length === 0) return
        const doc = docs.b.shift()
        const w = forkdb2.createWriteStream(doc.meta, function (_err, hash) {
            t.ifError(_err)
            t.equal(doc!.hash, hash)
            next()
        })
        w.end(doc!.body)
    })()
})

test('pull sync', async function (t) {
    t.plan(2)
    const ra = forkdb1.replicate({ mode: 'pull' }, function (_err: any, hs) {
        t.ifError(_err)
    })
    const rb = forkdb2.replicate({ mode: 'sync' }, function (_err: any, hs) {
        t.ifError(_err)
    })
    ra.pipe(rb).pipe(ra)
})

test('pull sync verify', async function (t) {
    t.plan(8)

    forkdb1.heads('blorp', function (_err: any, hs) {
        t.ifError(_err)
        t.deepEqual(hs, [{ hash: hashes[3]! }])
    })

    forkdb1.list(function (_err: any, hs) {
        t.ifError(_err)
        t.deepEqual(
            mhashes(hs).sort(),
            [hashes[0]!, hashes[1]!, hashes[2]!, hashes[3]!].sort(),
            'list a'
        )
    })

    forkdb2.heads('blorp', function (_err: any, hs) {
        t.ifError(_err)
        t.deepEqual(hs, [{ hash: hashes[3]! }])
    })

    forkdb2.list(function (_err: any, hs) {
        t.ifError(_err)
        t.deepEqual(
            mhashes(hs).sort(),
            [hashes[1]!, hashes[2]!, hashes[3]!].sort(),
            'list b'
        )
    })
})

function mhashes (xs) { return xs.map(function (x) { return x.hash }) }
