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

    test('marks all cards with landscape artwork as landscape', () => {
        const landscapeSetIds = [
            'cigarette-card-set-7',
            'cigarette-card-set-8',
            'cigarette-card-set-10',
            'cigarette-card-set-11',
        ]
        const landscapeCards = cigaretteCardCategory.items
            .filter((collection) => landscapeSetIds.includes(collection.id))
            .flatMap((collection) => collection.details?.objectives ?? [])

        expect(landscapeCards).toHaveLength(48)
        expect(landscapeCards.every((card) => card.orientation === 'landscape')).toBe(true)
    })

    test('leaves collection details blank with editable card labels', () => {
        const expectedLabels = Array.from({ length: 12 }, (_, index) => `Card ${index + 1}`)

        for (const collection of cigaretteCardCategory.items) {
            expect(collection.description).toBe('')
            expect(collection.details?.region).toBe('')
            expect(collection.details?.objectives?.map((card) => card.text)).toEqual(expectedLabels)
        }
    })

    test('assigns the Vistas cover, unrevealed card back, and Card 12 artwork', () => {
        const vistas = cigaretteCardCategory.items.find((collection) => collection.id === 'cigarette-card-set-3')
        const card12 = vistas?.details?.objectives?.[11]

        expect(vistas?.image).toMatch(/CIG_CARD_LND_OVERVIEW/)
        expect(vistas?.details?.unfoundCardImage).toMatch(/back_vistas_of_america/)
        expect(card12?.foundImage).toMatch(/12_Annesburg/)
    })
})
