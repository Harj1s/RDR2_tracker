import { expect, test } from 'vitest'
import { animalCategory } from './compendium/animals'

test('animal IDs are sequential', () => {
    expect(animalCategory.items.map(({ id }) => id)).toEqual(
        Array.from({ length: 178 }, (_, index) => `an-${index + 1}`),
    )
})

test('animal tracking tasks and clean-kill guidance are stored in details', () => {
    const alligator = animalCategory.items[0]

    expect(alligator.details?.cleanKillWeapons).toEqual(['Rifle'])
    expect(alligator.details?.objectives?.map(({ text }) => text)).toEqual([
        'Killed',
        'Tracked',
        'Studied',
        'Skinned',
    ])
})

test('every animal has exactly one skinned or collected task', () => {
    for (const animal of animalCategory.items) {
        const objectives = animal.details?.objectives ?? []
        const finalTasks = objectives.filter(({ text }) =>
            text === 'Skinned' || text === 'Collected',
        )

        expect(finalTasks).toHaveLength(1)
    }

    expect(animalCategory.items[3].details?.objectives?.map(({ text }) => text)).toEqual([
        'Killed',
        'Studied',
        'Collected',
    ])
})

test('animal tracking is optional and the category has 178 unique IDs', () => {
    expect(animalCategory.items).toHaveLength(178)
    expect(new Set(animalCategory.items.map(({ id }) => id)).size).toBe(178)
    expect(animalCategory.items[3].details?.objectives?.some(({ text }) => text === 'Tracked')).toBe(false)
})
