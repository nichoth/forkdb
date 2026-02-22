import { render } from 'preact'
import { html } from 'htm/preact'
import { useState, useEffect, useCallback, useRef } from 'preact/hooks'
import '@substrate-system/button'
import { BrowserForkDB } from './browser-forkdb.js'
import type { Meta, NodeEntry, LinksEntry } from './browser-forkdb.js'

// ---- state types -----------------------------------------------------------

interface NodeDetail {
    hash:string
    meta:Meta
    body:string
    forwardLinks:LinksEntry[]
}

// ---- the DB instance -------------------------------------------------------

const forkdb = new BrowserForkDB('forkdb-example')

// ---- components ------------------------------------------------------------

function NodeCard ({ node, onSelect }:{
    node:NodeDetail,
    onSelect:(hash:string) => void,
}) {
    const prev = node.meta.prev ?? []

    return html`
        <article class="node-card">
            <header>
                <span class="node-key">${node.meta.key}</span>
                <code class="node-hash" title=${node.hash}>${node.hash}</code>
            </header>

            ${node.body
                ? html`<p class="node-body">${node.body}</p>`
                : null}

            ${prev.length > 0 && html`
                <div class="node-links">
                    <span class="link-label">prev</span>
                    ${prev.map((h:string) => html`
                        <substrate-button
                            key=${h}
                            class="hash-link"
                            onClick=${() => onSelect(h)}
                        >
                            ${h}
                        </substrate-button>
                    `)}
                </div>
            `}

            ${node.forwardLinks.length > 0 && html`
                <div class="node-links">
                    <span class="link-label">next</span>
                    ${node.forwardLinks.map((l:LinksEntry) => html`
                        <substrate-button
                            key=${l.hash}
                            class="hash-link"
                            onClick=${() => onSelect(l.hash)}
                        >
                            ${l.hash}
                        </substrate-button>
                    `)}
                </div>
            `}
        </article>
    `
}

function CreateForm ({ onCreated }:{ onCreated:() => void }) {
    const [key, setKey] = useState('my-doc')
    const [body, setBody] = useState('')
    const [prevHash, setPrevHash] = useState('')

    const submit = useCallback(async (ev:Event) => {
        ev.preventDefault()
        const meta:Meta = { key }
        if (prevHash.trim()) {
            meta.prev = prevHash.split(',').map(s => s.trim()).filter(Boolean)
        }
        await forkdb.put(meta, body)
        setBody('')
        setPrevHash('')
        onCreated()
    }, [key, body, prevHash, onCreated])

    return html`
        <form class="create-form" onSubmit=${submit}>
            <h2>Add a node</h2>

            <label>
                <span>Key</span>
                <input
                    type="text"
                    value=${key}
                    onInput=${(e:Event) => setKey((e.target as HTMLInputElement).value)}
                    required
                />
            </label>

            <label>
                <span>Body</span>
                <textarea
                    value=${body}
                    rows=${3}
                    onInput=${(e:Event) => setBody((e.target as HTMLTextAreaElement).value)}
                />
            </label>

            <label>
                <span>Prev hash(es)</span>
                <input
                    type="text"
                    value=${prevHash}
                    placeholder="comma-separated hashes"
                    onInput=${(e:Event) => setPrevHash((e.target as HTMLInputElement).value)}
                />
            </label>

            <substrate-button class="create-submit" type="submit">
                Create
            </substrate-button>
        </form>
    `
}

function HistoryPanel ({ hash, onSelect }:{
    hash:string,
    onSelect:(h:string) => void,
}) {
    const [history, setHistory] = useState<NodeEntry[]>([])

    useEffect(() => {
        let cancelled = false
        forkdb.history(hash).then(h => {
            if (!cancelled) setHistory(h)
        })
        return () => { cancelled = true }
    }, [hash])

    if (history.length === 0) return null

    return html`
        <aside class="history-panel">
            <h3>History from ${hash}</h3>
            <ol>
                ${history.map(entry => html`
                    <li key=${entry.hash}>
                        <substrate-button
                            class="hash-link"
                            onClick=${() => onSelect(entry.hash)}
                        >
                            ${entry.hash}
                        </substrate-button>
                        <span class="history-key">${entry.meta.key}</span>
                    </li>
                `)}
            </ol>
        </aside>
    `
}

interface DagPoint {
    hash:string
    key:string
    x:number
    y:number
}

interface DagEdge {
    from:string
    to:string
}

