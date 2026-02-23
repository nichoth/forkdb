import { html } from 'htm/preact'
import { type FunctionComponent } from 'preact'
import { useEffect, useRef } from 'preact/hooks'
import { type NodeDetail } from '../state.js'
import { shortHash } from '../hash.js'

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

export const MerkleDag:FunctionComponent<{
    nodes:NodeDetail[]
    selectedHash:string|null
    onSelect:(hash:string) => void
}> = function MerkleDag ({ nodes, selectedHash, onSelect }) {
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

                            ${dag.points.map((point) => {
                                const label = shortHash(point.hash, 4)
                                const key = point.key
                                const keyBgWidth = Math.max(48, key.length * 12)
                                return html`
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
                                            ${label}
                                        </text>
                                        <rect
                                            class="dag-node-key-bg"
                                            x=${point.x - (keyBgWidth / 2)}
                                            y=${point.y + 40}
                                            width=${keyBgWidth}
                                            height=${24}
                                        />
                                        <text
                                            class="dag-node-key"
                                            x=${point.x}
                                            y=${point.y + 56}
                                            dominant-baseline="middle"
                                            text-anchor="middle"
                                        >
                                            ${key}
                                        </text>
                                    </g>
                                `
                            })}
                        </svg>
                    </div>
                `}

            ${selectedHash && html`
                <p class="dag-selected">
                    Selected node: <code title=${selectedHash}>${shortHash(selectedHash)}</code>
                </p>
            `}
        </section>
    `
}
