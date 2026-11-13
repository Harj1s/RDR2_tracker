import type { TrackedItem, TrackedGroup } from '../data/types'

export type MedalType = 'gold' | 'silver' | 'bronze'

export function getMedalType(
    item: TrackedItem,
    done: ReadonlySet<string>,
): MedalType | undefined {
    const missionCompleted = done.has(item.id)
    const objectives = item.details?.gold ?? []
    if (objectives.length === 0) return undefined

    const completed = objectives.filter((objective) =>
        done.has(objective.id),
    ).length

    if (completed === objectives.length) return 'gold'
    if (completed > 0) return 'silver'
    if (missionCompleted) return 'bronze'
    return undefined
}

export function countMedals(
    groups: TrackedGroup[],
    done: ReadonlySet<string>,
    medalType: MedalType,
): number {
    return groups
        .flatMap((group) => group.items)
        .filter((item) => getMedalType(item, done) === medalType)
        .length
}