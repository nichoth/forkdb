const test = require('tape')
const path = require('path')
const level = require('level')
const mkdirp = require('mkdirp')
const through = require('through2')
const concat = require('concat-stream')

const tmpdir = path.join(
    require('osenv').tmpdir(),
    'forkdb-test-' + Math.random()
)
mkdirp.sync(tmpdir)

const db = level(path.join(tmpdir, 'db'))

const hashes = [
    '9c0564511643d3bc841d769e27b1f4e669a75695f2a2f6206bca967f298390a0',
    'fcbcbe4389433dd9652d279bb9044b8e570d7f033fab18189991354228a43e99',
    'c3122c908bf03bb8b36eaf3b46e27437e23827e6a341439974d5d38fb22fbdfc',
    'e3bd9d14b8c298e57dbbb10235306bd46d12ebaeccd067dc9cdf7ed25b10a96d',
    '4f86f77339143562532a5896b53007bfe4bbe2fdf93478f2f289d0fce48dc814'
]

const forkdb = require('../')
const fdb = forkdb(db, { dir: path.join(tmpdir, 'blob') })

test('populate concestor', function (t) {
    const docs = [
        {
            hash: hashes[1],
            body: 'BEEP BOOP\n',
            meta: {
                key: 'blorp',
                prev: [{ hash: hashes[0], key: 'blorp' }]
            }
        },
        {
            hash: hashes[3],
            body: 'BEEPITY BOOPITY\n',
            meta: {
                key: 'blorp',
                prev: [
                    { hash: hashes[1], key: 'blorp' },
                    { hash: hashes[2], key: 'blorp' }
                ]
            }
        },
        {
            hash: hashes[2],
            body: 'BeEp BoOp\n',
            meta: {
                key: 'blorp',
                prev: [{ hash: hashes[0], key: 'blorp' }]
            }
        },
        { hash: hashes[0], body: 'beep boop\n', meta: { key: 'blorp' } },
        { hash: hashes[4], body: 'whatever\n', meta: { key: 'blorp' } }
    ]
    t.plan(docs.length * 2);

    (function next () {
        if (docs.length === 0) return
        const doc = docs.shift()
        const w = fdb.createWriteStream(doc.meta, function (err, hash) {
            t.ifError(err)
            t.equal(doc.hash, hash)
            next()
        })
        w.end(doc.body)
    })()
})

test('concestor', function (t) {
    t.plan(3)
    fdb.concestor([hashes[3], hashes[2]], function (err, cons) {
        t.deepEqual(cons, [hashes[2]], 'concestor 0')
    })
    fdb.concestor([hashes[3], hashes[1]], function (err, cons) {
        t.deepEqual(cons, [hashes[1]], 'concestor 1')
    })
    fdb.concestor([hashes[4], hashes[2]], function (err, cons) {
        t.deepEqual(cons, [], 'no concestor')
    })
})
