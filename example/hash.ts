export function shortHash (hash:string, length = 8):string {
    if (hash.length <= length) return hash
    return hash.slice(0, length)
}
