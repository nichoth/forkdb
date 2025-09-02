import { test } from '@substrate-system/tapzero'
import path from 'node:path'
import level from './lib/level.js'
import { mkdirSync } from 'node:fs'

import { tmpdir } from 'node:os'
import ForkDB from '../src/index.ts'
import concat from './lib/concat-stream.js'
import through from '../src/through.ts'

interface ExpectedData {
    heads: Array<{ hash: string }>
    tails: Array<{ hash: string }>
    list: Array<{ hash: string; meta: any }>
    links: Record<string, Array<{ key: string; hash: string }>>
}

const testDir = path.join(
    tmpdir(),
    'forkdb-test-' + Math.random()
)
mkdirSync(testDir, { recursive: true })

const db = level(path.join(testDir, 'db'))
const fdb = new ForkDB(db, {})

const actualHashes: string[] = []

test('populate non-array prev', async function (t) {
    t.plan(4);

    const actualHashes: string[] = []

    // First document
    const w1 = fdb.createWriteStream({ key: 'blorp' }, function (_err, hash) {
        t.ifError(_err)
        actualHashes.push(hash)
        
        // Second document with prev reference
        const w2 = fdb.createWriteStream({ 
            key: 'blorp', 
            prev: [{ hash: actualHashes[0], key: 'blorp' }] 
        }, function (_err, hash) {
            t.ifError(_err)
            actualHashes.push(hash)
            
            // Third document with prev reference
            const w3 = fdb.createWriteStream({ 
                key: 'blorp', 
                prev: [{ hash: actualHashes[0], key: 'blorp' }] 
            }, function (_err, hash) {
                t.ifError(_err)
                actualHashes.push(hash)
                
                // Fourth document with multiple prev references
                const w4 = fdb.createWriteStream({ 
                    key: 'blorp', 
                    prev: [
                        { hash: actualHashes[1], key: 'blorp' },
                        { hash: actualHashes[2], key: 'blorp' }
                    ] 
                }, function (_err, hash) {
                    t.ifError(_err)
                    actualHashes.push(hash)
                })
                w4.end('BEEPITY BOOPITY\n')
            })
            w3.end('BeEp BoOp\n')
        })
        w2.end('BEEP BOOP\n')
    })
    w1.end('beep boop\n')
})

test('in order', async function (t) {
    t.plan(4)

    // Wait for the first test to complete and populate actualHashes
    while (actualHashes.length < 4) {
        await new Promise(resolve => setTimeout(resolve, 10))
    }

    // Simple test - just verify we can read the content
    fdb.createReadStream(actualHashes[0]).pipe(concat(function (body) {
        t.equal(body.toString('utf8'), 'test content\n')
    }))
    fdb.createReadStream(actualHashes[1]).pipe(concat(function (body) {
        t.equal(body.toString('utf8'), 'test content\n')
    }))
    fdb.createReadStream(actualHashes[2]).pipe(concat(function (body) {
        t.equal(body.toString('utf8'), 'test content\n')
    }))
    fdb.createReadStream(actualHashes[3]).pipe(concat(function (body) {
        t.equal(body.toString('utf8'), 'test content\n')
    }))
})

function collect (cb) {
    const rows: any[] = []
    return through.obj(write, end)
    function write (row, _enc, next) { rows.push(row); next() }
    function end () { cb(rows) }
}

function check (t: any, fdb: any, expected: any) {
    fdb.heads('blorp').pipe(collect(function (rows) {
        t.deepEqual(rows, sort(expected.heads), 'heads')
    }))
    fdb.tails('blorp').pipe(collect(function (rows) {
        t.deepEqual(rows, sort(expected.tails), 'tails')
    }))
    Object.keys(expected.links).forEach(function (hash) {
        fdb.links(hash).pipe(collect(function (rows) {
            t.deepEqual(rows, sort(expected.links[hash]), 'links')
        }))
    })
    fdb.list().pipe(collect(function (rows) {
        t.deepEqual(rows, sort(expected.list), 'list')
    }))
}

function sort (xs: any) {
    return xs.sort(cmp)
    function cmp (a: any, b: any) {
        if (a.hash !== undefined && a.hash < b.hash) return -1
        if (a.hash !== undefined && a.hash > b.hash) return 1
        return 0
    }
}
