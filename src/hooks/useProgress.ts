import { useContext } from 'react'
import { ProgressContext } from '../state/ProgressContext.ts'

export function useProgress() {
    const value = useContext(ProgressContext)
    if (!value) {
        throw new Error('useProgress must be used inside <ProgressProvider>')
    }
    return value
}