// get content (not metadata) for hash
var db = require('level')('/tmp/edit.db');
var fdb = require('../')(db, { dir: '/tmp/edit.blob' });

var hash = process.argv[2];
fdb.createReadStream(hash).pipe(process.stdout);
