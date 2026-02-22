import { type FunctionComponent, render } from 'preact'
import { html } from 'htm/preact'
import { SubstrateButton } from '@substrate-system/button'
import { useSignal } from '@preact/signals'
import { useCallback, useEffect } from 'preact/hooks'
import { CreateForm } from './components/create-form.js'
import { NodeCard } from './components/node-card.js'
import { HistoryPanel } from './components/history-panel.js'
import { MerkleDag } from './components/merkle-dag.js'
import { forkdb } from './db.js'
import { type NodeDetail } from './state.js'

export const App:FunctionComponent = function App () {
    const nodes = useSignal<Array<NodeDetail>>([])
    const selectedHash = useSignal<string|null>(null)
    const headMap = useSignal<Record<string, string[]>>({})

    const selectHash = useCallback((hash:string) => {
        selectedHash.value = hash
    }, [])

    const refresh = useCallback(async () => {
        const allNodes = await forkdb.list()

        const detailed:Array<NodeDetail> = await Promise.all(
            allNodes.map(async (node) => {
                const [body, forwardLinks] = await Promise.all([
                    forkdb.getBody(node.hash).catch(() => ''),
                    forkdb.links(node.hash),
                ])

                return { ...node, body, forwardLinks }
            })
        )
        nodes.value = detailed

        const keys = await forkdb.keys()
        const hm:Record<string, string[]> = {}
        for (const key of keys) {
            hm[key] = await forkdb.heads(key)
        }
        headMap.value = hm
    }, [])

    useEffect(() => {
        forkdb.open().then(refresh).catch(() => undefined)
    }, [refresh])

    const handleReset = useCallback(async () => {
        await forkdb.destroy()
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

                    <section class="heads-section">
                        <h2>Heads</h2>
                        ${Object.entries(headMap.value).map(([key, hashes]) => html`
                            <div class="heads-row" key=${key}>
                                <span class="node-key">${key}</span>
                                ${hashes.map((hash) => html`
                                    <${SubstrateButton.TAG}
                                        key=${hash}
                                        class="hash-link head-hash"
                                        onClick=${() => selectHash(hash)}
                                    >
                                        ${hash}
                                    <//>
                                `)}
                            </div>
                        `)}
                    </section>

                    <section class="nodes-section">
                        <h2>All nodes</h2>
                        ${nodes.value.length === 0 && html`
                            <p class="empty-state">
                                No documents yet. Create one above.
                            </p>
                        `}
                        ${nodes.value.map((node) => html`
                            <${NodeCard}
                                key=${node.hash}
                                node=${node}
                                onSelect=${selectHash}
                            />
                        `)}
                    </section>

                    ${selectedHash.value && html`
                        <${HistoryPanel}
                            hash=${selectedHash.value}
                            onSelect=${selectHash}
                        />
                    `}
                </section>

                <section class="right-column">
                    <${MerkleDag}
                        nodes=${nodes.value}
                        selectedHash=${selectedHash.value}
                        onSelect=${selectHash}
                    />
                </section>
            </div>
        </div>
    `
}

render(html`<${App} />`, document.getElementById('root')!)
