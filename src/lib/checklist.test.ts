import { describe, expect, test } from 'vitest'
import {
    chapterStatus,
    filterItems,
    statusOf,
    totalOf,
} from './checklist'
import type { TrackedGroup, TrackedItem } from '../data/types'

// ---------- tiny builders so each test stays short ------------

function item(id: string, extra: Partial<TrackedItem> = {}): TrackedItem {
    return { id, name: id.toUpperCase(), subtitle: '', ...extra }
}

function group(id: string, items: TrackedItem[], extra: Partial<TrackedGroup> = {}): TrackedGroup {
    return { id, name: id, items, ...extra }
}

const none = new Set<string>()

// ---------- totalOf ----------

describe('totalOf', () => {
    test('uses the item count when totalInGame is not set', () => {
        const g = group('g', [item('a'), item('b'), item('c')])
        expect(totalOf(g)).toBe(3)
    })

    test('uses totalInGame when it is set', () => {
        const g = group('g', [item('a'), item('b'), item('c')], { totalInGame: 30 })
        expect(totalOf(g)).toBe(30)
    })

    test('an empty group without totalInGame has a total of 0', () => {
        expect(totalOf(group('g', []))).toBe(0)
    })

    test('totalInGame of 0 is respected, not treated as missing', () => {
        const g = group('g', [item('a')], { totalInGame: 0 })
        expect(totalOf(g)).toBe(0)
    })
})

// ---------- statusOf ----------

describe('statusOf', () => {
    const g = group('g', [
        item('a'),
        item('b'),
        item('c', { lockedUntil: 'Epilogue' }),
        item('d'),
    ])
    const [a, b, c, d] = g.items

    test('an item in the done set is "done"', () => {
        expect(statusOf(a, g, new Set(['a']))).toBe('done')
    })

    test('an item with lockedUntil is "locked"', () => {
        expect(statusOf(c, g, none)).toBe('locked')
    })

    test('done wins over locked', () => {
        expect(statusOf(c, g, new Set(['c']))).toBe('done')
    })

    test('with nothing done, the first item is "next"', () => {
        expect(statusOf(a, g, none)).toBe('next')
    })

    test('only the first open item is "next, the rest are "todo"', () => {
        expect(statusOf(b, g, none)).toBe('todo')
        expect(statusOf(d, g, none)).toBe('todo')
    })

    test('"next" moves along as items are ticked', () => {
        const doneA = new Set(['a'])
        expect(statusOf(a, g, doneA)).toBe('done')
        expect(statusOf(b, g, doneA)).toBe('next')
    })

    test('"next" skips over a locked item', () => {
        const doneAB = new Set(['a', 'b'])
        expect(statusOf(c, g, doneAB)).toBe('locked')
        expect(statusOf(d, g, doneAB)).toBe('next')
    })

    test('nothing is "next" when every open item is done', () => {
        const all = new Set(['a', 'b', 'd'])
        expect(statusOf(a, g, all)).toBe('done')
        expect(statusOf(d, g, all)).toBe('done')
        expect(statusOf(c, g, all)).toBe('locked')
    })

    test('items without lockedUntil are never "locked"', () => {
        // Guards against comparing with null instead of undefined
        expect(statusOf(a, g, none)).not.toBe('locked')
    })
})

// ---------- chapterStatus ----------

