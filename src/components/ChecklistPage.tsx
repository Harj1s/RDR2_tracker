import { useLayoutEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { Search } from 'lucide-react'
import type { TrackedGroup, TrackedItem } from '../data/types'
import type { FilterMode, ItemStatus } from '../lib/checklist'

import { useProgress } from '../hooks/useProgress'
import { filterItems, statusOf } from '../lib/checklist'



type ChecklistPageProps = {
    eyebrow: string
    title: string
    subtitle: string
    groups: TrackedGroup[]
    defaultGroupId?: string
    sortUnlockedFirst?: boolean

    searchPlaceholder: string
    modeLabels: { all: string; todo: string; done: string }

    listTitle: (group: TrackedGroup) => string
    renderTile: (group: TrackedGroup, index: number) => ReactNode
    renderDetail: (
        item: TrackedItem | null,
        group: TrackedGroup,
        toggleChecklistItem: (id: string) => void,
    ) => ReactNode
    statusLabel: (status: ItemStatus) => string

    renderStats?: () => ReactNode
    listFooter?: (group: TrackedGroup) => ReactNode
    banner?: ReactNode
}

const MODES: FilterMode[] = ['all', 'todo', 'done']

export default function ChecklistPage({
    eyebrow, title, subtitle, groups, defaultGroupId,
    sortUnlockedFirst, searchPlaceholder, modeLabels,
    listTitle, renderTile, renderDetail, statusLabel,
    renderStats, listFooter, banner,
}: ChecklistPageProps) {

    const { done, toggleItem } = useProgress()

    // What the player has chosen, null means "nothing chosen yet, use the default".
    const [groupId, setGroupId] = useState<string | null>(null)
    const [itemId, setItemId] = useState<string | null>(null)
    const [search, setSearch] = useState('')
    const [mode, setMode] = useState<FilterMode>('all')
    const [exitingItems, setExitingItems] = useState(new Map<string, ItemStatus>())

    // Everything below is derived each render, so it can never go stale.
    const group =
        groups.find((g) => g.id === groupId) ??
        groups.find((g) => g.id === defaultGroupId) ??
        groups[0]

    const filtered = filterItems(group.items, search, mode, done)
    const delayedCompleted = mode === 'todo'
        ? group.items.filter((item) =>
            exitingItems.has(item.id) &&
            done.has(item.id) &&
            filterItems([item], search, 'all', done).length > 0,
        )
        : []
    const filteredIds = new Set(filtered.map((item) => item.id))
    const displayItems = [
        ...filtered,
        ...delayedCompleted.filter((item) => !filteredIds.has(item.id)),
    ]
    const statusRank: Record<ItemStatus, number> = {
        done: 0,
        next: 1,
        todo: 2,
        locked: 3,
    }
    const completionOrder = new Map(
        [...done].map((id, index) => [id, index]),
    )

    const visible = sortUnlockedFirst
        ? [...displayItems].sort((a, b) => {
            const aStatus = exitingItems.get(a.id) ?? statusOf(a, group, done)
            const bStatus = exitingItems.get(b.id) ?? statusOf(b, group, done)
            const statusDifference = statusRank[aStatus] - statusRank[bStatus]

            if (statusDifference !== 0) return statusDifference
            if (aStatus === 'done') {
                return (completionOrder.get(a.id) ?? Number.MAX_SAFE_INTEGER) -
                    (completionOrder.get(b.id) ?? Number.MAX_SAFE_INTEGER)
            }
            return a.id.localeCompare(b.id, undefined, { numeric: true })
        })
        : displayItems

    // The chosen item, or the "next up" one, or the first visible one.
    // If a filter hides the chosen item, this falls back instead of showing
    // a panel for something that is not in the list.
    const selected =
        visible.find((item) => item.id === itemId) ??
        visible.find((item) => statusOf(item, group, done) === 'next') ??
        visible[0] ??
        null

    function selectGroup(id: string) {
        setGroupId(id)
        setItemId(null)
        setSearch('')
        setMode('all')
        setExitingItems(new Map())
    }

    function toggleChecklistItem(id: string) {
        const item = group.items.find((candidate) => candidate.id === id)

        if (item && mode === 'todo' && !done.has(id)) {
            setExitingItems((previous) =>
                new Map(previous).set(id, statusOf(item, group, done)),
            )
        } else {
            setExitingItems((previous) => {
                if (!previous.has(id)) return previous
                const next = new Map(previous)
                next.delete(id)
                return next
            })
        }

        toggleItem(id)
    }

        // For smooth list transition
    const rowElements = useRef(new Map<string, HTMLLIElement>())
    const previousPositions = useRef(
        new Map<string, { top: number, left: number }>(),
    )
    const previousOrder = useRef<string[] | null>(null)
    const rowAnimations = useRef(new Map<string, Animation>())

    useLayoutEffect(() => {
        const visibleIds = visible.map((item) => item.id)
        const previous = previousOrder.current
        const currentIds = new Set(visibleIds)

        const sameItems =
            previous !== null &&
            previous.length === visibleIds.length &&
            previous.every((id) => currentIds.has(id))

        const orderChanged =
            sameItems &&
            previous.some((id, index) => id !== visibleIds[index])
        
        const reduceMotion = window
            .matchMedia('(prefers-reduced-motion: reduce)')
            .matches
        
        // If rows were added/removed, don't animate the layout reflow.
        if (!sameItems || reduceMotion) {
            for (const animation of rowAnimations.current.values()) {
                animation.cancel()
            }
            rowAnimations.current.clear()
        }
        
        const nextPositions = new Map<string, { top: number, left: number }>()

        for (const item of visible) {
            const element = rowElements.current.get(item.id)
            if (!element) continue

            const { top, left } = element.getBoundingClientRect()
            const previousPosition = previousPositions.current.get(item.id)

            if (orderChanged && !reduceMotion && previousPosition) {
                const deltaX = previousPosition.left - left
                const deltaY = previousPosition.top - top

                if (deltaX !== 0 || deltaY !== 0) {
                    rowAnimations.current.get(item.id)?.cancel()
                    
                    const animation = element.animate(
                        [
                            { transform: `translate(${deltaX}px, ${deltaY}px)` },
                            { transform: 'translate(0, 0)' },
                        ],
                        { duration: 200, easing: 'ease-out' },
                    )

                    rowAnimations.current.set(item.id, animation)
                    animation.onfinish = () => {
                        if (rowAnimations.current.get(item.id) === animation) {
                            rowAnimations.current.delete(item.id)
                        }
                    }
                }
            }

            nextPositions.set(item.id, { top, left })
        }

        previousPositions.current = nextPositions
        previousOrder.current = visibleIds
    }, [visible])

    return (
        <>
            <section className="page-head">
                <p className="eyebrow eyebrow--red">{eyebrow}</p>
                <h2 className="page-title">{title}</h2>
                <p className="page-subtitle">{subtitle}</p>
            </section>

            <div className="tiles">
                {groups.map((g, index) => (
                    <button
                        key={g.id}
                        type="button"
                        className={g.id === group.id ? 'tile tile--active' : 'tile'}
                        aria-pressed={g.id === group.id}
                        onClick={() => selectGroup(g.id)}
                    >
                        {renderTile(g, index)}
                    </button>
                ))}
            </div>

            {renderStats?.()}

            <div className="searchbar">
                <label className="searchbar__field">
                    <Search size={16} strokeWidth={1.5} aria-hidden="true" />
                    <input
                        type="search"
                        placeholder={searchPlaceholder}
                        value={search}
                        onChange={(event) => {
                            setSearch(event.target.value)
                            setExitingItems(new Map())
                        }}
                    />
                </label>
                <div className="searchbar__modes">
                    {MODES.map((m) => (
                        <button
                            key={m}
                            type="button"
                            className={m === mode ? 'mode mode--active' : 'mode'}
                            aria-pressed={m === mode}
                            onClick={() => {
                                setMode(m)
                                setExitingItems(new Map())
                            }}
                        >
                            {modeLabels[m]}
                        </button>
                    ))}
                </div>
            </div>
            
            <div className="split">
                <section className="card list">
                    <header className="list__head">
                        <h3 className="card__title">{listTitle(group)}</h3>
                    </header>

                    {visible.length === 0 ? (
                        <p className="list__empty">Nothing matches your search.</p>
                    ) : (
                        <ul className="list__rows">
                            {visible.map((item) => {
                                const status = statusOf(item, group, done)
                                const isSelected = item.id === selected?.id

                                return (
                                    <li 
                                        key={item.id}
                                        onAnimationEnd={(event) => {
                                            if (event.target !== event.currentTarget) return
                                            setExitingItems((previous) => {
                                                if (!previous.has(item.id)) return previous
                                                const next = new Map(previous)
                                                next.delete(item.id)
                                                return next
                                            })
                                        }}
                                        ref={(element) => {
                                            if (element) {
                                                rowElements.current.set(item.id, element)
                                            } else {
                                                rowElements.current.delete(item.id)
                                            }
                                        }}
                                        className={
                                            `row row--${status}` +
                                            (exitingItems.has(item.id) && done.has(item.id)
                                                ? ' row--exiting'
                                                : '') +
                                            (isSelected ? ' row--selected' : '')
                                        }
                                    >
                                        <input
                                            type="checkbox"
                                            className="row__check"
                                            checked={done.has(item.id)}
                                            disabled={status === 'locked'}
                                            onChange={() => toggleChecklistItem(item.id)}
                                            aria-label={item.name}
                                        />
                                        <button
                                            type="button"
                                            className="row__select"
                                            aria-current={isSelected ? 'true' : undefined}
                                            onClick={() => setItemId(item.id)}
                                        >
                                            <span className="row__text">
                                                <span className="row__title">{item.name}</span>
                                                <span className="row__sub">{item.subtitle}</span>
                                            </span>
                                            <span className="row__status">
                                                {statusLabel(status)}
                                            </span>
                                        </button>
                                    </li>
                                )
                            })}
                        </ul>
                    )}

                    {listFooter && (
                        <footer className="list__foot">{listFooter(group)}</footer>
                    )}
                </section>

                <aside className="card">
                    {renderDetail(selected, group, toggleChecklistItem)}
                </aside>
            </div>

            {banner}
        </>
    )
}