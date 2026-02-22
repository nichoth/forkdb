import type { Meta, LinksEntry } from '../src/browser.js'

export { LinksEntry }

export interface NodeDetail {
    hash:string
    meta:Meta
    body:string
    forwardLinks:LinksEntry[]
}

