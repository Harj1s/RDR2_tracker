import { createContext } from 'react'
import type { CompletionRing } from '../data/progress.ts'

export type ProgressContextValue = {
    /* Ids of every item (mission, collectible, ...) that has been ticked off. */
    done: ReadonlySet<string>
    toggleItem: (id: string) => void

    /* Id of the pinned item, or null when nothing is pinned */
    pinned: string | null
    /* Pins the item, or unpins it if it is already the pinned one. */
    togglePinned: (id: string) => void

    /* Go back to the demo save. */
    resetProgress: () => void
    
    /* Ring list with live values. */
    rings: CompletionRing[]
    totalCompletion: number
}

export const ProgressContext = createContext<ProgressContextValue | null>(null)