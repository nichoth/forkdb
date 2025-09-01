import { test } from '@substrate-system/tapzero';
import path from 'node:path';
import level from './lib/level.js';
import { mkdirSync } from 'node:fs';
import ForkDB from '../src/index.js';
import concat from './lib/concat-stream.js';
import through from '../src/through.js';
import { tmpdir } from 'node:os';
const testDir = path.join(tmpdir(), 'forkdb-test-' + Math.random());
mkdirSync(testDir, { recursive: true });
const db1 = level(path.join(testDir, 'db1'));
const db2 = level(path.join(testDir, 'db2'));
const forkdb1 = new ForkDB(db1, { dir: path.join(testDir, 'blob1') });
const forkdb2 = new ForkDB(db2, { dir: path.join(testDir, 'blob2') });
const hashes = [
    '9c0564511643d3bc841d769e27b1f4e669a75695f2a2f6206bca967f298390a0',
    'fcbcbe4389433dd9652d279bb9044b8e570d7f033fab18189991354228a43e99',
    'c3122c908bf03bb8b36eaf3b46e27437e23827e6a341439974d5d38fb22fbdfc',
    'e3bd9d14b8c298e57dbbb10235306bd46d12ebaeccd067dc9cdf7ed25b10a96d'
];
test('populate replicate', async function (t) {
    const docs = { a: [], b: [] };
    docs.a.push({
        hash: hashes[0],
        body: 'beep boop\n',
        meta: { key: 'blorp' }
    });
    docs.b.push({
        hash: hashes[1],
        body: 'BEEP BOOP\n',
        meta: {
            key: 'blorp',
            prev: [{ hash: hashes[0], key: 'blorp' }]
        }
    });
    docs.a.push({
        hash: hashes[2],
        body: 'BeEp BoOp\n',
        meta: {
            key: 'blorp',
            prev: [{ hash: hashes[0], key: 'blorp' }]
        }
    });
    docs.b.push({
        hash: hashes[2],
        body: 'BeEp BoOp\n',
        meta: {
            key: 'blorp',
            prev: [{ hash: hashes[0], key: 'blorp' }]
        }
    });
    docs.b.push({
        hash: hashes[3],
        body: 'BEEPITY BOOPITY\n',
        meta: {
            key: 'blorp',
            prev: [
                { hash: hashes[1], key: 'blorp' },
                { hash: hashes[2], key: 'blorp' }
            ]
        }
    });
    t.plan((docs.a.length + docs.b.length) * 2);
    (function next() {
        if (docs.a.length === 0)
            return;
        const doc = docs.a.shift();
        const w = forkdb1.createWriteStream(doc.meta, function (_err, hash) {
            t.ifError(_err);
            t.equal(doc.hash, hash);
            next();
        });
        w.end(doc.body);
    })();
    (function next() {
        if (docs.b.length === 0)
            return;
        const doc = docs.b.shift();
        const w = forkdb2.createWriteStream(doc.meta, function (_err, hash) {
            t.ifError(_err);
            t.equal(doc.hash, hash);
            next();
        });
        w.end(doc.body);
    })();
});
test('replicating', async function (t) {
    t.plan(4);
    const ra = forkdb1.replicate(function (_err, hs) {
        t.ifError(_err);
        t.deepEqual(hs.sort(), [hashes[3], hashes[1]].sort(), 'hashes');
    });
    const rb = forkdb2.replicate(function (_err, hs) {
        t.ifError(_err);
        t.deepEqual(hs.sort(), [hashes[0]].sort(), 'hashes');
    });
    ra.pipe(rb).pipe(ra);
});
test('replicate verify', async function (t) {
    t.plan(20);
    const expected = {
        heads: [],
        tails: [],
        list: [],
        links: {}
    };
    expected.heads = [{ hash: hashes[3] }];
    expected.tails = [{ hash: hashes[0] }];
    expected.list = [
        { hash: hashes[0], meta: { key: 'blorp' } },
        {
            hash: hashes[1],
            meta: {
                key: 'blorp',
                prev: [{ hash: hashes[0], key: 'blorp' }]
            }
        },
        {
            hash: hashes[2],
            meta: {
                key: 'blorp',
                prev: [{ hash: hashes[0], key: 'blorp' }]
            }
        },
        {
            hash: hashes[3],
            meta: {
                key: 'blorp',
                prev: [
                    { hash: hashes[1], key: 'blorp' },
                    { hash: hashes[2], key: 'blorp' }
                ]
            }
        }
    ];
    expected.links = {};
    expected.links[hashes[0]] = [
        { key: 'blorp', hash: hashes[1] },
        { key: 'blorp', hash: hashes[2] }
    ];
    expected.links[hashes[1]] = [
        { key: 'blorp', hash: hashes[3] }
    ];
    expected.links[hashes[2]] = [
        { key: 'blorp', hash: hashes[3] }
    ];
    check(t, forkdb1, expected);
    check(t, forkdb2, expected);
    forkdb1.createReadStream(hashes[0]).pipe(concat(function (body) {
        t.equal(body.toString('utf8'), 'beep boop\n');
    }));
    forkdb1.createReadStream(hashes[1]).pipe(concat(function (body) {
        t.equal(body.toString('utf8'), 'BEEP BOOP\n');
    }));
    forkdb1.createReadStream(hashes[2]).pipe(concat(function (body) {
        t.equal(body.toString('utf8'), 'BeEp BoOp\n');
    }));
    forkdb1.createReadStream(hashes[3]).pipe(concat(function (body) {
        t.equal(body.toString('utf8'), 'BEEPITY BOOPITY\n');
    }));
    forkdb2.createReadStream(hashes[0]).pipe(concat(function (body) {
        t.equal(body.toString('utf8'), 'beep boop\n');
    }));
    forkdb2.createReadStream(hashes[1]).pipe(concat(function (body) {
        t.equal(body.toString('utf8'), 'BEEP BOOP\n');
    }));
    forkdb2.createReadStream(hashes[2]).pipe(concat(function (body) {
        t.equal(body.toString('utf8'), 'BeEp BoOp\n');
    }));
    forkdb2.createReadStream(hashes[3]).pipe(concat(function (body) {
        t.equal(body.toString('utf8'), 'BEEPITY BOOPITY\n');
    }));
});
function collect(cb) {
    const rows = [];
    return through.obj(write, end);
    function write(row, _enc, next) { rows.push(row); next(); }
    function end() { cb(rows); }
}
function check(t, fdb, expected) {
    fdb.heads('blorp').pipe(collect(function (rows) {
        t.deepEqual(rows, sort(expected.heads), 'heads');
    }));
    fdb.tails('blorp').pipe(collect(function (rows) {
        t.deepEqual(rows, sort(expected.tails), 'tails');
    }));
    Object.keys(expected.links).forEach(function (hash) {
        fdb.links(hash).pipe(collect(function (rows) {
            t.deepEqual(rows, sort(expected.links[hash]), 'links');
        }));
    });
    fdb.list().pipe(collect(function (rows) {
        t.deepEqual(rows, sort(expected.list), 'list');
    }));
}
function sort(xs) {
    return xs.sort(cmp);
    function cmp(a, b) {
        if (a.hash !== undefined && a.hash < b.hash)
            return -1;
        if (a.hash !== undefined && a.hash > b.hash)
            return 1;
        return 0;
    }
}
//# sourceMappingURL=replicate.js.map