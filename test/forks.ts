import { test } from '@substrate-system/tapzero'
import path from 'node:path'
import { tmpdir } from 'node:os'
import { unlink } from 'node:fs/promises'
import ForkDB from '../src/index.ts'

test('first doc', async (t) => {
    const testDir = path.join(tmpdir(), 'forkdb-test-' + Math.random())
    const LevelDB = (await import('./lib/level.js')).default
    const db = new LevelDB(testDir)
    const fdb = new ForkDB(db)

    const firstHash = await new Promise<string>((resolve, reject) => {
        const w = fdb.createWriteStream({ key: 'blorp' })
        w.on('complete', (hash) => resolve(hash))
        w.on('error', (err) => reject(err))
        w.end('hello world\n')
    })

    const check = async () => {
        const heads = await fdb.heads('blorp') as any[]
        t.equal(heads.length, 1)
        t.equal(heads[0].hash, firstHash)

        const tails = await fdb.tails('blorp')
        t.equal(tails.length, 1)
        t.equal(tails[0].hash, firstHash)

        const list = await fdb.listByKey('blorp')
        t.equal(list.length, 1)
        t.equal(list[0].hash, firstHash)

        const links = await fdb.linksByKey('blorp')
        t.deepEqual(links, {})
    }

    await check()

    // Clean up
    await db.close()
    await unlink(testDir).catch(() => {})
})

test('second doc', async (t) => {
    const testDir = path.join(tmpdir(), 'forkdb-test-' + Math.random())
    const LevelDB = (await import('./lib/level.js')).default
    const db = new LevelDB(testDir)
    const fdb = new ForkDB(db)

    const firstHash = await new Promise<string>((resolve, reject) => {
        const w = fdb.createWriteStream({ key: 'blorp' })
        w.on('complete', (hash) => resolve(hash))
        w.on('error', (err) => reject(err))
        w.end('hello world\n')
    })

    const secondHash = await new Promise<string>((resolve, reject) => {
        const w = fdb.createWriteStream({ key: 'blorp', prev: [firstHash] })
        w.on('complete', (hash) => resolve(hash))
        w.on('error', (err) => reject(err))
        w.end('hello world2\n')
    })

    const check = async () => {
        const heads = await fdb.heads('blorp') as any[]
        t.equal(heads.length, 1)
        t.equal(heads[0].hash, secondHash)

        const tails = await fdb.tails('blorp')
        t.equal(tails.length, 1)
        t.equal(tails[0].hash, firstHash)

        const list = await fdb.listByKey('blorp')
        t.equal(list.length, 2)
        t.equal(list[0].hash, firstHash)
        t.equal(list[1].hash, secondHash)

        const links = await fdb.linksByKey('blorp')
        t.deepEqual(links, {})
    }

    await check()

    // Clean up
    await db.close()
    await unlink(testDir).catch(() => {})
})

test('third doc (conflict)', async (t) => {
    const testDir = path.join(tmpdir(), 'forkdb-test-' + Math.random())
    const LevelDB = (await import('./lib/level.js')).default
    const db = new LevelDB(testDir)
    const fdb = new ForkDB(db)

    const firstHash = await new Promise<string>((resolve, reject) => {
        const w = fdb.createWriteStream({ key: 'blorp' })
        w.on('complete', (hash) => resolve(hash))
        w.on('error', (err) => reject(err))
        w.end('hello world\n')
    })

    const secondHash = await new Promise<string>((resolve, reject) => {
        const w = fdb.createWriteStream({ key: 'blorp', prev: [firstHash] })
        w.on('complete', (hash) => resolve(hash))
        w.on('error', (err) => reject(err))
        w.end('hello world2\n')
    })

    const thirdHash = await new Promise<string>((resolve, reject) => {
        const w = fdb.createWriteStream({ key: 'blorp', prev: [firstHash] })
        w.on('complete', (hash) => resolve(hash))
        w.on('error', (err) => reject(err))
        w.end('hello world3\n')
    })

    const check = async () => {
        const heads = await fdb.heads('blorp') as any[]
        t.equal(heads.length, 2) // Two heads due to conflict
        t.ok(heads.some(h => h.hash === secondHash))
        t.ok(heads.some(h => h.hash === thirdHash))

        const tails = await fdb.tails('blorp')
        t.equal(tails.length, 1)
        t.equal(tails[0].hash, firstHash)

        const list = await fdb.listByKey('blorp')
        t.equal(list.length, 3)
        t.equal(list[0].hash, firstHash)
        t.ok(list.some(doc => doc.hash === secondHash))
        t.ok(list.some(doc => doc.hash === thirdHash))

        const links = await fdb.linksByKey('blorp')
        t.deepEqual(links, {})
    }

    await check()

    // Clean up
    await db.close()
    await unlink(testDir).catch(() => {})
})

test('fourth doc (resolve conflict)', async (t) => {
    const testDir = path.join(tmpdir(), 'forkdb-test-' + Math.random())
    const LevelDB = (await import('./lib/level.js')).default
    const db = new LevelDB(testDir)
    const fdb = new ForkDB(db)

    const firstHash = await new Promise<string>((resolve, reject) => {
        const w = fdb.createWriteStream({ key: 'blorp' })
        w.on('complete', (hash) => resolve(hash))
        w.on('error', (err) => reject(err))
        w.end('hello world\n')
    })

    const secondHash = await new Promise<string>((resolve, reject) => {
        const w = fdb.createWriteStream({ key: 'blorp', prev: [firstHash] })
        w.on('complete', (hash) => resolve(hash))
        w.on('error', (err) => reject(err))
        w.end('hello world2\n')
    })

    const thirdHash = await new Promise<string>((resolve, reject) => {
        const w = fdb.createWriteStream({ key: 'blorp', prev: [firstHash] })
        w.on('complete', (hash) => resolve(hash))
        w.on('error', (err) => reject(err))
        w.end('hello world3\n')
    })

    const fourthHash = await new Promise<string>((resolve, reject) => {
        const w = fdb.createWriteStream({ key: 'blorp', prev: [secondHash, thirdHash] })
        w.on('complete', (hash) => resolve(hash))
        w.on('error', (err) => reject(err))
        w.end('hello world4\n')
    })

    const check = async () => {
        const heads = await fdb.heads('blorp') as any[]
        t.equal(heads.length, 1)
        t.equal(heads[0].hash, fourthHash)

        const tails = await fdb.tails('blorp')
        t.equal(tails.length, 1)
        t.equal(tails[0].hash, firstHash)

        const list = await fdb.listByKey('blorp')
        t.equal(list.length, 4)
        t.equal(list[0].hash, firstHash)
        t.ok(list.some(doc => doc.hash === secondHash))
        t.ok(list.some(doc => doc.hash === thirdHash))
        t.equal(list[3].hash, fourthHash)

        const links = await fdb.linksByKey('blorp')
        t.deepEqual(links, {})
    }

    await check()

    // Clean up
    await db.close()
    await unlink(testDir).catch(() => {})
})
