import { test } from '@substrate-system/tapzero';
import path from 'node:path';
import level from './lib/level.js';
import { mkdirSync } from 'node:fs';
import { tmpdir } from 'node:os';
import ForkDB from '../src/index.js';
const testDir = path.join(tmpdir(), 'forkdb-test-' + Math.random());
mkdirSync(testDir, { recursive: true });
const db = level(path.join(testDir, 'db'));
const fdb = new ForkDB(db, { dir: path.join(testDir, 'blob') });
const hashes = [
    '9c0564511643d3bc841d769e27b1f4e669a75695f2a2f6206bca967f298390a0',
    'fcbcbe4389433dd9652d279bb9044b8e570d7f033fab18189991354228a43e99',
    'c3122c908bf03bb8b36eaf3b46e27437e23827e6a341439974d5d38fb22fbdfc',
    'e3bd9d14b8c298e57dbbb10235306bd46d12ebaeccd067dc9cdf7ed25b10a96d',
    '3ba9e19284ddfeda5d675bf776a859629eed1c465f60147f763accb5b61bc02e'
];
test('populate keys', async function (t) {
    const docs = [
        { hash: hashes[0], body: 'beep boop\n', meta: { key: 'blorp' } },
        {
            hash: hashes[1],
            body: 'BEEP BOOP\n',
            meta: {
                key: 'blorp',
                prev: [{ hash: hashes[0], key: 'blorp' }]
            }
        },
        { hash: hashes[4], body: 'yay\n', meta: { key: 'wooo' } },
        {
            hash: hashes[2],
            body: 'BeEp BoOp\n',
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
        }
    ];
    t.plan(docs.length * 2);
    (function next() {
        if (docs.length === 0)
            return;
        const doc = docs.shift();
        if (!doc)
            return;
        const w = fdb.createWriteStream(doc.meta, function (_err, hash) {
            t.ifError(_err);
            t.equal(doc.hash, hash);
            next();
        });
        w.end(doc.body);
    })();
});
test('keys', async function (t) {
    t.plan(1);
    const keys = await fdb.keys();
    t.deepEqual(keys, [
        'blorp',
        'wooo'
    ]);
});
//# sourceMappingURL=keys.js.map