import { useLayoutEffect, useRef } from 'react'

type Position = { top: number; left: number }

/**
 * Smoothly slides list rows to their new place when the ORDER of the same
 * rows changes (a "FLIP" animation: First, Last, Invert, Play).
 * 
 * Usage:
 *  const registerRow = useFlipReorder(visibleItems.map((i) => i.id))
 *  <li ref={registerRow(item.id)}> ...
 * 
 * - Rows added or removed (search, filters) are NOT animated.
 * - Positions are measured relative to the list, so scrolling the page
 *   betweem renders does not cause fake movement.
 * - Skipped entirely when the user prefers reduced motion.
 */
export function useFlipReorder(ids: string[]) {
    const rows = useRef(new Map<string, HTMLElement>())
    const lastPositions = useRef(new Map<string, Position>())
    const lastIds = useRef<string[] | null>(null)
    const running = useRef(new Map<string, Animation>())

    // A string key so the effect only runs when the order really changes.
    const key = ids.join('|')

    useLayoutEffect(() => {
        const currentIds = key ? key.split('|') : []
        const previousIds = lastIds.current
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

        // Stop slides still in flight so we measure the final layout.
        for (const animation of running.current.values()) animation.cancel()
        running.current.clear()

        const currentSet = new Set(currentIds)
        const sameRows =
            previousIds !== null &&
            previousIds.length === currentIds.length &&
            previousIds.every((id) => currentSet.has(id))
        const orderChanged =
            sameRows && previousIds.some((id, index) => id !== currentIds[index])
        
        const positions = new Map<string, Position>()

        for (const id of currentIds) {
            const element = rows.current.get(id)
            const parent = element?.parentElement
            if (!element || !parent) continue

            const rect = element.getBoundingClientRect()
            const parentRect = parent.getBoundingClientRect()
            const position = { top: rect.top - parentRect.top, left: rect.left - parentRect.left }
            const before = lastPositions.current.get(id)

            if (orderChanged && !reduceMotion && before) {
                const dx = before.left - position.left
                const dy = before.top - position.top

                if (dx !== 0 || dy !== 0) {
                    const animation = element.animate(
                        [
                            { transform: `translate(${dx}px, ${dy}px)` },
                            { transform: 'translate(0, 0)' },
                        ],
                        { duration: 200, easing: 'ease-out' },
                    )
                    running.current.set(id, animation)
                    animation.onfinish = () => {
                        if (running.current.get(id) === animation) running.current.delete(id)
                    }
                }
            }

            positions.set(id, position)
        }

        lastPositions.current = positions
        lastIds.current = currentIds
    }, [key])

    // Returns a ref callback for the row within this id.
    return (id: string) => (element: HTMLElement | null) => {
        if (element) rows.current.set(id, element)
        else rows.current.delete(id)
    }
}