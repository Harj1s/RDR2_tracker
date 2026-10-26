import { describe, expect, test } from 'vitest'
import {
    countDone,
    countTotal,
    currentGroupName,
    nextMilestone,
    percentDone,
    totalCompletion,
} from './completion'
import type { CompletionRing } from '../data/progress'
import type { TrackedGroup, TrackedItem } from '../data/types'

function item(id: string): TrackedItem {
    return { id, name: id, subtitle: ''}
}

function group(id: string, ids: string[]): TrackedGroup {
    return { id, name: `Group ${id}`, items: ids.map(item) }
}

const groups = [group('1', ['a', 'b']), group('2', ['c', 'd', 'e']), group('3', ['f'])]

describe('countTotal / countDone', () => {
    test('countTotal adds up the items in every group', () => {
        expect(countTotal(groups)).toBe(6)
    })

    test('countTotal uses totalInGame when it is set', () => {
        const groupsWithInGameTotal = [
            { ...groups[0], totalInGame: 10 },
            groups[1],
            groups[2],
        ]
        expect(countTotal(groupsWithInGameTotal)).toBe(14)
    })

    test('countDone counts only ids that are in the done set', () => {
        expect(countDone(groups, new Set(['a', 'c', 'e']))).toBe(3)
    })

    test('countDone ignores ids that belong to no group', () => {
        expect(countDone(groups, new Set(['a', 'zzz']))).toBe(1)
    })

    test('counts for an empty list of groups are 0', () => {
        expect(countTotal([])).toBe(0)
        expect(countDone([], new Set(['a']))).toBe(0)
    })
})

describe('percentDone', () => {
    test('rounds to a whole number', () => {
        expect(percentDone(groups, new Set(['a']))).toBe(17)
    })

    test('100 when everything is done', () => {
        expect(percentDone(groups, new Set(['a', 'b', 'c', 'd', 'e', 'f']))).toBe(100)
    })

    test('0 when nothing is done', () => {
        expect(percentDone(groups, new Set())).toBe(0)
    })

    test('0, not NaN, when there are no items at all', () => {
        expect(percentDone([], new Set())).toBe(0)
    })
})

describe('currentGroupName', () => {
    test('"Not started" when nothing is done', () => {
        expect(currentGroupName(groups, new Set())).toBe('Not started')
    })

    test('the only group with progress', () => {
        expect(currentGroupName(groups, new Set(['a']))).toBe('Group 1')
    })

    test('the latest group that has progress', () => {
        expect(currentGroupName(groups, new Set(['a', 'c']))).toBe('Group 2')
    })
})

describe('totalCompletion', () => {
    const ring = (percent: number): CompletionRing => ({
        id: String(percent),
        label: 'x',
        percent,
        color: 'red',
    })

    test('averages the rings to one decimal', () => {
        // (72 + 48 + 66 + 58 + 70) / 5 = 62.8
        expect(totalCompletion([72, 48, 66, 58, 70].map(ring))).toBe(62.8)
    })

    test('rounds to one decimal place', () => {
        // /1 + 2 + 2) / 3 = 1.666...
        expect(totalCompletion([1, 2, 2].map(ring))).toBe(1.7)
    })

    test('0 for an empty list', () => {
        expect(totalCompletion([])).toBe(0)
    })
})

describe('nextMilestone', () => {
    test('the next multiple of 10 above the total', () => {
        expect(nextMilestone(63.4)).toBe(70)
        expect(nextMilestone(0)).toBe(10)
    })

    test('exactly on a milestone moves to the following one', () => {
        expect(nextMilestone(70)).toBe(80)
    })

    test('never goes above 100', () => {
        expect(nextMilestone(99.9)).toBe(100)
        expect(nextMilestone(100)).toBe(100)
    })
})