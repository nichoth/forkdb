# Forkdb

[![tests](https://img.shields.io/github/actions/workflow/status/nichoth/forkdb/nodejs.yml?style=flat-square)](https://github.com/nichoth/forkdb/actions/workflows/nodejs.yml)
[![types](https://img.shields.io/npm/types/@nichoth/icons?style=flat-square)](README.md)
[![module](https://img.shields.io/badge/module-ESM%2FCJS-blue?style=flat-square)](README.md)
[![semantic versioning](https://img.shields.io/badge/semver-2.0.0-blue?logo=semver&style=flat-square)](https://semver.org/)
[![Common Changelog](https://nichoth.github.io/badge/common-changelog.svg)](./CHANGELOG.md)
[![install size](https://flat.badgen.net/packagephobia/install/@nichoth/forkdb)](https://packagephobia.com/result?p=@nichoth/forkdb)
[![license](https://img.shields.io/badge/license-Big_Time-blue?style=flat-square)](LICENSE)


Forking content-addressed append-only historical key/value blob store over
leveldb with multi-master replication

Conflicts are unavoidable, particularly when latency is high. Instead of hiding
that fundamental fact or going into a conflict panic mode that demands an
immediate resolution, forkdb anticipates and welcomes conflicts.

Interfaces built on forkdb should be honest about the underlying data model and
embrace conflicts too.

For a lower-level version of just the link management for multi-master
replication, check out [fwdb](https://npmjs.org/package/fwdb), upon which this
library is based.

<details><summary><h2>Contents</h2></summary>

<!-- toc -->

- [Install](#install)
- [Example](#example)
- [Replication](#replication)
- [API Example](#api-example)
- [Data Model](#data-model)
- [Methods](#methods)
- [Creating an instance](#creating-an-instance)
  * [`ForkDB.create(db, opts)`](#forkdbcreatedb-opts)
  * [`new ForkDB(db, opts)`](#new-forkdbdb-opts)
- [Writing and reading blobs (Web Streams)](#writing-and-reading-blobs-web-streams)
  * [`fdb.createWritableStream(meta, opts)`](#fdbcreatewritablestreammeta-opts)
  * [`fdb.createReadableStream(hash)`](#fdbcreatereadablestreamhash)
- [Query APIs (Promises)](#query-apis-promises)
- [History and future (Web Streams)](#history-and-future-web-streams)
- [Replication (Web Streams)](#replication-web-streams)
- [Legacy Node stream APIs](#legacy-node-stream-apis)
- [Usage](#usage)

<!-- tocstop -->

</details>

## Install

With [npm](https://npmjs.org),
to get the `forkdb` command do:

```sh
npm install -g forkdb
```

and to get the library do:

```sh
npm install forkdb
```

## Example

Here we'll create a new document with the contents `beep boop` under the key
`"blorp"`.

```sh
$ echo beep boop | forkdb create blorp
9c0564511643d3bc841d769e27b1f4e669a75695f2a2f6206bca967f298390a0
```

This document is now the singular head of the blorp key:

```sh
$ forkdb forks blorp
9c0564511643d3bc841d769e27b1f4e669a75695f2a2f6206bca967f298390a0
```

But now, we'll make a new document that links back to the document we just
created and see that the head has updated to the new document's hash:

```sh
$ echo BEEP BOOP | forkdb create blorp \
  --prev=9c0564511643d3bc841d769e27b1f4e669a75695f2a2f6206bca967f298390a0
f5ff29843ef0658e2a1e14ed31198807ce8302936116545928756844be45fe41
```

```sh
$ forkdb forks blorp
f5ff29843ef0658e2a1e14ed31198807ce8302936116545928756844be45fe41
```

But suppose that while we were making our `BEEP BOOP` update, somebody else was
working on an edit to the same previous hash, 9c056451. In other words, a
conflict!

```sh
$ echo BeEp BoOp | forkdb create blorp \
  --prev=9c0564511643d3bc841d769e27b1f4e669a75695f2a2f6206bca967f298390a0
6c0c881fad7adb3fec52b75ab0de8670391ceb8847c8e4c3a2dce9a56244b328
```

This is no problem for forkdb. There are just 2 forks of the `blorp` key now,
which is completely fine:

```sh
$ forkdb forks blorp
6c0c881fad7adb3fec52b75ab0de8670391ceb8847c8e4c3a2dce9a56244b328
f5ff29843ef0658e2a1e14ed31198807ce8302936116545928756844be45fe41
```

A UI could show both (or more!) versions side by side or perhaps have a
branch where the files diverge.

However, we can also merge these 2 documents back into 1 by creating a new
document that points back at both forks:

```sh
$ echo BEEPITY BOOPITY | forkdb create blorp \
  --prev=6c0c881fad7adb3fec52b75ab0de8670391ceb8847c8e4c3a2dce9a56244b328 \
  --prev=f5ff29843ef0658e2a1e14ed31198807ce8302936116545928756844be45fe41
058647fc544f70a96d5d083ae7e3c373b441fc3d55b993407254fcce3c732f1e
```

and now we're back to a single head:

```sh
$ forkdb forks blorp
058647fc544f70a96d5d083ae7e3c373b441fc3d55b993407254fcce3c732f1e
```

However, all of the previous states of the blorp key were saved into the
history, which we can inspect by picking a key (in this case, the new head
e3bd9d14) and traversing back through the branches to end up at the tail:

```sh
$ forkdb history 058647fc544f70a96d5d083ae7e3c373b441fc3d55b993407254fcce3c732f1e
+- blorp :: 058647fc544f70a96d5d083ae7e3c373b441fc3d55b993407254fcce3c732f1e
 +- blorp :: 6c0c881fad7adb3fec52b75ab0de8670391ceb8847c8e4c3a2dce9a56244b328
 |- blorp :: 9c0564511643d3bc841d769e27b1f4e669a75695f2a2f6206bca967f298390a0
 +- blorp :: f5ff29843ef0658e2a1e14ed31198807ce8302936116545928756844be45fe41
 |- blorp :: 9c0564511643d3bc841d769e27b1f4e669a75695f2a2f6206bca967f298390a0
```

## Replication

First, we'll populate two databases, `/tmp/a` and `/tmp/b` with some data:

```sh
$ echo beep boop | forkdb -d /tmp/a create msg
0673a2977261a9413b8a1abe8389b7c6ef327b319f60f814dece9617d43465c0

$ echo RAWR | forkdb -d /tmp/a create msg \
  --prev=0673a2977261a9413b8a1abe8389b7c6ef327b319f60f814dece9617d43465c0
071f8d4403f88ca431023ec12a277b28bcd68ab41c5043a5bf7e690b23ba7184

$ echo moo | forkdb -d /tmp/b create msg \
  --prev=0673a2977261a9413b8a1abe8389b7c6ef327b319f60f814dece9617d43465c0
e708cc6e5114ac184e0cf81aca203ddd6b02a599d9d85ac756b37b9b19cd4fae
```

Now we can use [dupsh](https://npmjs.org/package/dupsh) to pipe replication
endpoints for `/tmp/a` and `/tmp/b` together:

```sh
$ dupsh 'forkdb sync -d /tmp/a' 'forkdb sync -d /tmp/b'
```

dupsh is handy here because the `sync` command reads from stdin and writes to
stdout. You can sync two forkdbs over the network with any duplex transport.

For example, with netcat we can create a server on port 5000:

```sh
$ dupsh 'forkdb sync -d /tmp/a' 'nc -l 5000'
```

and then elsewhere we can connect to port 5000 for replication:

```sh
$ dupsh 'forkdb sync -d /tmp/b' 'nc localhost 5000'
```

No matter how you get the data to each database, everything is now in sync!

```sh
$ forkdb -d /tmp/a forks msg
071f8d4403f88ca431023ec12a277b28bcd68ab41c5043a5bf7e690b23ba7184
e708cc6e5114ac184e0cf81aca203ddd6b02a599d9d85ac756b37b9b19cd4fae
$ forkdb -d /tmp/b forks msg
071f8d4403f88ca431023ec12a277b28bcd68ab41c5043a5bf7e690b23ba7184
e708cc6e5114ac184e0cf81aca203ddd6b02a599d9d85ac756b37b9b19cd4fae
```

If we make a merge update on `/tmp/b`:

```sh
$ echo woop | forkdb -d /tmp/b create msg \
  --prev=071f8d4403f88ca431023ec12a277b28bcd68ab41c5043a5bf7e690b23ba7184 \
  --prev=e708cc6e5114ac184e0cf81aca203ddd6b02a599d9d85ac756b37b9b19cd4fae
7e38e3a49db243c39b86e8b17535745b8967b914b5aeaf442c8fac9f3e6a7b8b
```

and then merge again:

```sh
$ dupsh 'forkdb sync -d /tmp/a' 'forkdb sync -d /tmp/b'
```

now the data is merged on both databases:

```sh
$ forkdb -d /tmp/a forks msg
7e38e3a49db243c39b86e8b17535745b8967b914b5aeaf442c8fac9f3e6a7b8b
$ forkdb -d /tmp/b forks msg
7e38e3a49db243c39b86e8b17535745b8967b914b5aeaf442c8fac9f3e6a7b8b
```

Replication woo.

## API Example

Note promises and Web Streams.

```js
import { Readable } from 'node:stream'
import { Level } from 'level'
import ForkDB from '@nichoth/forkdb'

const db = new Level('/tmp/edit.db', {
  keyEncoding: 'json',
  valueEncoding: 'json'
})

const fdb = await ForkDB.create(db, { dir: '/tmp/edit.blob' })

const meta = { key: 'blorp' }
const { writable, hash } = fdb.createWritableStream(meta)

await Readable.toWeb(process.stdin).pipeTo(writable)
console.log(await hash)
```

## Data Model

The data model is append-only. Each document operates under a key and may
reference zero or more other documents by the hash of their content, which
always point backward in time. That is, to have a link to a document, the
document must first exist because the link is the hash of its content.

For the core `ForkDB` implementation, the node hash is the content hash of the
exact bytes written into blob storage:

1. `json-stable-stringify(meta)` encoded as UTF-8
2. A single newline byte (`\n`)
3. The raw document body bytes

With the default `content-addressable-blob-store`, the hash is a full
hex-encoded SHA-256 digest of those bytes.

Each document can link back to zero, one, or many other documents from any other
key. You can make these links mean semantically whatever you wish, but given how
heads, tails, and forward indexes are generated from these backward links, this
is a helpful semantic model to use:

* `n = 0` - a new document with no history
* `n = 1` - an update to an existing document
* `n >= 2` - merge multiple documents together

For each of these conditions, the heads and tails are updated:

* `n = 0` - a new head and new tail are added
* `n = 1` - a head is removed, a new head is added
* `n >= 2` - `n` heads are removed, one head is added

Each update with a backward link also generates a forward link to enable fast
forward and backward traversals. Forward links, heads, and tails are all
generated purely for performance reasons since these can all be computed, albeit
slowly, from the backward links.

## Methods

```js
import ForkDB from '@nichoth/forkdb'
```

## Creating an instance

### `ForkDB.create(db, opts)`

Preferred async constructor. Returns a fully initialized instance.

### `new ForkDB(db, opts)`

Synchronous constructor. Initialization continues in the background.
Use `ForkDB.create()` if you want to await readiness.

`opts`:

* `opts.id` - unique instance ID used for replication sequence tracking
* `opts.dir` - blob directory for `content-addressable-blob-store`

## Writing and reading blobs (Web Streams)

### `fdb.createWritableStream(meta, opts)`

Returns:

* `writable` - `WritableStream<Uint8Array|string>`
* `hash` - `Promise<string>` that resolves when write + index commit completes

`meta` must include `meta.key`. To link previous nodes, set `meta.prev` to
hashes (array or single value).

`opts.prebatch(rows, hash, commit)` lets you mutate/augment batch rows before
commit.

Example:

```js
const { writable, hash } = fdb.createWritableStream({
  key: 'blorp',
  prev: ['9c056451...']
})

await new Blob(['beep boop']).stream().pipeTo(writable)
const id = await hash
```

### `fdb.createReadableStream(hash)`

Returns `ReadableStream<Uint8Array>` for blob contents at `hash`.

## Query APIs (Promises)

These APIs are Promise-based:

* `await fdb.forks(key, opts?)` (alias: `heads`) -> `{ hash }[]`
* `await fdb.heads(key, opts?)` -> `{ hash }[]`
* `await fdb.tails(key, opts?)` -> `{ hash }[]`
* `await fdb.keys(opts?)` -> `string[]`
* `await fdb.list(opts?)` -> `{ meta, hash }[]`
* `await fdb.listByKey(key, opts?)` -> `{ meta, hash }[]`
* `await fdb.get(hash)` -> `meta`
* `await fdb.links(hash, opts?)` -> `{ key, hash }[]`
* `await fdb.concestor(hashes)` -> `string[]`

`opts` can include range/limit controls (`gt`, `lt`, `limit`) where supported.

Node-style callbacks are still accepted by some methods for backward
compatibility, but Promise usage is preferred.

## History and future (Web Streams)

### `fdb.historyStream(hash)`

Returns `ReadableStream<{ hash, meta }>` traversing backward.

### `fdb.futureStream(hash)`

Returns `ReadableStream<{ hash, meta }>` traversing forward.

For branch-event traversal (`'branch'` events), use legacy Node-stream
`history()` / `future()` methods.

## Replication (Web Streams)

### `fdb.replicateStream(opts?)`

Returns:

* `readable` - outbound `ReadableStream<Uint8Array>`
* `writable` - inbound `WritableStream<Uint8Array>`
* `synced` - `Promise<string[]>` resolved with exchanged hashes when sync fires

`opts.mode`: `'sync' | 'push' | 'pull'` (default `'sync'`).

`opts.live`: keep replication open for ongoing changes.

Example wiring two instances:

```js
const a = fdbA.replicateStream({ mode: 'sync' })
const b = fdbB.replicateStream({ mode: 'sync' })

await Promise.all([
  a.readable.pipeTo(b.writable),
  b.readable.pipeTo(a.writable),
  a.synced,
  b.synced
])
```

## Legacy Node stream APIs

These remain available for compatibility:

* `createWriteStream(meta, opts?, cb?)`
* `createReadStream(hash)`
* `history(hash)` / `future(hash)` with `'branch'` events
* `replicate(opts?, cb?)`

## Usage

```sh
usage: forkdb COMMAND OPTIONS

  Global options are:

    -d, --dir  directory to use for both db and blob storage
               If not specified, uses $FORKDB_DIR or ./forkdb
 
    --blobdir  directory to use for blob storage

    --dbdir    directory to use for db

forkdb create KEY {--prev=HASH ...}

  Create a new document with content from stdin under KEY.
  Set pointers to previous content with "--prev". To point back at multiple
  documents (a merge), use --prev more than once.
  
forkdb list {--lt=LT, --gt=GT, --limit=LIMIT}

  List all the document metadata in the database.
  Optionally set LT, GT, and LIMIT constraints on the output.

forkdb keys {--lt=LT, --gt=GT, --limit=LIMIT}

  List all the active keys in the database, one key per line.

forkdb read HASH

  Print the contents for HASH to stdout.

forkdb get HASH

  Print the metadata for HASH to stdout as json.

forkdb forks KEY

  Print the hash of every head for KEY on its own line.

forkdb tails KEY

  Print the hash of every tail for KEY on its own line.

forkdb links HASH

  Print newline-delimited json for the `key` and `hash` properties of each
  forward link back to HASH.

forkdb history HASH

  Print an ascii diagram to stdout tracing HASH back in time to its tails.

forkdb future

  Print an ascii diagram to stdout tracing HASH forward in time to its heads.

forkdb concestor HASH1 HASH2...

  Print the most recent common ancestor(s) for the list of HASHes.

forkdb sync {OPTIONS} # multi-master replication
forkdb push {OPTIONS} # push updates
forkdb pull {OPTIONS} # pull updates

  Replicate with another forkdb using a replication strategy.
  stdin and stdout are used for incoming and outgoing traffic.
  Optionally:
  
    --live  Keep the connection open for additional updates after the initial
            replication phase.

forkdb help

  Show this message.
```
