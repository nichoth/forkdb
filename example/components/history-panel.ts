import { html } from 'htm/preact'
import { type FunctionComponent } from 'preact'
import { useEffect } from 'preact/hooks'
import { useSignal } from '@preact/signals'
import { type NodeEntry } from '../../src/browser.js'
import { forkdb } from '../index.js'

export const HistoryPanel:FunctionComponent<{
    hash:string
    onSelect:(hash:string) => void
}> = function HistoryPanel ({ hash, onSelect }) {
    const history = useSignal<Array<NodeEntry>>([])

    useEffect(() => {
        let cancelled = false
        forkdb.history(hash).then((entries) => {
            if (cancelled) return
            history.value = entries
        }).catch(() => {
            if (cancelled) return
            history.value = []
        })
        return () => { cancelled = true }
    }, [hash])

    if (history.value.length === 0) return null

    return html`
        <aside class="history-panel">
            <h3>History from ${hash}</h3>
            <ol>
                ${history.value.map((entry) => html`
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
