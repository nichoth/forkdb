import { type FunctionComponent, render } from 'preact'
import { html } from 'htm/preact'
import { SubstrateButton } from '@substrate-system/button'
import { useSignal } from '@preact/signals'
import { useCallback, useEffect } from 'preact/hooks'
import { CreateForm } from './components/create-form.js'
import { BrowserForkDB } from '../src/browser.js'
import { MerkleDag } from './components/merkle-dag.js'
import { type NodeDetail } from './state.js'
import { shortHash } from './hash.js'

export const forkdb = new BrowserForkDB('forkdb-example')

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

    const selectedNode = selectedHash.value
        ? nodes.value.find((node) => node.hash === selectedHash.value) ?? null
        : null

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

            <section class="hash-explainer">
                <p>
                    Each node hash is computed like this:
                    ${' '}<code>hash(JSON.stringify({ key, prev, body }))</code>
                </p>
                <p>
                    The hash is SHA-256 over the UTF-8 bytes of that string.
                    Forward links are mutable derived indexes, so they are not
                    part of the hash input.
                </p>
            </section>

            <div class="app-grid">
                <${CreateForm} onCreated=${refresh} />

                <${MerkleDag}
                    nodes=${nodes.value}
                    selectedHash=${selectedHash.value}
                    onSelect=${selectHash}
                />

                <section class="heads-panel">
                    <section class="heads-section">
                        <h2>Heads</h2>
                        ${Object.keys(headMap.value).length === 0 && html`
                            <p class="empty-state">No heads yet.</p>
                        `}
                        ${Object.entries(headMap.value).map(([key, hashes]) => html`
                            <dl class="heads-row" key=${key}>
                                <dt class="node-key">${key}</dt>
                                <dd>
                                    ${hashes.map((hash) => html`
                                        <${SubstrateButton.TAG}
                                            key=${hash}
                                            class="hash-link head-hash"
                                            title=${hash}
                                            onClick=${() => selectHash(hash)}
                                        >
                                            ${shortHash(hash)}
                                        <//>
                                    `)}
                                </dd>
                            </dl>
                        `)}
                    </section>
                </section>

                <section class="nodes-panel">
                    ${selectedNode
                        ? html`
                            <pre class="selected-node-json">
                                ${JSON.stringify(selectedNode, null, 2)}
                            </pre>
                        `
                        : html`
                            <section class="nodes-section">
                                <h2>All nodes</h2>
                                ${nodes.value.length === 0 && html`
                                    <p class="empty-state">
                                        No documents yet. Create one above.
                                    </p>
                                `}
                                ${nodes.value.map((node) => html`
                                    <pre class="node-json" key=${node.hash}>
                                        ${JSON.stringify(node, null, 2)}
                                    </pre>
                                `)}
                            </section>
                        `}
                </section>
            </div>
        </div>
    `
}

render(html`<${App} />`, document.getElementById('root')!)
