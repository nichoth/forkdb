import { test } from '@substrate-system/tapzero'
import path from 'node:path'
import level from './lib/level.js'
import { mkdirSync } from 'node:fs'

import ForkDB from '../src/index.js'
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
    'e3bd9d14b8c298e57dbbb10235306bd46d12ebaeccd067dc9cdf7ed25b10a96d',
    '8253778acc5e38ba867136b1cb6159087e979c54ac02dbe5e13c1d7180a4a106'
]

test('populate push sync', async function (t) {
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

test('since', async function (t) {
    t.plan(2)
    const ra = forkdb1.replicate({ mode: 'sync' })
    const rb = forkdb2.replicate({ mode: 'sync' })
    ra.pipe(rb).pipe(ra)
})

test('since verify', async function (t) {
    t.plan(4)

    forkdb1.heads('blorp', function (_err: any, hs) {
        t.ifError(_err)
        t.deepEqual(hs, [{ hash: hashes[3]! }])
    })

    forkdb2.heads('blorp', function (_err: any, hs) {
        t.ifError(_err)
        t.deepEqual(hs, [{ hash: hashes[3]! }])
    })
})

test('since add another', async function (t) {
    t.plan(1)
    const doc = {
        key: 'blorp',
        prev: [hashes[3]!],
    }
    const w = forkdb1.createWriteStream(doc, function (_err: any) {
        t.ifError(_err)
    })
    w.end('woo')
})

test('since replicate sequence', async function (t) {
    t.plan(7)
    const ra = forkdb1.replicate({ mode: 'sync' })
    ra.on('available', function (hs) {
        t.deepEqual(hs, [hashes[0]!])
    })
    ra.on('since', function (seq) {
        t.equal(seq, 3, 'since A')
    })
    ra.on('response', t.fail.bind(t))
    const rb = forkdb2.replicate({ mode: 'sync' })
    rb.on('available', function (hs) {
        t.deepEqual(hs, [hashes[3]!, hashes[4]!], 'available B')
    })
    rb.on('since', function (seq) {
        t.equal(seq, 3, 'since B')
    })
    rb.on('response', function (hash) {
        t.deepEqual(hash, hashes[4]!)
    })
    ra.pipe(rb).pipe(ra)
})

test('since verify after', async function (t) {
    t.plan(4)

    forkdb1.heads('blorp', function (_err: any, hs) {
        t.ifError(_err)
        t.deepEqual(hs, [{ hash: hashes[4]! }])
    })

    forkdb2.heads('blorp', function (_err: any, hs) {
        t.ifError(_err)
        t.deepEqual(hs, [{ hash: hashes[4]! }])
    })
})
