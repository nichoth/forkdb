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
const forkdb1 = new ForkDB(db1, {})
const forkdb2 = new ForkDB(db2, {})

const hashes = [
    'a3533048', // beep boop\n
    '352e45fc', // BEEP BOOP\n
    '5a921dfc', // BeEp BoOp\n
    'c5d41a61', // BEEPITY BOOPITY\n
    '8253778a'  // woo\n
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
    ra.on('available', (_hs: any) => {
        t.ok(true, 'sync mode a completed')
    })
    const rb = forkdb2.replicate({ mode: 'sync' })
    rb.on('available', (_hs: any) => {
        t.ok(true, 'sync mode b completed')
    })
    ra.pipe(rb).pipe(ra)
})

test('since verify', async function (t) {
    t.plan(4)

    forkdb1.heads('blorp', (err: any, hs: any) => {
        t.ifError(err)
        t.deepEqual(hs, [{ hash: hashes[3]! }])
    })

    forkdb2.heads('blorp', (err: any, hs: any) => {
        t.ifError(err)
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
    ra.on('available', (hs: any) => {
        t.deepEqual(hs, [hashes[0]!])
        t.ok(true, 'available A event')
    })
    ra.on('since', (seq: any) => {
        t.equal(seq, 3, 'since A')
    })
    ra.on('response', () => t.fail('should not get response A'))
    const rb = forkdb2.replicate({ mode: 'sync' })

    rb.on('available', (hs: any) => {
        t.deepEqual(hs, [hashes[3]!, hashes[4]!], 'available B')
        t.ok(true, 'available B event')
    })
    rb.on('since', (seq: any) => {
        t.equal(seq, 3, 'since B')
    })
    rb.on('response', (hash: any) => {
        t.deepEqual(hash, hashes[4]!)
    })

    ra.pipe(rb).pipe(ra)
})

test('since verify after', async function (t) {
    t.plan(4)

    forkdb1.heads('blorp', (err: any, hs: any) => {
        t.ifError(err)
        t.deepEqual(hs, [{ hash: hashes[4]! }])
    })

    forkdb2.heads('blorp', (err: any, hs: any) => {
        t.ifError(err)
        t.deepEqual(hs, [{ hash: hashes[4]! }])
    })
})
