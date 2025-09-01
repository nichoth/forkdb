import { test } from '@substrate-system/tapzero';
import path from 'node:path';
import level from './lib/level.js';
import { mkdirSync } from 'node:fs';
import concat from './lib/concat-stream.js';
import { tmpdir } from 'node:os';
import ForkDB from '../src/index.js';
const testDir = path.join(tmpdir(), 'forkdb-test-' + Math.random());
mkdirSync(testDir, { recursive: true });
const db = level(path.join(testDir, 'db'));
const fdb = new ForkDB(db, { dir: path.join(testDir, 'blob') });
const blob = Array(1000 * 200 + 1).join('A');
test('blob', async function (t) {
    t.plan(2);
    const key = await new Promise((resolve, reject) => {
        const w = fdb.createWriteStream({ key: 'blob' });
        w.on('complete', (hash) => resolve(hash));
        w.on('error', (err) => reject(err));
        w.end(blob);
    });
    // First assertion: verify we get a valid key
    t.ok(key, 'should get a valid key');
    const body = await new Promise((resolve) => {
        fdb.createReadStream(key).pipe(concat(function (body) {
            resolve(body);
        }));
    });
    // Second assertion: verify the content matches
    t.equal(body.toString('utf8'), blob);
});
//# sourceMappingURL=blob.js.map