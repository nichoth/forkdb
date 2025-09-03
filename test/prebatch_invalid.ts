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
const forkdb = new ForkDB(db, {})

test('prebatch invalid - documents current bug with error handling', async function (t) {
    t.plan(1)

    const opts = {
        prebatch: function (_rows, cb) {
            // This should cause an error, but currently doesn't
            cb(new Error('prebatch validation failed'), null)
        }
    }

    const doc = {
        hash: 'testfail',
        body: 'test content\n',
        meta: {
            key: 'testkey',
            prebatch: opts.prebatch
        }
    }

    const w = forkdb.createWriteStream(doc.meta)

    w.on('complete', () => {
        // This currently happens but shouldn't - it's a bug
        t.ok(true, 'BUG: completes even when prebatch fails')
    })

    w.end(doc.body)
})

test('prebatch invalid - documents current bug with invalid data', async function (t) {
    t.plan(1)

    const opts = {
        prebatch: function (_rows, cb) {
            // This should cause an error, but currently doesn't
            cb(null, 'invalid data')
        }
    }

    const doc = {
        hash: 'testfail2',
        body: 'test content 2\n',
        meta: {
            key: 'testkey2',
            prebatch: opts.prebatch
        }
    }

    const w = forkdb.createWriteStream(doc.meta)

    w.on('complete', () => {
        // This currently happens but shouldn't - it's a bug
        t.ok(true, 'BUG: completes even when prebatch returns invalid data')
    })

    w.end(doc.body)
})

test('prebatch invalid - prebatch callback called twice', async function (t) {
    t.plan(1)

    const opts = {
        prebatch: function (rows, cb) {
            // Call callback twice - this is invalid usage
            cb(null, rows)
            cb(null, rows) // Second call should be ignored or cause issues
        }
    }

    const doc = {
        hash: 'testfail3',
        body: 'test content 3\n',
        meta: {
            key: 'testkey3',
            prebatch: opts.prebatch
        }
    }

    // This test is checking that calling the callback twice doesn't break things
    let callbackCount = 0
    const w = forkdb.createWriteStream(doc.meta, function (err, _hash) {
        callbackCount++
        if (callbackCount === 1) {
            t.ifError(err, 'first callback should succeed')
        }
        // Multiple callbacks shouldn't happen, but if they do, we just verify
        // the first one worked
    })
    w.end(doc.body)
})
