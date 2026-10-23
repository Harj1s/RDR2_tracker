import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import { initialFound } from '../data/collectibles.ts'
import { buildRings, totalCompletion } from '../lib/completion.ts'
import { ProgressContext, type ProgressContextValue } from './ProgressContext.ts'

const STORAGE_KEY = 'frontier-progress-v1'

function loadFound(): string[] {
    try {
        const raw = localStorage.getItem(STORAGE_KEY)
        if (raw) {
            const parsed: unknown = JSON.parse(raw)
            if (typeof parsed === 'object' && parsed !== null && 'found' in parsed) {
                const found = (parsed as { found: unknown }).found
                if (Array.isArray(found) && found.every((id) => typeof id === 'string')) {
                    return found as string[]
                }
            }
        }
    } catch {
        // Storage blocked or the saved data is corrupted: use the demo save.
    }
    return initialFound
}

export default function ProgressProvider({ children }: { children: ReactNode }) {
    const [foundList, setFoundList] = useState<string[]>(loadFound)

    // Save whenever the list changes.
    useEffect(() => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify({ found: foundList }))
        } catch {
            // Storage full or blocked: the app still works, it just won't persist.
        }
    }, [foundList])

    const toggleCollectible = useCallback((id: string) => {
        setFoundList((previous) =>
            previous.includes(id)
                ? previous.filter((existing) => existing !== id)
                : [...previous, id],
        )
    }, [])

    const resetProgress = useCallback(() => setFoundList(initialFound), [])

    const value = useMemo<ProgressContextValue>(() => {
        const found = new Set(foundList)
        const rings = buildRings(found)
        return {
            found,
            toggleCollectible,
            resetProgress,
            rings,
            totalCompletion: totalCompletion(rings),
        }
    }, [foundList, toggleCollectible, resetProgress])

    return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>
}