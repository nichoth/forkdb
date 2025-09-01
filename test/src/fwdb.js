import defaults from 'levelup-defaults';
import bytewise from 'bytewise';
import through from './through.js';
import readonly from 'read-only-stream';
import wrap from 'level-option-wrap';
import { EventEmitter } from 'events';
import { defined } from './index.js';
const { encode } = bytewise;
export default class FWDB extends EventEmitter {
    constructor(db) {
        super();
        this.db = defaults(db, { keyEncoding: encode, valueEncoding: 'json' });
    }
    create(opts, cb) {
        if (!cb)
            cb = noop;
        let i = 0;
        const rows = [];
        const done = (_err, rows) => {
            this.emit('batch', rows);
            this.db.batch(rows, cb);
        };
        const loop = (err, rows_) => {
            if (err)
                return cb(err);
            if (rows_)
                rows.push(...rows_);
            if (i === opts.length)
                done(null, rows);
            else
                this._create(opts[i++], loop);
        };
        if (!Array.isArray(opts)) {
            this._create(opts, done);
        }
        else {
            loop();
        }
    }
    async _create(opts, cb) {
        if (typeof opts === 'function') {
            cb = opts;
            opts = {};
        }
        if (!opts)
            opts = {};
        const hash = opts.hash;
        let prev = defined(opts.prev, []);
        if (!Array.isArray(prev))
            prev = [prev];
        let cbCalled = false;
        const cb_ = (err, rows) => {
            if (!cbCalled) {
                cb(err, rows || []);
                cbCalled = true;
            }
        };
        const key = opts.key;
        const prebatch = defined(opts.prebatch, (rows, done) => { done(null, rows); });
        const rows = [];
        rows.push({ type: 'put', key: ['key', key], value: 0 });
        rows.push({ type: 'put', key: ['hash', hash], value: 0 });
        let pending = 1 + prev.length;
        const commit = () => {
            prebatch(rows, done);
        };
        const done = (err, rows_) => {
            if (err)
                return cb_(err);
            if (!Array.isArray(rows_))
                return cb_(new Error('prebatch result not an array'));
            cb_(null, rows_);
        };
        const ondangling = (dangling, ex) => {
            if (dangling.length === 0 && !ex) {
                rows.push({
                    type: 'put',
                    key: ['head', key, hash],
                    value: 0
                });
            }
            dangling.forEach((d) => {
                rows.push({ type: 'del', key: d.key });
                rows.push({ type: 'del', key: ['head', key, hash] });
                rows.push({
                    type: 'put',
                    key: ['link', hash, d.key[3]],
                    value: key
                });
            });
            pending--;
            if (pending === 0)
                commit();
        };
        for (const phash of prev) {
            try {
                const ex = await exists(this.db, ['hash', phash]);
                if (ex) {
                    rows.push({
                        type: 'del',
                        key: ['head', key, phash],
                        value: 0
                    });
                    rows.push({
                        type: 'put',
                        key: ['link', phash, hash],
                        value: key
                    });
                }
                else {
                    rows.push({
                        type: 'put',
                        key: ['dangle', key, phash, hash],
                        value: 0
                    });
                }
                pending--;
                if (pending === 0)
                    commit();
            }
            catch (err) {
                cb_(err);
                return [];
            }
        }
        try {
            const ex = await exists(this.db, ['hash', hash]);
            const dangling = await getDangling(this.db, key, hash);
            ondangling(dangling, ex);
        }
        catch (err) {
            cb_(err);
            return [];
        }
        return new Promise((resolve, reject) => {
            const originalCb = cb;
            cb = (err, rows) => {
                if (originalCb)
                    originalCb(err, rows || []);
                if (err)
                    reject(err);
                else
                    resolve(rows || []);
            };
        });
    }
    heads(key, opts = {}, cb) {
        if (typeof opts === 'function') {
            cb = opts;
            opts = {};
        }
        if (!opts)
            opts = {};
        const r = this.db.createReadStream(wrap(opts, {
            gt: (x) => ['head', key, defined(x, null)],
            lt: (x) => ['head', key, defined(x, undefined)]
        }));
        const tr = through.obj(function (row, _enc, next) {
            this.push({ hash: row.key[2] });
            next();
        });
        if (cb)
            r.on('error', cb);
        if (cb)
            tr.pipe(collect(cb));
        r.on('error', (err) => { tr.emit('error', err); });
        return readonly(r.pipe(tr));
    }
    links(hash, opts = {}, cb) {
        if (typeof opts === 'function') {
            cb = opts;
            opts = {};
        }
        if (!opts)
            opts = {};
        const r = this.db.createReadStream(wrap(opts, {
            gt: (x) => ['link', hash, defined(x, null)],
            lt: (x) => ['link', hash, defined(x, undefined)]
        }));
        const tr = through.obj(function (row, _enc, next) {
            this.push({ key: row.value, hash: row.key[2] });
            next();
        });
        if (cb)
            tr.on('error', cb);
        if (cb)
            tr.pipe(collect(cb));
        r.on('error', (err) => { tr.emit('error', err); });
        return readonly(r.pipe(tr));
    }
    keys(opts = {}, cb) {
        if (typeof opts === 'function') {
            cb = opts;
            opts = {};
        }
        if (!opts)
            opts = {};
        const r = this.db.createReadStream(wrap(opts, {
            gt: (x) => ['key', defined(x, null)],
            lt: (x) => ['key', defined(x, undefined)]
        }));
        const tr = through.obj(function (row, _enc, next) {
            this.push({ key: row.key[1] });
            next();
        });
        if (cb)
            tr.on('error', cb);
        if (cb)
            tr.pipe(collect(cb));
        r.on('error', (err) => { tr.emit('error', err); });
        return readonly(r.pipe(tr));
    }
}
function collect(cb) {
    const rows = [];
    return through.obj(function write(row, _enc, next) {
        rows.push(row);
        next();
    }, function end() {
        cb(null, rows);
    });
}
async function exists(db, key) {
    try {
        await db.get(key);
        return true;
    }
    catch (err) {
        if (err.type === 'NotFoundError') {
            return false;
        }
        throw err;
    }
}
async function getDangling(db, key, hash) {
    return new Promise((resolve, reject) => {
        const opts = {
            gt: ['dangle', key, hash, null],
            lt: ['dangle', key, hash, undefined]
        };
        const s = db.createReadStream(opts);
        s.on('error', reject);
        s.pipe(collect(resolve));
    });
}
function noop() { }
//# sourceMappingURL=fwdb.js.map