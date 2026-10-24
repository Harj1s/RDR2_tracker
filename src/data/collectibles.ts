import type { TrackedGroup, TrackedItem } from './types.ts'

// Curated demo sample, not a full game database

export type Collectible = TrackedItem
export type CollectibleCategory = TrackedGroup

export const collectibleCategories: CollectibleCategory[] = [
    {
        id: 'bones',
        name: 'Dinosaur bones',
        color: 'var(--gold)',
        items: [
            { id: 'bone-1', name: 'Heartlands cliff bone', region: 'New Hanover' },
            { id: 'bone-2', name: 'Heartlands oil field bone', region: 'New Hanover' },
            { id: 'bone-3', name: 'Cumberland riverbank bone', region: 'New Hanover' },
            { id: 'bone-4', name: 'Roanoke Ridge bone', region: 'New Hanover' },
            { id: 'bone-5', name: 'Grizzlies hillside bone', region: 'Ambarino' },
            { id: 'bone-6', name: 'Bluewater Marsh bone', region: 'Lemoyne' },
        ],
    },
    {
        id: 'carvings',
        name: 'Rock carvings',
        color: 'var(--slate)',
        items: [
            { id: 'carving-1', name: 'Mount Shann carving', region: 'Ambarino' },
            { id: 'carving-2', name: 'Cumberland Forest carving', region: 'New Hanover' },
            { id: 'carving-3', name: 'Big Valley carving', region: 'West Elizabeth' },
            { id: 'carving-4', name: 'Scarlett Meadows carving', region: 'Lemoyne' },
        ],
    },
    {
        id: 'dreamcatchers',
        name: 'Dreamcatchers',
        color: 'var(--sage)',
        items: [
            { id: 'dreamcatcher-1', name: 'Tall Trees dreamcatcher', region: 'West Elizabeth' },
            { id: 'dreamcatcher-2', name: 'Big Valley dreamcatcher', region: 'West Elizabeth' },
            { id: 'dreamcatcher-3', name: 'Cumberland Forest dreamcatcher', region: 'New Hanover' },
            { id: 'dreamcatcher-4', name: 'Scarlett Meadows dreamcatcher', region: 'Lemoyne' },
            { id: 'dreamcatcher-5', name: 'Grizzlies dreamcatcher', region: 'Ambarino' },
        ],
    },
]