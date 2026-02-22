import { html } from 'htm/preact'
import { type FunctionComponent } from 'preact'
import { type NodeDetail } from '../state.js'

export const NodeCard:FunctionComponent<{
    node:NodeDetail,
    onSelect:(hash:string) => void
}> = function NodeCard (props) {
    const { node, onSelect } = props
    const prev = node.meta.prev ?? []

    return html`
        <article class="node-card">
            <header>
                <span class="node-key">${node.meta.key}</span>
                <code class="node-hash" title=${node.hash}>${node.hash}</code>
            </header>

            ${node.body ? html`<p class="node-body">${node.body}</p>` : null}

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
                    ${node.forwardLinks.map((l) => html`
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