describe('chapterStatus', () => {
    const chapters = [
        group('c1', [item('a'), item('b')]),
        group('c2', [item('c'), item('d')]),
        group('c3', [item('e')]),
    ]

    test('with nothing done: chapter 1 is "todo", the rest are "locked"', () => {
        expect(chapterStatus(chapters, 0, none)).toBe('todo')
        expect(chapterStatus(chapters, 1, none)).toBe('locked')
        expect(chapterStatus(chapters, 2, none)).toBe('locked')
    })

    test('a chapter with every item done is "complete"', () => {
        expect(chapterStatus(chapters, 0, new Set(['a', 'b']))).toBe('complete')
    })

    test('a chapter with some items done is "inProgress"', () => {
        expect(chapterStatus(chapters, 0, new Set(['a']))).toBe('inProgress')
    })

    test('the next chapter unlocks when the previous on is complete', () => {
        expect(chapterStatus(chapters, 1, new Set(['a', 'b']))).toBe('todo')
    })

    test('the next chapter stays locked while the previous one is partial', () => {
        expect(chapterStatus(chapters, 1, new Set(['a']))).toBe('locked')
    })

    test('progress beats lock: ticking out of order shows "inProgress"', () => {
        expect(chapterStatus(chapters, 1, new Set(['c']))).toBe('inProgress')
    })

    test('chapter 3 stays locked when only chapter 1 is complete', () => {
        const done = new Set(['a', 'b'])
        expect(chapterStatus(chapters, 2, done)).toBe('locked')
    })

    test('chapter 3 unlocks once chapter 2 is complete', () => {
        const done = new Set(['a', 'b', 'c', 'd'])
        expect(chapterStatus(chapters, 2, done)).toBe('todo')
    })

    test('an empty chapter is not "complete"', () => {
        const withEmpty = [group('c1', [item('a')]), group('c2', [])]
        expect(chapterStatus(withEmpty, 1, none)).not.toBe('complete')
    })

    test('an empty chapter does not unlock the one after it', () => {
        const withEmpty = [group('c1', []), group('c2', [item('a')])]
        expect(chapterStatus(withEmpty, 1, none)).toBe('locked')
    })

    test('a single-chapter list works', () => {
        const single = [group('only', [item('a')])]
        expect(chapterStatus(single, 0, none)).toBe('todo')
        expect(chapterStatus(single, 0, new Set(['a']))).toBe('complete')
    })
})

// ---------- filterItems ----------

describe('filterItems', () => {
    const items = [
        item('bone-1', {
            name: 'Heartlands cliff bone',
            subtitle: 'South of the oil derrick',
            region: 'New Hanover',
        }),
        item('bone-2', {
            name: "Beryl's Dream overlook",
            subtitle: 'Near Mount Shann',
            region: 'West Elizabeth',
        }),
        item('m1', { name: 'The Gilded Cage', subtitle: 'Hosea Matthews' }), // no region
    ]
    const ids = (list: TrackedItem[]) => list.map((i) => i.id)

    test('empty search and "all" returns everything', () => {
        expect(ids(filterItems(items, '', 'all', none))).toEqual(['bone-1', 'bone-2', 'm1'])
    })

    test('matches on name', () => {
        expect(ids(filterItems(items, 'cliff', 'all', none))).toEqual(['bone-1'])
    })
    
    test('ignores upper and lower case', () => {
        expect(ids(filterItems(items, 'CLIFF', 'all', none))).toEqual(['bone-1'])
    })

    test('matches on subtitle', () => {
        expect(ids(filterItems(items, 'hosea', 'all', none))).toEqual(['m1'])
    })

    test('matches on region', () => {
        expect(ids(filterItems(items, 'west eliz', 'all', none))).toEqual(['bone-2'])
    })

    test('trims spaces around the search text', () => {
        expect(ids(filterItems(items, '  cliff  ', 'all', none))).toEqual(['bone-1'])
    })

    test('a search with no matches returns an empty list', () => {
        expect((filterItems(items, 'zzzz', 'all', none))).toEqual([])
    })

    test('items without a region do not crash the search', () => {
        expect(() => filterItems(items, 'anything', 'all', none)).not.toThrow()
    })

    test('"todo" keeps only items that are not done', () => {
        const done = new Set(['bone-1'])
        expect(ids(filterItems(items, '', 'todo', done))).toEqual(['bone-2', 'm1'])
    })

    test('"done" keeps only items that are done', () => {
        const done = new Set(['bone-1'])
        expect(ids(filterItems(items, '', 'done', done))).toEqual(['bone-1'])
    })

    test('search and mode combine', () => {
        const done = new Set(['bone-1'])
        expect(ids(filterItems(items, 'bone', 'todo', done))).toEqual([])
        expect(ids(filterItems(items, 'bone', 'done', done))).toEqual(['bone-1'])
    })

    test('does not change the list it was given', () => {
        const copy = [...items]
        filterItems(items, 'cliff', 'done', none)
        expect(items).toEqual(copy)
    })
})