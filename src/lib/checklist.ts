import type { TrackedGroup, TrackedItem } from '../data/types'

export type ItemStatus = 'locked' | 'done' | 'todo'
export type ChapterStatus = 'locked' | 'complete' | 'inProgress' | 'todo'
export type CollectibleGroupStatus = 'locked' | 'allFound' | 'inProgress'
export type FilterMode = 'all' | 'todo' | 'done'

/** The real total: totalInGame if set, otherwise the number of items. */
export function totalOf(group: TrackedGroup): number {
    if (group.totalInGame !== undefined) {
        return group.totalInGame
    } else {
        return group.items.reduce(
            (total, item) => total + (item.objectives?.length ?? 1),
            0,
        )
    }
}

export function isItemDone(
    item: TrackedItem,
    done: ReadonlySet<string>,
): boolean {
    return item.objectives
        ? item.objectives.length > 0 && item.objectives.every((objective) => done.has(objective.id))
        : done.has(item.id)
}

export function statusOf(
    item: TrackedItem,
    done: ReadonlySet<string>,
): ItemStatus {
    if (isItemDone(item, done)) return 'done'
    if (isLocked(item, done)) return 'locked'

    return 'todo'
}

export function chapterStatus(
    groups: TrackedGroup[],
    index: number,
    done: ReadonlySet<string>,
): ChapterStatus {
    const group = groups[index]
    const isDone = (item: TrackedItem) => isItemDone(item, done)
    const isComplete = (g: TrackedGroup) =>
        g.items.length > 0 && g.items.every(isDone)

    if (isComplete(group)) return 'complete'
    if (group.items.some(isDone)) return 'inProgress'
    if (index === 0) return 'todo'
    if (!isComplete(groups[index - 1])) return 'locked'

    return 'todo'
}

export function collectibleGroupStatus(
    groups: TrackedGroup[],
    index: number,
    done: ReadonlySet<string>,
): CollectibleGroupStatus {
    const group = groups[index]
    const isDone = (item: TrackedItem) => isItemDone(item, done)
    const isComplete = (g: TrackedGroup) =>
        g.items.length > 0 && g.items.every(isDone)
    const required = true

    if (isComplete(group)) return 'allFound'
    if (!required) return 'locked'

    return 'inProgress'

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
            [
                item.name,
                item.subtitle,
                item.region ?? '',
                ...(item.objectives?.map((objective) => objective.text) ?? []),
            ]
                .some((value) => value.toLowerCase().includes(query))
        
        const isDone = isItemDone(item, done)
        const matchesMode =
            mode === 'all' ||
            (mode === 'done' ? isDone : !isDone)

        return matchesSearch && matchesMode
    })

}

//** Number of gold objectives ticked, across all groups. */
export function goldEarned(
    groups: TrackedGroup[],
    done: ReadonlySet<string>
): number {
    const items = groups.flatMap((group) => group.items)
    let count = 0

    for (const item of items) {
       for (const objective of item.gold ?? []) {
        if (done.has(objective.id)) count++
       }
    }

    return count
}

//** Index of the chapter the player is on. */
export function currentGroupIndex(
    groups: TrackedGroup[],
    done: ReadonlySet<string>
): number {
    for (let i = 0; i < groups.length; i++) {
        const status = chapterStatus(groups, i, done)
        if (status !== 'complete' && status !=='locked') return i
    }
    return Math.max(0, groups.length - 1)
}

//** Returns the choices blocking the item */
export function needsAnyOf(
    item: TrackedItem,
    done: ReadonlySet<string>
): string[] {
    const choices = item.requiresAny ?? []

    // If any choice is done, this requirement is satisfied.
    if (choices.some((id) => done.has(id))) return []

    // Otherwise, every choice is still a possible way to unlock the item.
    return choices
}

//** Requirements that are not done yet. */
export function missingRequirements(
    item: TrackedItem,
    done: ReadonlySet<string>
): string[] {
    return (item.requires ?? []).filter((id) => (!done.has(id)))
}

//** True if any requirement is missing. */
export function isLocked(
    item: TrackedItem,
    done: ReadonlySet<string>
): boolean {
    return (
        missingRequirements(item, done).length > 0 ||
        needsAnyOf(item, done).length > 0
    )

}

//** Map from a requirement id to the items it can help unlock. */
export function buildUnlocksMap(
    groups: TrackedGroup[]
): Map<string, TrackedItem[]> {
    const unlocks = new Map<string, TrackedItem[]>()

    for (const group of groups) {
        for (const item of group.items) {
            const requirements = new Set([
                ...(item.requires ?? []),
                ...(item.requiresAny ?? []),
            ])

            for (const id of requirements) {
                const unlockedItems = unlocks.get(id) ?? []
                unlockedItems.push(item)
                unlocks.set(id, unlockedItems)
            }
        }
    }

    return unlocks
}

//** Data mistakes as readable messages: duplicate ids, requirements that don't exist, cycles.*/
export function findRequirementProblems(
    groups: TrackedGroup[]
): string[] {
    const problems: string[] = []
    const dependencies = new Map<string, Set<string>>()

    // Collect IDs and each item's prerequisites.
    for (const group of groups) {
        for (const item of group.items) {
            let itemDependencies = dependencies.get(item.id)

            if (itemDependencies) {
                problems.push(`Duplicate item id "${item.id}".`)
            } else {
                itemDependencies = new Set<string>()
                dependencies.set(item.id, itemDependencies)
            }

            for (const id of [
                ...(item.requires ?? []),
                ...(item.requiresAny ?? []),
            ]) {
                itemDependencies.add(id)
            }
        }
    }

    // Report references to IDs that don't exist.
    for (const [itemId, requiredIds] of dependencies) {
        for (const requiredId of requiredIds) {
            if (!dependencies.has(requiredId)) {
                problems.push(`Item "${itemId}" requires unknown item "${requiredId}".`)
            }
        }
    }

    const state = new Map<string, 'visiting' | 'done'>()
    const path: string[] = []

    const visit = (id: string): void => {
        const currentState = state.get(id)

        if (currentState === 'done') return

        if (currentState === 'visiting') {
            const cycleStart = path.indexOf(id)
            const cycle = [...path.slice(cycleStart), id].join(' -> ')
            problems.push(`Requirement cycle: ${cycle}`)
            return
        }

        state.set(id, 'visiting')
        path.push(id)

        for (const requiredId of dependencies.get(id) ?? []) {
            if (dependencies.has(requiredId)) {
                visit(requiredId)
            }
        }

        path.pop()
        state.set(id, 'done')
    }

    for (const id of dependencies.keys()) {
        visit(id)
    }

    return problems
}