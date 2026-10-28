import { describe, expect, test } from 'vitest'
import {
    buildUnlocksMap,
    findRequirementProblems,
    isLocked,
    needsAnyOf,
    statusOf,
} from './checklist'
import type { TrackedGroup, TrackedItem } from '../data/types'

function item(
    id: string,
    rules: Pick<TrackedItem, 'requires' | 'requiresAny'> = {},
): TrackedItem {
    return { id, name: id.toUpperCase(), subtitle: '', ...rules}
}

function group(id: string, items: TrackedItem[]): TrackedGroup {
    return { id, name: id, items}
}

const none = new Set<string>()

// ---------- needsAnyOf ----------

describe('needsAnyOf', () => {
    const x = item('x', { requiresAny: ['a', 'b'] })

    test('nothing needed when the item has no requiresAny', () => {
        expect(needsAnyOf(item('y'), none)).toEqual([])
    })

    test('returns all the choices while none of them is done', () => {
        expect(needsAnyOf(x, none)).toEqual(['a', 'b'])
    })

    test('empty as soon as ONE choice is done', () => {
        expect(needsAnyOf(x, new Set(['a']))).toEqual([])
        expect(needsAnyOf(x, new Set(['b']))).toEqual([])
    })

    test('empty when several choices are done', () => {
        expect(needsAnyOf(x, new Set(['a', 'b']))).toEqual([])
    })

    test('an empty requiresAny list is no requirement at all', () => {
        expect(needsAnyOf(item('y', { requiresAny: [] }), none)).toEqual([])
    })
})

// ---------- isLocked with requiresAny ----------

describe('isLocked with requiresAny', () => {
    test('locked until one of the choices is done', () => {
        const x = item('x', { requiresAny: ['a', 'b'] })
        expect(isLocked(x, none)).toBe(true)
        expect(isLocked(x, new Set(['b']))).toBe(false)
    })

    test('an empty requiresAny does not lock', () => {
        expect(isLocked(item('x', { requiresAny: [] }), none)).toBe(false)
    })

    test('requires AND requiresAny: both rules must be satisfied', () => {
        const x = item('x', { requires: ['a'], requiresAny: ['b', 'c'] })
        expect(isLocked(x, new Set(['a']))).toBe(true)
        expect(isLocked(x, new Set(['b']))).toBe(true)
        expect(isLocked(x, new Set(['a', 'c']))).toBe(false)
    })
})

// ---------- statusOf ----------

describe('statusOf with requiresAny', () => {
    const g = group('g', [
        item('a'),
        item('b'),
        item('c', { requiresAny: ['a', 'b']}),
    ])

    test('locked until either choice is done', () => {
        expect(statusOf(g.items[2], g, none)).toBe('locked')
        expect(statusOf(g.items[2], g, new Set(['b']))).toBe('todo')
    })

    test('an unlocked item can be "next" when it is the first open one', () => {
        const h = group('h', [item('x'), item('y', { requiresAny: ['x', 'z'] })])
        expect(statusOf(h.items[1], h, new Set(['x']))).toBe('next')
    })
})

// ---------- buildUnlocksMap ----------

describe('buildUnlocksMap with requiresAny', () => {
    test('the item shows up under every one of its choices', () => {
        const groups = [group('g', [item('a'), item('b'), item('c', { requiresAny: ['a', 'b'] })])]
        const map = buildUnlocksMap(groups)
        expect(map.get('a')?.map((i: TrackedItem) => i.id)).toEqual(['c'])
        expect(map.get('b')?.map((i: TrackedItem) => i.id)).toEqual(['c'])
    })

    test('an item listed in both requires and requiresAny appears once per id', () => {
        const groups = [group('g', [item('a'), item('b'), item('c', { requires: ['a'], requiresAny: ['b'] })])]
        const map = buildUnlocksMap(groups)
        expect(map.get('a')?.map((i: TrackedItem) => i.id)).toEqual(['c'])
        expect(map.get('b')?.map((i: TrackedItem) => i.id)).toEqual(['c'])
    })
})

// ---------- findRequirementProblems ----------

describe('findRequirementProblems with requiresAny', () => {
    const problems = (items: TrackedItem[]) => findRequirementProblems([group('g', items)])

    test('clean data has no problem', () => {
        expect(problems([item('a'), item('b'), item('c', { requiresAny: ['a', 'b'] })])).toEqual([])
    })

    test('flags an unknown id inside requiresAny', () => {
        const found = problems([item('a'), item('c', { requiresAny: ['a', 'zzz'] })])
        expect(found.join(' ')).toContain('zzz')
    })

    test('flags a cycle that goes through requiresAny', () => {
        const data = [item('a', { requiresAny: ['b'] }), item('b', { requires: ['a'] })]
        expect(problems(data).length).toBeGreaterThan(0)
    })
})