import { describe, expect, test } from 'vitest'
import {
    buildUnlocksMap,
    findRequirementProblems,
    isLocked,
    missingRequirements,
    statusOf,
} from './checklist'
import type { TrackedGroup, TrackedItem } from '../data/types'

function item(id: string, requires?: string[], extra: Partial<TrackedItem> ={}): TrackedItem {
    const { details, ...itemFields } = extra
    return {
        id,
        name: id.toUpperCase(),
        subtitle: '',
        ...itemFields,
        details: {
            ...details,
            ...(requires ? { requires } : {}),
        },
    }
}

function group(id: string, items: TrackedItem[]): TrackedGroup {
    return { id, name: id, items }
}

const none = new Set<string>()

// ---------- missingRequirements / isLocked ----------

describe('missingRequirements', () => {
    const c = item('c', ['a', 'b'])

    test('an item with no requires has nothing missing', () => {
        expect(missingRequirements(item('x'), none)).toEqual([])
    })

    test('lists every requirement that is not done yet', () => {
        expect(missingRequirements(c, none)).toEqual(['a', 'b'])
    })

    test('drops requirements that are done', () => {
        expect(missingRequirements(c, new Set(['a']))).toEqual(['b'])
    })

    test('empty once every requirement is done', () => {
        expect(missingRequirements(c, new Set(['a', 'b']))).toEqual([])
    })

    test('an empty requires list means nothing is missing', () => {
        expect(missingRequirements(item('x', []), none)).toEqual([])
    })
})

describe('isLocked', () => {
    test('not locked without requirements', () => {
        expect(isLocked(item('x'), none)).toBe(false)
    })

    test('locked while any requirement is missing (need ALL of them)', () => {
        const c = item('c', ['a', 'b'])
        expect(isLocked(c, none)).toBe(true)
        expect(isLocked(c, new Set(['a']))).toBe(true)
        expect(isLocked(c, new Set(['a', 'b']))).toBe(false)
    })

})

// ---------- statusOf with requires ----------

describe('statusOf with requires', () => {
    const g = group('g', [
        item('a'),
        item('b', ['a']),
        item('c', ['a', 'b']),
    ])
    const [, secondItem, dependentItem] = g.items

    test('an item with missing requirements is "locked"', () => {
        expect(statusOf(secondItem, none)).toBe('locked')
        expect(statusOf(dependentItem, none)).toBe('locked')
    })
    
    test('done wins over locked', () => {
        expect(statusOf(dependentItem, new Set([dependentItem.id]))).toBe('done')
    })

    test('a requirement in another group counts too', () => {
        const other = group('other', [item('z', ['a'])])
        expect(statusOf(other.items[0], none)).toBe('locked')
    })
})

// ---------- buildUnlocksMap ----------

describe('buildUnlocksMap', () => {
    const ids = (list: TrackedItem[] | undefined) => (list ?? []).map((i) => i.id)

    test('one item can unlock several', () => {
        const groups = [group('g', [item('a'), item('b', ['a']), item('c', ['a'])])]
        expect(ids(buildUnlocksMap(groups).get('a'))).toEqual(['b', 'c'])
    })

    test('an item needing several shows up under each of them', () => {
        const groups = [group('g', [item('a'), item('b'), item('c', ['a', 'b'])])]
        const map = buildUnlocksMap(groups)
        expect(ids(map.get('a'))).toEqual(['c'])
        expect(ids(map.get('b'))).toEqual(['c'])
    })

    test('items that unlock nothing have no entry', () => {
        const groups = [group('g', [item('a'), item('b', ['a'])])]
        expect(buildUnlocksMap(groups).get('b')).toBeUndefined()
    })

    test('works across groups', () => {
        const groups = [group('g1', [item('a')]), group('g2', [item('b', ['a'])])]
        expect(ids(buildUnlocksMap(groups).get('a'))).toEqual(['b'])
    })

    test('no requirements anywhere gives an empty map', () => {
        expect(buildUnlocksMap([group('g', [item('a')])]).size).toBe(0)
    })
})

// ---------- findRequirementProblems --------

describe('findRequirementProblems', () => {
    const problems = (items: TrackedItem[]) => findRequirementProblems([group('g', items)])

    test('clean data has no problems', () => {
        expect(problems([item('a'), item('b', ['a']), item('c', ['a', 'b'])])).toEqual([])
    })

    test('two items sharing a prerequisite (a diamond) is fine', () => {
        const data = [item('a'), item('b', ['a']), item('c', ['a']), item('d', ['b', 'c'])]
        expect(problems(data)).toEqual([])
    })

    test('flags a dublicate id', () => {
        expect(problems([item('a'), item('a')]).length).toBeGreaterThan(0)
    })

    test('flags a requirement that does not exist (a typo)', () => {
        const found = problems([item('a'), item('b', ['zzz'])])
        expect(found.length).toBeGreaterThan(0)
        expect(found.join(' ')).toContain('zzz')
    })

    test('flags an item that requires itself', () => {
        expect(problems([item('a', ['a'])]).length).toBeGreaterThan(0)
    })

    test('flags a cycle of two', () => {
        expect(problems([item('a', ['b']), item('b', ['a'])]).length).toBeGreaterThan(0)
    })

    test('flags a longer cycle', () => {
        const data = [item('a', ['c']), item('b', ['a']), item('c', ['b'])]
        expect(problems(data).length).toBeGreaterThan(0)
    })

    test('sees problems that span groups', () => {
        const groups = [group('c1', [item('a', ['b'])]), group('g2', [item('b', ['a'])])]
        expect(findRequirementProblems(groups).length).toBeGreaterThan(0)
    })
})