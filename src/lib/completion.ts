import { collectibleCategories } from "../data/collectibles";
import { completionRings, type CompletionRing } from '../data/progress.ts'

const allCollectibleIds = collectibleCategories.flatMap((category) =>
    category.items.map((item) => item.id),    
)

/* Share of collectibles found, as a whole percentage. */
export function collectiblesPercent(found: ReadonlySet<string>): number {
    const total = allCollectibleIds.length
    if (total === 0) return 0
    const done = allCollectibleIds.filter((id) => found.has(id)).length
    return Math.round((done / total) * 100)
}

/* The ring list, with the Collectibles ring calculated from real ticks. */
export function buildRings(found: ReadonlySet<string>): CompletionRing[] {
    const collectibles = collectiblesPercent(found)
    return completionRings.map((ring) =>
    ring.id === 'collectibles' ? { ...ring, percent: collectibles } : ring,
    )
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