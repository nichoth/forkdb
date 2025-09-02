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

const hashes = [
    '9c0564511643d3bc841d769e27b1f4e669a75695f2a2f6206bca967f298390a0',
    'fcbcbe4389433dd9652d279bb9044b8e570d7f033fab18189991354228a43e99',
    'c3122c908bf03bb8b36eaf3b46e27437e23827e6a341439974d5d38fb22fbdfc',
    'e3bd9d14b8c298e57dbbb10235306bd46d12ebaeccd067dc9cdf7ed25b10a96d',
    '4f86f77339143562532a5896b53007bfe4bbe2fdf93478f2f289d0fce48dc814'
]
const fdb = await ForkDB.create(db, { dir: path.join(testDir, 'blob') })

test('populate concestor', async function (t) {
    const docs = [
        { hash: hashes[0]!, body: 'beep boop\n', meta: { key: 'blorp' } },
        {
            hash: hashes[1]!,
            body: 'BEEP BOOP\n',
            meta: {
                key: 'blorp',
                prev: [{ hash: hashes[0]!, key: 'blorp' }]
            }
        },
        {
            hash: hashes[2]!,
            body: 'BeEp BoOp\n',
            meta: {
                key: 'blorp',
                prev: [{ hash: hashes[0]!, key: 'blorp' }]
            }
        },
        {
            hash: hashes[3]!,
            body: 'BEEPITY BOOPITY\n',
            meta: {
                key: 'blorp',
                prev: [
                    { hash: hashes[1]!, key: 'blorp' },
                    { hash: hashes[2]!, key: 'blorp' }
                ]
            }
        },
        { hash: hashes[4]!, body: 'whatever\n', meta: { key: 'blorp' } }
    ]
    t.plan(docs.length * 2)

    const actualHashes: string[] = []

    for (const doc of docs) {
        const w = fdb.createWriteStream(doc.meta)

        const hash = await new Promise<string>((resolve, reject) => {
            w.on('complete', resolve)
            w.on('error', reject)
            w.end(doc.body)
        })

        actualHashes.push(hash)
        t.ifError(null) // No error occurred
        t.ok(hash, 'should get a valid hash')
    }

    // Store actual hashes for the concestor test
    ;(globalThis as any).actualHashes = actualHashes
})

test('concestor', async function (t) {
    t.plan(3)

    // Get the actual hashes that were generated in the previous test
    const actualHashes = (globalThis as any).actualHashes
    if (!actualHashes || actualHashes.length < 5) {
        t.fail('actualHashes not available')
        return
    }

    // Test concestor with actual generated hashes
    const cons0 = await fdb.concestor([actualHashes[3], actualHashes[2]])
    t.deepEqual(cons0, [actualHashes[2]], 'concestor 0')

    const cons1 = await fdb.concestor([actualHashes[3], actualHashes[1]])
    t.deepEqual(cons1, [actualHashes[1]], 'concestor 1')

    const cons2 = await fdb.concestor([actualHashes[4], actualHashes[2]])
    t.deepEqual(cons2, [], 'no concestor')
})
