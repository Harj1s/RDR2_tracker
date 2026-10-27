import { describe, expect, test } from 'vitest'
import { currentGroupIndex, goldEarned } from './checklist'
import type { TrackedGroup, TrackedItem } from '../data/types'

function item(id: string, goldIds: string[] = []): TrackedItem {
    return {
        id,
        name: id,
        subtitle: '',
        gold: goldIds.map((goldId) => ({ id: goldId, text: goldId })),
    }
}

function group(id: string, items: TrackedItem[]): TrackedGroup {
    return {
        id,
        name: id,
        items
    }
}

const none = new Set<string>()

// ---------- goldEarned ----------

describe('goldEarned', () => {
    const groups = [
        group('c1', [item('a', ['a:g1', 'a:g2']), item('b', ['b:g1'])]),
        group('c2', [item('c', ['c:g1'])]),
    ]

    test('0 when nothing is done', () => {
        expect(goldEarned(groups, none)).toBe(0)
    })

    test('counts every gold objective that is ticked', () => {
        expect(goldEarned(groups, new Set(['a:g1', 'b:g1']))).toBe(2)
    })

    test('counts across several groups', () => {
        expect(goldEarned(groups, new Set(['a:g2', 'c:g1']))).toBe(2)
    })

    test('mission ids in the done set are not gold objective', () => {
        expect(goldEarned(groups, new Set(['a', 'b', 'c']))).toBe(0)
    })

    test('ids that belong to no objectives are ignored', () => {
        expect(goldEarned(groups, new Set(['zzz', 'a:g1']))).toBe(1)
    })

    test('items without a gold list do not crash it', () => {
        const plain = [group('c1', [{ id: 'x', name: 'X', subtitle: ''}])]
        expect(goldEarned(plain, new Set(['x']))).toBe(0)
    })

    test('0 for an empty list of groups', () => {
        expect(goldEarned([], none)).toBe(0)
    })
})

// ---------- currentGroupIndex ----------

describe('currentGroupIndex', () => {
    const chapters = [
        group('c1', [item('a'), item('b')]),
        group('c2', [item('c'), item('d')]),
        group('c3', [item('e')]),
    ]

    test('the first chapter when nothing is done', () => {
        expect(currentGroupIndex(chapters, none)).toBe(0)
    })

    test('still the first chapter while it is partly done', () => {
        expect(currentGroupIndex(chapters, new Set(['a']))).toBe(0)
    })

    test('moves to the next chapter once one is complete', () => {
        expect(currentGroupIndex(chapters, new Set(['a', 'b']))).toBe(1)
    })

    test('the chapter in progress, with earlier ones complete', () => {
        expect(currentGroupIndex(chapters, new Set(['a', 'b', 'c']))).toBe(1)
    })

    test('the last chapter when every chapter is complete', () => {
        const all = new Set(['a', 'b', 'c', 'd', 'e'])
        expect(currentGroupIndex(chapters, all)).toBe(2)
    })

    test('ticking out of order does not skip an unfinished chapter', () => {
        // Chapter 2 has progress, but chapter 1 is not finished
        expect(currentGroupIndex(chapters, new Set(['c']))).toBe(0)
    })

    test('0 for an empty list of groups', () => {
        expect(currentGroupIndex([], none)).toBe(0)
    })
})