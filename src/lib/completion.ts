import { collectibleCategories } from "../data/collectibles";
import { missionChapters } from '../data/missions'
import { completionRings, type CompletionRing } from '../data/progress.ts'
import type { TrackedGroup } from '../data/types.ts'

export function countTotal(groups: TrackedGroup[]): number {
    return groups.reduce((sum, group) => sum + group.items.length, 0)
}

export function countDone(
    groups: TrackedGroup[],
    done: ReadonlySet<string>,
): number {
    return groups.reduce(
        (sum, group) => sum + group.items.filter((item) => done.has(item.id)).length, 0,
    )
}

/* Share of items done across the groups, as a whole percentage. */
export function percentDone(
    groups: TrackedGroup[],
    done: ReadonlySet<string>,
): number {
    const total = countTotal(groups)
    if (total === 0) return 0
    return Math.round((countDone(groups, done) / total) * 100)
}

/** Name of the latest group (in list order) that has at least one item done. */
export function currentGroupName(
    groups: TrackedGroup[],
    done: ReadonlySet<string>,
): string {
    const started = groups.filter((group) =>
        group.items.some((item) => done.has(item.id)),
    )
    return started.length > 0 ? started[started.length - 1].name : 'Not started'
}

/** Which rings are calculated from real data. Add a line when a new page
 * goes live, e.g. strangers: strangerGroups.
 */
const liveRings: Record<string, TrackedGroup[]> = {
    missions: missionChapters,
    collectibles: collectibleCategories,
}

/* The ring list, with the Collectibles ring calculated from real ticks. */
export function buildRings(done: ReadonlySet<string>): CompletionRing[] {
    return completionRings.map((ring) => {
        const groups = liveRings[ring.id]
        return groups ? { ...ring, percent: percentDone(groups, done) } : ring
    })
}

/**
 * Demo maths: the plain average of the rings, to one decimal.
 * This is not the game's own weigting.
 */
export function totalCompletion(rings: CompletionRing[]): number {
    if (rings.length === 0) return 0
    const sum = rings.reduce((acc, ring) => acc + ring.percent, 0)
    return Math.round((sum / rings.length) * 10) / 10
}

/* The next multiple of 10 above the current total, capped at 100. */
export function nextMilestone(total: number): number {
    return Math.min(100, (Math.floor(total / 10) + 1) * 10)
}