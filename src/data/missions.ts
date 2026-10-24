import type { TrackedGroup } from './types'

// DEMO SAMPLE. Names are placeholders written from memory and may sit in the
// wrong chapter. Replace with a list you have verified before launching.

export const missionChapters: TrackedGroup[] = [
    {
        id: 'ch1',
        name: 'Chapter 1 · Colter',
        color: 'var(--red)',
        items: [
            { id: 'm1-1', name: 'Outlaws from the West', region: 'Ambarino' },
            { id: 'm1-2', name: 'Enter, Pursued by a Memory', region: 'Ambarino' },
            { id: 'm1-3', name: 'Old Friends', region: 'Ambarino' },
        ],
    },
    {
        id: 'ch2',
        name: 'Chapter 2 · Horseshoe Overlook',
        color: 'var(--gold)',
        items: [
            { id: 'm2-1', name: 'Polite Society, Valentine Style', region: 'New Hanover' },
            { id: 'm2-2', name: 'Americans at Rest', region: 'New Hanover' },
            { id: 'm2-3', name: 'Money Lending and Other Sins', region: 'New Hanover' },
        ],
    },
    {
        id: 'ch3',
        name: 'Chapter 3 · Clemens Point',
        color: 'var(--sage)',
        items: [
            { id: 'm3-1', name: 'A Quiet Time', region: 'Lemoyne' },
            { id: 'm3-2', name: 'The Spines of America', region: 'Lemoyne' },
            { id: 'm3-3', name: 'A Fisher of Men', region: 'Lemoyne' },
        ],
    },
    {
        id: 'ch4',
        name: 'Chapter 4 · Saint Denis',
        color: 'var(--slate)',
        items: [
            { id: 'm4-1', name: 'Banking, the Old American Art', region: 'Lemoyne' },
            { id: 'm4-2', name: 'Advertising, the New American Art', region: 'Lemoyne' },
            { id: 'm4-3', name: 'The Gilded Cage', region: 'Lemoyne' },
        ],
    },
]