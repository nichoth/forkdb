export function defined<T> (...values: Array<T | undefined>): T | undefined {
    for (const value of values) {
        if (typeof value !== 'undefined') {
            return value
        }
    }

    return undefined
}

export function hasOwn (value: unknown, key: PropertyKey): boolean {
    if (value === null || typeof value !== 'object') {
        return false
    }

    return Object.prototype.hasOwnProperty.call(value, key)
}

export function uniq<T> (values: T[]): T[] {
    return [...new Set(values)]
}

type RangeTransform = (input: unknown) => unknown
type RangeDefaults = Record<string, unknown | RangeTransform>

export function wrapRangeOptions<T extends Record<string, unknown>> (
    options: T | undefined,
    defaults: RangeDefaults
): T & Record<string, unknown> {
    const opts = (options ?? {}) as T
    const wrapped: Record<string, unknown> = { ...opts }

    for (const [key, defaultValue] of Object.entries(defaults)) {
        const currentValue = wrapped[key]
        if (typeof defaultValue === 'function') {
            wrapped[key] = (defaultValue as RangeTransform)(currentValue)
        } else if (typeof currentValue === 'undefined') {
            wrapped[key] = defaultValue
        }
    }

    return wrapped as T & Record<string, unknown>
}
