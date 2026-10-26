import type { TrackedGroup, TrackedItem } from '../data/types'

export type ItemStatus = 'locked' | 'done' | 'next' | 'todo'
export type ChapterStatus = 'locked' | 'complete' | 'inProgress' | 'todo'
export type FilterMode = 'all' | 'todo' | 'done'

/** The real total: totalInGame if set, otherwise the number of items. */
export function totalOf(group: TrackedGroup): number {
    if (group.totalInGame !== undefined) {
        return group.totalInGame
    } else {
        return group.items.length
    }
}

export function statusOf(
    item: TrackedItem,
    group: TrackedGroup,
    done: ReadonlySet<string>,
): ItemStatus {
    if (done.has(item.id)) return 'done'
    if (item.lockedUntil !== undefined) return 'locked'

    const firstOpen = group.items.find(
        (other) => !done.has(other.id) && other.lockedUntil === undefined,
    )
    if (firstOpen?.id === item.id) return 'next'

    return 'todo'

}

export function chapterStatus(
    groups: TrackedGroup[],
    index: number,
    done: ReadonlySet<string>,
): ChapterStatus {
    const group = groups[index]
    const isDone = (item: TrackedItem) => done.has(item.id)
    const isComplete = (g: TrackedGroup) =>
        g.items.length > 0 && g.items.every(isDone)

    if (isComplete(group)) return 'complete'
    if (group.items.some(isDone)) return 'inProgress'
    if (index === 0) return 'todo'
    if (!isComplete(groups[index - 1])) return 'locked'

    return 'todo'
}

export function filterItems(
    items: TrackedItem[],
    search: string,
    mode: FilterMode,
    done: ReadonlySet<string>,
): TrackedItem[] {
    const query = search.trim().toLowerCase()

    return items.filter((item) => {
        const matchesSearch =
            query === '' ||
            [item.name, item.subtitle, item.region ?? '']
                .some((value) => value.toLowerCase().includes(query))
        
        const isDone = done.has(item.id)
        const matchesMode =
            mode === 'all' ||
            (mode === 'done' ? isDone : !isDone)

        return matchesSearch && matchesMode
    })

}