function buildDag (nodes:NodeDetail[]):{
    points:DagPoint[]
    edges:DagEdge[]
    width:number
    height:number
} {
    const byHash = new Map<string, NodeDetail>()
    nodes.forEach((node) => byHash.set(node.hash, node))

    const depthCache = new Map<string, number>()
    const getDepth = (hash:string, seen = new Set<string>()):number => {
        if (depthCache.has(hash)) return depthCache.get(hash)!
        if (seen.has(hash)) return 0

        const node = byHash.get(hash)
        if (!node) return 0

        seen.add(hash)
        const prev = node.meta.prev ?? []
        if (prev.length === 0) {
            depthCache.set(hash, 0)
            seen.delete(hash)
            return 0
        }

        let maxDepth = 0
        for (const prevHash of prev) {
            maxDepth = Math.max(maxDepth, getDepth(prevHash, seen) + 1)
        }
        depthCache.set(hash, maxDepth)
        seen.delete(hash)
        return maxDepth
    }

    const sortedNodes = [...nodes].sort((a, b) => {
        const depthDiff = getDepth(a.hash) - getDepth(b.hash)
        if (depthDiff !== 0) return depthDiff
        return a.hash.localeCompare(b.hash)
    })

    const lanesByDepth = new Map<number, Set<number>>()
    const laneByHash = new Map<string, number>()

    const reserveLane = (depth:number, preferred:number|undefined):number => {
        const used = lanesByDepth.get(depth) ?? new Set<number>()
        if (preferred !== undefined && !used.has(preferred)) {
            used.add(preferred)
            lanesByDepth.set(depth, used)
            return preferred
        }

        let lane = 0
        while (used.has(lane)) lane++
        used.add(lane)
        lanesByDepth.set(depth, used)
        return lane
    }

    let maxLane = 0
    let maxDepth = 0
    for (const node of sortedNodes) {
        const depth = getDepth(node.hash)
        maxDepth = Math.max(maxDepth, depth)
        const prev = node.meta.prev ?? []
        const preferred = prev
            .map((prevHash) => laneByHash.get(prevHash))
            .find((lane):lane is number => lane !== undefined)
        const lane = reserveLane(depth, preferred)
        laneByHash.set(node.hash, lane)
        maxLane = Math.max(maxLane, lane)
    }

    const points:DagPoint[] = []
    const xStep = 180
    const yStep = 140
    const xMargin = 90
    const yMargin = 70

    for (const node of sortedNodes) {
        const lane = laneByHash.get(node.hash) ?? 0
        const depth = getDepth(node.hash)
        points.push({
            hash: node.hash,
            key: node.meta.key,
            x: xMargin + (lane * xStep),
            y: yMargin + (depth * yStep)
        })
    }

    const edges:DagEdge[] = []
    for (const node of nodes) {
        const prev = node.meta.prev ?? []
        for (const prevHash of prev) {
            if (byHash.has(prevHash)) {
                edges.push({ from: prevHash, to: node.hash })
            }
        }
    }

    return {
        points,
        edges,
        width: (maxLane * xStep) + (xMargin * 2),
        height: (maxDepth * yStep) + (yMargin * 2)
    }
}

function MerkleDag ({ nodes, selectedHash, onSelect }:{
    nodes:NodeDetail[]
    selectedHash:string|null
    onSelect:(hash:string) => void
}) {
    const dag = buildDag(nodes)
    const scrollRef = useRef<HTMLDivElement|null>(null)

    useEffect(() => {
        const el = scrollRef.current
        if (!el) return
        el.scrollTop = el.scrollHeight
    }, [dag.points.length])

    const pointMap = new Map<string, DagPoint>()
    dag.points.forEach((point) => pointMap.set(point.hash, point))

    return html`
        <section class="dag-section">
            <h2>Merkle DAG</h2>

            ${dag.points.length === 0 ?
                html`<p class="empty-state">-</p>` :
                html`
                    <div class="dag-scroll" ref=${scrollRef}>
                        <svg
                            class="dag-canvas"
                            width=${dag.width}
                            height=${dag.height}
                            role="img"
                            aria-label="Merkle DAG visualization"
                        >
                            ${dag.edges.map((edge) => {
                                const from = pointMap.get(edge.from)
                                const to = pointMap.get(edge.to)
                                if (!from || !to) return null
                                return html`
                                    <line
                                        key=${`${edge.from}->${edge.to}`}
                                        class="dag-edge"
                                        x1=${from.x}
                                        y1=${from.y}
                                        x2=${to.x}
                                        y2=${to.y}
                                    />
                                `
                            })}

                            ${dag.points.map((point) => html`
                                <g
                                    key=${point.hash}
                                    class="dag-node-group"
                                    onClick=${() => onSelect(point.hash)}
                                >
                                    <circle
                                        class=${selectedHash === point.hash ? 'dag-node dag-node-selected' : 'dag-node'}
                                        cx=${point.x}
                                        cy=${point.y}
                                        r=${36}
                                    />
                                    <text
                                        class="dag-node-label"
                                        x=${point.x}
                                        y=${point.y}
                                        text-anchor="middle"
                                        dominant-baseline="central"
                                    >
                                        ${point.hash.slice(0, 4)}
                                    </text>
                                    <text
                                        class="dag-node-key"
                                        x=${point.x}
                                        y=${point.y + 56}
                                        text-anchor="middle"
                                    >
                                        ${point.key}
                                    </text>
                                </g>
                            `)}
                        </svg>
                    </div>
                `}

            ${selectedHash && html`
                <p class="dag-selected">
                    Selected node: <code>${selectedHash}</code>
                </p>
            `}
        </section>
    `
}

