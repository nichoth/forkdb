import { test } from '@substrate-system/tapzero'
import path from 'node:path'
import level from './lib/level.js'
import { mkdirSync } from 'node:fs'

import { tmpdir } from 'node:os'
import ForkDB from '../src/index.js'
import through from '../src/through.js'



const testDir = path.join(
    tmpdir(),
    'forkdb-test-' + Math.random()
)
mkdirSync(testDir, { recursive: true })

const db = level(path.join(testDir, 'db'))
const forkdb = new ForkDB(db, { dir: path.join(testDir, 'blob') })

const hashes = [
    '9c0564511643d3bc841d769e27b1f4e669a75695f2a2f6206bca967f298390a0',
    'fcbcbe4389433dd9652d279bb9044b8e570d7f033fab18189991354228a43e99',
    'c3122c908bf03bb8b36eaf3b46e27437e23827e6a341439974d5d38fb22fbdfc',
    'e3bd9d14b8c298e57dbbb10235306bd46d12ebaeccd067dc9cdf7ed25b10a96d'
]

test('populate history', async function (t) {
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
    ]
    t.plan(docs.length * 2);

    (function next () {
        if (docs.length === 0) return
        const doc = docs.shift()
        if (!doc) return
        const w = forkdb.createWriteStream(doc.meta, function (_err, hash) {
            t.ifError(_err)
            t.equal(doc.hash, hash)
            next()
        })
        w.end(doc.body)
    })()
})

test('history', async function (t) {
    t.plan(6)
    forkdb.history(hashes[0]!).pipe(collect(function (rows) {
        t.deepEqual(mhashes(rows!), [hashes[0]!], 'history 0')
    }))
    forkdb.history(hashes[1]!).pipe(collect(function (rows) {
        t.deepEqual(mhashes(rows!), [hashes[1]!, hashes[0]!], 'history 1')
    }))
    forkdb.history(hashes[2]!).pipe(collect(function (rows) {
        t.deepEqual(mhashes(rows!), [hashes[2]!, hashes[0]!], 'history 2')
    }))

    const h3 = forkdb.history(hashes[3]!)
    const ex3 = [
        [hashes[1]!, hashes[0]!],
        [hashes[2]!, hashes[0]!],
    ]
    h3.on('branch', function (b) {
        const ex = ex3.shift()
        b.pipe(collect(function (rows) {
            t.deepEqual(mhashes(rows!), ex)
        }))
    })
    h3.pipe(collect(function (rows) {
        t.deepEqual(mhashes(rows!), [hashes[3]!])
    }))
})

function collect (cb) {
    const rows: any[] = []
    return through.obj(write, end)
    function write (row, _enc, next) { rows.push(row); next() }
    function end () { cb(rows) }
}

function mhashes (rows) {
    return rows.map(function (row) { return row.hash })
}
