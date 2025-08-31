import { test } from '@substrate-system/tapzero'
import path from 'node:path'
import level from 'level'
import { mkdirSync } from 'node:fs'

import { tmpdir } from 'node:os'

import ForkDB from '../src/index.js'

const testDir = path.join(
    tmpdir(),
    'forkdb-test-' + Math.random()
)
mkdirSync(testDir, { recursive: true })

const db = level(path.join(testDir, 'db'))

const hashes: string[] = [
    '9c0564511643d3bc841d769e27b1f4e669a75695f2a2f6206bca967f298390a0',
    'fcbcbe4389433dd9652d279bb9044b8e570d7f033fab18189991354228a43e99',
    'c3122c908bf03bb8b36eaf3b46e27437e23827e6a341439974d5d38fb22fbdfc',
    'e3bd9d14b8c298e57dbbb10235306bd46d12ebaeccd067dc9cdf7ed25b10a96d',
    '4f86f77339143562532a5896b53007bfe4bbe2fdf93478f2f289d0fce48dc814'
]
const fdb = new ForkDB(db, { dir: path.join(testDir, 'blob') })

test('populate concestor', async function (t: any) {
    const docs = [
        {
            hash: hashes[1]!,
            body: 'BEEP BOOP\n',
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
        {
            hash: hashes[2]!,
            body: 'BeEp BoOp\n',
            meta: {
                key: 'blorp',
                prev: [{ hash: hashes[0]!, key: 'blorp' }]
            }
        },
        { hash: hashes[0]!, body: 'beep boop\n', meta: { key: 'blorp' } },
        { hash: hashes[4]!, body: 'whatever\n', meta: { key: 'blorp' } }
    ]
    t.plan(docs.length * 2);

    (function next () {
        if (docs.length === 0) return
        const doc = docs.shift()
        const w = fdb.createWriteStream(
            doc!.meta,
            function (_err: any, hash: any) {
                t.ifError(_err)
                t.equal(doc!.hash, hash)
                next()
            }
        )
        w.end(doc!.body)
    })()
})

test('concestor', async function (t: any) {
    t.plan(3)
    fdb.concestor([hashes[3]!, hashes[2]!], function (_err: any, cons: any) {
        t.deepEqual(cons, [hashes[2]!], 'concestor 0')
    })
    fdb.concestor([hashes[3]!, hashes[1]!], function (_err: any, cons: any) {
        t.deepEqual(cons, [hashes[1]!], 'concestor 1')
    })
    fdb.concestor([hashes[4]!, hashes[2]!], function (_err: any, cons: any) {
        t.deepEqual(cons, [], 'no concestor')
    })
})
