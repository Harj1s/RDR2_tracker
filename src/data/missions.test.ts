import { expect, test } from 'vitest'
import { missionChapters } from './missions'
import { findRequirementProblems } from '../lib/checklist'

test('mission data has no duplicate ids, bad requirements or cycles', () => {
    expect(findRequirementProblems(missionChapters)).toEqual([])
})