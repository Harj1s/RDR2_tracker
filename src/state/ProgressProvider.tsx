import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import { initialDone } from '../data/progress.ts'
import { buildRings, totalCompletion } from '../lib/completion.ts'
import { ProgressContext, type ProgressContextValue } from './ProgressContext.ts'

// Bump the version when the saved shape changes, and add a migration below.
const STORAGE_KEY = 'frontier-progress-v2'
const OLD_STORAGE_KEY_V1 = 'frontier-progress-v2'

function readIds(key: string, field: string): string[] | null {
    try {
        const raw = localStorage.getItem(key)
        if (!raw) return null
        const parsed: unknown = JSON.parse(raw)
        if (typeof parsed !== 'object' || parsed === null) return null
        const value = (parsed as Record<string, unknown>)[field]
        if (Array.isArray(value) && value.every((id) => typeof id === 'string')) {
            return value as string[]
        }
    } catch {
        // Storage blocked or the saved data is corrupted
    }
    return null
}

function loadDone(): string[] {
    return (
        readIds(STORAGE_KEY, 'done') ??
        // Migration: v1 stored collectibles only, under "found".
        readIds(OLD_STORAGE_KEY_V1, 'found') ??
        initialDone
    )
}

export default function ProgressProvider({ children }: { children: ReactNode }) {
    const [doneList, setDoneList] = useState<string[]>(loadDone)

    // Save whenever the list changes.
    useEffect(() => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify({ done: doneList }))
        } catch {
            // Storage full or blocked: the app still works, it just won't persist.
        }
    }, [doneList])

    const toggleItem = useCallback((id: string) => {
        setDoneList((previous) =>
            previous.includes(id)
                ? previous.filter((existing) => existing !== id)
                : [...previous, id],
        )
    }, [])

    const resetProgress = useCallback(() => setDoneList(initialDone), [])

    const value = useMemo<ProgressContextValue>(() => {
        const done = new Set(doneList)
        const rings = buildRings(done)
        return {
            done,
            toggleItem,
            resetProgress,
            rings,
            totalCompletion: totalCompletion(rings),
        }
    }, [doneList, toggleItem, resetProgress])

    return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>
}