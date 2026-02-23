import { html } from 'htm/preact'
import { type FunctionComponent } from 'preact'
import { useSignal } from '@preact/signals'
import { useCallback } from 'preact/hooks'
import { type Meta } from '../../src/browser.js'
import { forkdb } from '../index.js'

function normalizeHashToken (value:string):string {
    return value.trim().toLowerCase().replace(/[^0-9a-f]/g, '')
}

async function resolvePrevHashes (value:string):Promise<string[]> {
    const rawTokens = value.split(',')
    const tokens = rawTokens
        .map(normalizeHashToken)
        .filter((token) => token.length > 0)

    if (tokens.length === 0) return []

    const nodes = await forkdb.list()
    const knownHashes = Array.from(new Set(nodes.map((node) => node.hash.toLowerCase())))
    const knownSet = new Set(knownHashes)

    return tokens.map((token) => {
        if (knownSet.has(token)) {
            return token
        }

        const matches = knownHashes.filter((hash) => hash.startsWith(token))
        if (matches.length === 1) {
            return matches[0]!
        }

        return token
    })
}

export const CreateForm:FunctionComponent<{
    onCreated:()=>void|Promise<void>
}> = function CreateForm ({ onCreated }) {
    const key = useSignal('my-doc')
    const body = useSignal('')
    const prevHash = useSignal('')

    const submit = useCallback(async (ev:Event) => {
        ev.preventDefault()
        const meta:Meta = { key: key.value }
        if (prevHash.value.trim()) {
            meta.prev = await resolvePrevHashes(prevHash.value)
        }
        await forkdb.put(meta, body.value)
        body.value = ''
        prevHash.value = ''
        await onCreated()
    }, [onCreated])

    return html`
        <form class="create-form" onSubmit=${submit}>
            <h2>Add a node</h2>

            <label>
                <span>Key</span>
                <input
                    type="text"
                    name="key"
                    value=${key.value}
                    onInput=${(e:Event) => {
                        key.value = (e.target as HTMLInputElement).value
                    }}
                    required
                />
            </label>

            <label>
                <span>Body</span>
                <textarea
                    value=${body.value}
                    rows=${3}
                    onInput=${(e:Event) => {
                        body.value = (e.target as HTMLTextAreaElement).value
                    }}
                />
            </label>

            <label>
                <span>Prev hash(es)</span>
                <input
                    type="text"
                    value=${prevHash.value}
                    placeholder="comma-separated hashes"
                    onInput=${(e:Event) => {
                        prevHash.value = (e.target as HTMLInputElement).value
                    }}
                />
            </label>

            <substrate-button class="create-submit" type="submit">
                Create
            </substrate-button>
        </form>
    `
}
