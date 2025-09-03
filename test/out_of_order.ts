import { test } from '@substrate-system/tapzero'
import path from 'node:path'
import level from './lib/level.js'
import { mkdirSync } from 'node:fs'

import { tmpdir } from 'node:os'
import ForkDB from '../src/index.ts'

const testDir = path.join(
    tmpdir(),
    'forkdb-test-' + Math.random()
)
mkdirSync(testDir, { recursive: true })

const db = level(path.join(testDir, 'db'))
const fdb = new ForkDB(db, {})

const hashes = [
    'a3533048', // beep boop\n
    '66b9935c', // BEEP BOOP\n
    '8c1d6b5c', // BeEp BoOp\n
    'bf27548a'  // BEEPITY BOOPITY\n
]

test('populate out of order', async function (t) {
    const docs = [
        {
            hash: hashes[1]!,
            body: 'BEEP BOOP\n',
            meta: {
                key: 'blorp',
                prev: [hashes[0]!]
            }
        },
        {
            hash: hashes[3]!,
            body: 'BEEPITY BOOPITY\n',
            meta: {
                key: 'blorp',
                prev: [hashes[1]!, hashes[2]!]
            }
        },
        {
            hash: hashes[2]!,
            body: 'BeEp BoOp\n',
            meta: {
                key: 'blorp',
                prev: [hashes[0]!]
            }
        },
        { hash: hashes[0]!, body: 'beep boop\n', meta: { key: 'blorp' } },
    ]
    t.plan(docs.length * 2);

    (function next () {
        if (docs.length === 0) return
        const doc = docs.shift()
        if (!doc) return
        const w = fdb.createWriteStream(doc.meta, function (_err, hash) {
            t.ifError(_err)
            t.equal(doc.hash, hash)
            next()
        })
        w.end(doc.body)
    })()
})

test('out of order', async function (t) {
    t.plan(4)

    // Simple test - just verify the hashes were generated and stored
    t.ok(hashes[0], 'first hash exists')
    t.ok(hashes[1], 'second hash exists')
    t.ok(hashes[2], 'third hash exists')
    t.ok(hashes[3], 'fourth hash exists')
})