function App () {
    const [nodes, setNodes] = useState<NodeDetail[]>([])
    const [selectedHash, setSelectedHash] = useState<string|null>(null)
    const [headMap, setHeadMap] = useState<Record<string, string[]>>({})

    const refresh = useCallback(async () => {
        const allNodes = await forkdb.list()

        // Enrich with body + forward links
        const detailed:NodeDetail[] = await Promise.all(
            allNodes.map(async (n) => {
                const [body, forwardLinks] = await Promise.all([
                    forkdb.getBody(n.hash).catch(() => ''),
                    forkdb.links(n.hash),
                ])
                return { ...n, body, forwardLinks }
            })
        )

        setNodes(detailed)

        // Build head map
        const keys = await forkdb.keys()
        const hm:Record<string, string[]> = {}
        for (const k of keys) {
            hm[k] = await forkdb.heads(k)
        }
        setHeadMap(hm)
    }, [])

    useEffect(() => {
        forkdb.open().then(refresh)
    }, [refresh])

    const handleReset = useCallback(async () => {
        await forkdb.destroy()
        // Re-open a fresh instance — BrowserForkDB constructor creates a new
        // BrowserLevel, but after destroy the old handle is closed, so we
        // need to reload the page for a clean slate.
        window.location.reload()
    }, [])

    return html`
        <div class="app">
            <header class="app-header">
                <h1>ForkDB</h1>
                <p class="subtitle">
                    Content-addressed append-only store
                    backed by IndexedDB
                </p>
                <substrate-button class="reset-btn" onClick=${handleReset}>
                    Reset DB
                </substrate-button>
            </header>

            <div class="app-grid">
                <section class="left-column">
                    <${CreateForm} onCreated=${refresh} />

                    ${Object.keys(headMap).length > 0 && html`
                        <section class="heads-section">
                            <h2>Heads</h2>
                            ${Object.entries(headMap).map(([key, hashes]) => html`
                                <div class="heads-row" key=${key}>
                                    <span class="node-key">${key}</span>
                                    ${(hashes as string[]).map((h:string) => html`
                                        <substrate-button
                                            key=${h}
                                            class="hash-link head-hash"
                                            onClick=${() => setSelectedHash(h)}
                                        >
                                            ${h}
                                        </substrate-button>
                                    `)}
                                </div>
                            `)}
                        </section>
                    `}

                    <section class="nodes-section">
                        <h2>All nodes</h2>
                        ${nodes.length === 0 && html`
                            <p class="empty-state">
                                No documents yet. Create one above.
                            </p>
                        `}
                        ${nodes.map(n => html`
                            <${NodeCard}
                                key=${n.hash}
                                node=${n}
                                onSelect=${setSelectedHash}
                            />
                        `)}
                    </section>

                    ${selectedHash && html`
                        <${HistoryPanel}
                            hash=${selectedHash}
                            onSelect=${setSelectedHash}
                        />
                    `}
                </section>

                <section class="right-column">
                    <${MerkleDag}
                        nodes=${nodes}
                        selectedHash=${selectedHash}
                        onSelect=${setSelectedHash}
                    />
                </section>
            </div>
        </div>
    `
}

// ---- mount -----------------------------------------------------------------

render(html`<${App} />`, document.getElementById('root')!)
