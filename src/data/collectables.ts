import type { TrackedGroup, TrackedItem } from './types.ts'

// Curated demo sample, not a full game database

export type Collectable = TrackedItem
export type CollectableCategory = TrackedGroup

export const collectableCategories: CollectableCategory[] = [
    {
        id: 'bones',
        name: 'Dinosaur bones',
        color: 'var(--gold)',
        items: [
            {
                id: 'bone-1',
                name: 'Heartlands cliff bone',
                subtitle: '',
                region: 'New Hanover'
            },
            {
                id: 'bone-2',
                name: 'Heartlands oil field bone',
                subtitle: '',
                region: 'New Hanover'
            },
            {
                id: 'bone-3',
                name: 'Cumberland riverbank bone',
                subtitle: '',
                region: 'New Hanover'
            },
            {
                id: 'bone-4',
                name: 'Roanoke Ridge bone',
                subtitle: '',
                region: 'New Hanover'
            },
            {
                id: 'bone-5',
                name: 'Grizzlies hillside bone',
                subtitle: '',
                region: 'Ambarino'
            },
            {
                id: 'bone-6',
                name: 'Bluewater Marsh bone',
                subtitle: '',
                region: 'Lemoyne'
            },
        ],
    },
    {
        id: 'carvings',
        name: 'Rock carvings',
        color: 'var(--slate)',
        items: [
            {
                id: 'carving-1',
                name: 'Mount Shann carving',
                subtitle: '',
                region: 'Ambarino'
            },
            {
                id: 'carving-2',
                name: 'Cumberland Forest carving',
                subtitle: '',
                region: 'New Hanover'
            },
            {
                id: 'carving-3',
                name: 'Big Valley carving',
                subtitle: '',
                region: 'West Elizabeth'
            },
            {
                id: 'carving-4',
                name: 'Scarlett Meadows carving',
                subtitle: '',
                region: 'Lemoyne'
            },
        ],
    },
    {
        id: 'dreamcatchers',
        name: 'Dreamcatchers',
        color: 'var(--sage)',
        items: [
            {
                id: 'dreamcatcher-1',
                name: 'Tall Trees dreamcatcher',
                subtitle: '',
                region: 'West Elizabeth'
            },
            {
                id: 'dreamcatcher-2',
                name: 'Big Valley dreamcatcher',
                subtitle: '',
                region: 'West Elizabeth'
            },
            {
                id: 'dreamcatcher-3',
                name: 'Cumberland Forest dreamcatcher',
                subtitle: '',
                region: 'New Hanover'
            },
            {
                id: 'dreamcatcher-4',
                name: 'Scarlett Meadows dreamcatcher',
                subtitle: '',
                region: 'Lemoyne'
            },
            {
                id: 'dreamcatcher-5',
                name: 'Grizzlies dreamcatcher',
                subtitle: '',
                region: 'Ambarino'
            },
        ],
    },
]