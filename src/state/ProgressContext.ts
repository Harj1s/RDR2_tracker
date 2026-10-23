import { createContext } from 'react'
import type { CompletionRing } from '../data/progress.ts'

export type ProgressContextValue = {
    /* Ids of every collectible that has been ticker off. */
    found: ReadonlySet<string>
    toggleCollectible: (id: string) => void
    /* Go back tot the demo save. */
    resetProgress: () => void
    /* Ring list with live values. */
    rings: CompletionRing[]
    totalCompletion: number
}

export const ProgressContext = createContext<ProgressContextValue | null>(null)