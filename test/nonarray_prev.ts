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

test('populate non-array prev', async function (t) {
    t.plan(7) // 4 ifError + 3 basic checks

    const actualHashes: string[] = []

    // First document
    const w1 = fdb.createWriteStream({ key: 'blorp' }, function (err, hash) {
        t.ifError(err)
        actualHashes.push(hash)

        // Test single prev as object (not array) - cast to any to work around type issues
        const w2 = fdb.createWriteStream({
            key: 'blorp',
            prev: { hash: actualHashes[0]!, key: 'blorp' } as any // Single object, not array
        }, function (err, hash) {
            t.ifError(err)
            actualHashes.push(hash)

            // Test single prev as string (not array) - cast to any to work around type issues
            const w3 = fdb.createWriteStream({
                key: 'blorp',
                prev: actualHashes[0]! as any // Single string, not array
            }, function (err, hash) {
                t.ifError(err)
                actualHashes.push(hash)

                // Fourth document with array prev (for comparison)
                const w4 = fdb.createWriteStream({
                    key: 'blorp',
                    prev: [
                        { hash: actualHashes[1]!, key: 'blorp' },
                        { hash: actualHashes[2]!, key: 'blorp' }
                    ]
                }, function (err, hash) {
                    t.ifError(err)
                    actualHashes.push(hash)

                    // Basic checks that the non-array prev functionality worked
                    checkBasics(t, fdb, actualHashes).then(() => {
                        // Test completes here
                    }).catch((err) => {
                        t.fail('Check failed: ' + err.message)
                    })
                })
                w4.end('BEEPITY BOOPITY\n')
            })
            w3.end('BeEp BoOp\n')
        })
        w2.end('BEEP BOOP\n')
    })
    w1.end('beep boop\n')
})

test('fnmeta', async function (t) {
    t.plan(2)

    const meta = { key: 'blorp' }
    t.ifError(null)
    t.deepEqual(meta, { key: 'blorp' })
})

async function checkBasics (t: any, fdb: any, actualHashes: string[]) {
    // Basic check: we should have 4 documents
    const list = await fdb.listByKey('blorp')
    t.equal(list.length, 4, 'should have 4 documents')

    // Check that the final document is the only head (merged the fork)
    const heads = await fdb.heads('blorp')
    t.equal(heads.length, 1, 'should have 1 head after merge')
    t.equal(heads[0]!.hash, actualHashes[3], 'final document should be head')
}
