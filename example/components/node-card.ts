import { html } from 'htm/preact'
import { type FunctionComponent } from 'preact'
import { type NodeDetail } from '../state.js'
import { shortHash } from '../hash.js'

export const NodeCard:FunctionComponent<{
    node:NodeDetail,
    onSelect:(hash:string) => void
}> = function NodeCard (props) {
    const { node, onSelect } = props
    const prev = node.meta.prev ?? []

    return html`
        <div class="node-card">
            <header>
                <span class="node-key">${node.meta.key}</span>
                <code class="node-hash" title=${node.hash}>${shortHash(node.hash)}</code>
            </header>

            ${node.body ? html`<p class="node-body">${node.body}</p>` : null}

            ${prev.length > 0 && html`
                <div class="node-links">
                    <span class="link-label">prev</span>
                    ${prev.map((h:string) => html`
                        <substrate-button
                            key=${h}
                            class="hash-link"
                            title=${h}
                            onClick=${() => onSelect(h)}
                        >
                            ${shortHash(h)}
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
                            title=${l.hash}
                            onClick=${() => onSelect(l.hash)}
                        >
                            ${shortHash(l.hash)}
                        </substrate-button>
                    `)}
                </div>
            `}
        </div>
    `
}
