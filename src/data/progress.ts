// Demo save. Later this becomes the starting value for your localStorage hook.

export type EntryKind = 'mission' | 'collectible' | 'hunt'

export type JournalEntry = {
    id: string
    kind: EntryKind
    title: string
    note: string
    time: string
}

export type SideGoal = {
    id: string
    label: string
    done: number
    total: number
    unit?: string
    tone: 'red' | 'gold'
}

export const progress = {
    totalCompletion: 63.4,
    nextMilestone: 70,
    storyMissions: { completed: 62, location: 'Chapter 4 · Saint Denis' },
    strangers: { done: 6, total: 10 },
    achievements: { done: 24, total: 51 },

    nextObjective: {
        category: 'Collectibles',
        title: 'A history written in stone.',
        description: 'Find the Heartlands cliff dinosaur bone, just south of the oil derrick.',
        location: 'The Heartlands · New Hanover',
        progressNote: '12 of 30 bones found. This discovery advances "A Test of Faith".',
        suggestion: 'Suggested next: a rock carving near Mount Shann.',
    },
}

export const recentEntries: JournalEntry[] = [
    {
        id: 'e1',
        kind: 'mission',
        title: 'The Gilded Gage',
        note: 'Story mission completed · 14:32',
        time: 'Recorded'
    },
    {
        id: 'e2',
        kind: 'collectible',
        title: 'Heartlands oil field bone',
        note: 'Collectible recorded · 13:48',
        time: 'Recorded'
    },
    {
        id: 'e3',
        kind: 'hunt',
        title: 'American bison',
        note: 'Studied and skinned · 12:10',
        time: 'Recorded'
    },
]

export const sideGoals: SideGoal[] = [
    { id: 'g1', label: 'Satchel collection', done: 3, total: 7, tone: 'red' },
    { id: 'g2', label: 'Gold Rush', done: 18, total: 70, unit: ' gold', tone: 'gold' },
]

export type CompletionRing = {
    id: string
    label: string
    percent: number
    color: string // any CSS color, here the variables from index.css
}

export const completionRings: CompletionRing[] = [
    { id: 'missions', label: 'Missions & events', percent: 72, color: 'var(--red)' },
    { id: 'collectibles', label: 'Collectibles', percent: 48, color: 'var(--gold)' },
    { id: 'compendium', label: 'Compendium', percent: 66, color: 'var(--sage)' },
    { id: 'player', label: 'Player', percent: 58, color: 'var(--slate)' },
    { id: 'misc', label: 'Miscellaneous', percent: 70, color: 'var(--brick)' },
]