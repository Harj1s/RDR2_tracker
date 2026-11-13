import { describe, expect, test } from 'vitest'
import { cigaretteCardCategory } from './collectibles'

describe('cigarette card placeholders', () => {
    test('organizes 144 card slots into 12 collections', () => {
        expect(cigaretteCardCategory.items).toHaveLength(12)
        expect(cigaretteCardCategory.items.every((collection) => collection.details?.objectives?.length === 12)).toBe(true)
    })

    test('uses unique ids for each card slot', () => {
        const ids = cigaretteCardCategory.items.flatMap((collection) =>
            collection.details?.objectives?.map((card) => card.id) ?? [],
        )
        expect(new Set(ids).size).toBe(144)
        expect(ids.every((id) => id.startsWith('cigarette-card-set-'))).toBe(true)
    })
})
