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


const fdb = await ForkDB.create(db, { dir: path.join(testDir, 'blob') })

test('populate concestor', async function (t) {
    t.plan(5 * 2)

    const actualHashes: string[] = []

    // Create first document (no prev)
    const w1 = fdb.createWriteStream({ key: 'blorp' })
    const hash1 = await new Promise<string>((resolve, reject) => {
        w1.on('complete', resolve)
        w1.on('error', reject)
        w1.end('beep boop\n')
    })
    actualHashes.push(hash1)
    t.ifError(null)
    t.ok(hash1, 'should get a valid hash')

    // Create second document (references first)
    const w2 = fdb.createWriteStream({
        key: 'blorp',
        prev: [{ hash: hash1, key: 'blorp' }]
    })
    const hash2 = await new Promise<string>((resolve, reject) => {
        w2.on('complete', resolve)
        w2.on('error', reject)
        w2.end('BEEP BOOP\n')
    })
    actualHashes.push(hash2)
    t.ifError(null)
    t.ok(hash2, 'should get a valid hash')

    // Create third document (references first)
    const w3 = fdb.createWriteStream({
        key: 'blorp',
        prev: [{ hash: hash1, key: 'blorp' }]
    })
    const hash3 = await new Promise<string>((resolve, reject) => {
        w3.on('complete', resolve)
        w3.on('error', reject)
        w3.end('BeEp BoOp\n')
    })
    actualHashes.push(hash3)
    t.ifError(null)
    t.ok(hash3, 'should get a valid hash')

    // Create fourth document (references second and third)
    const w4 = fdb.createWriteStream({
        key: 'blorp',
        prev: [
            { hash: hash2, key: 'blorp' },
            { hash: hash3, key: 'blorp' }
        ]
    })
    const hash4 = await new Promise<string>((resolve, reject) => {
        w4.on('complete', resolve)
        w4.on('error', reject)
        w4.end('BEEPITY BOOPITY\n')
    })
    actualHashes.push(hash4)
    t.ifError(null)
    t.ok(hash4, 'should get a valid hash')

    // Create fifth document (no prev)
    const w5 = fdb.createWriteStream({ key: 'blorp' })
    const hash5 = await new Promise<string>((resolve, reject) => {
        w5.on('complete', resolve)
        w5.on('error', reject)
        w5.end('whatever\n')
    })
    actualHashes.push(hash5)
    t.ifError(null)
    t.ok(hash5, 'should get a valid hash')

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
