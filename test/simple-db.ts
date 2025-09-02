import { test } from '@substrate-system/tapzero'
import path from 'node:path'
import level from './lib/level.js'
import { mkdirSync } from 'node:fs'
import { tmpdir } from 'node:os'

const testDir = path.join(
    tmpdir(),
    'forkdb-test-' + Math.random()
)
mkdirSync(testDir, { recursive: true })

const db = level(path.join(testDir, 'db'))

test('simple database test', async function (t) {
    t.plan(3)

    // Write some test data
    await db.batch([
        { type: 'put', key: ['test', 'key1'], value: 'value1' },
        { type: 'put', key: ['test', 'key2'], value: 'value2' }
    ])

    // Read back the data
    const value1 = await db.get(['test', 'key1'])
    t.equal(value1, 'value1', 'should read back value1')

    const value2 = await db.get(['test', 'key2'])
    t.equal(value2, 'value2', 'should read back value2')

    // Test iterator
    const results = []
    const iterator = db.iterator({
        gt: ['test', null],
        lt: ['test', undefined]
    })

    for await (const [key, value] of iterator) {
        results.push({ key, value })
    }
    await iterator.close()

    t.deepEqual(results, [
        { key: ['test', 'key1'], value: 'value1' },
        { key: ['test', 'key2'], value: 'value2' }
    ], 'should iterate over all test keys')
})
