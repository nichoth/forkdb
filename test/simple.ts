import { test } from '@substrate-system/tapzero'
import level from './lib/level.js'

test('simple database test', async function (t) {
    t.plan(1)
    
    const db = level('test-db-simple')
    
    try {
        await db.putAsync('test', 'value')
        const result = await db.getAsync('test')
        t.equal(result, 'value', 'should get the value we put')
    } catch (err) {
        t.fail('database operation failed: ' + err)
    }
})
