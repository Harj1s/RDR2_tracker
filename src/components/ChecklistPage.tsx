import { useState } from 'react'
import type { ReactNode } from 'react'
import { Search } from 'lucide-react'
import type { TrackedGroup, TrackedItem } from '../data/types'
import type { FilterMode, ItemStatus } from '../lib/checklist'
import { filterItems, isItemDone, statusOf} from '../lib/checklist'
import { useProgress } from '../hooks/useProgress'
import { useFlipReorder } from '../hooks/useFlipReorder'
import PageHead from './PageHead'
import ItemRow from './ItemRow'
import SmallerPicture from './SmallerPicture'

import copperMedal from '../assets/icons/Copper medal.png'
import silverMedal from '../assets/icons/Silver medal.png'
import goldMedal from '../assets/icons/Gold medal.png'

type ChecklistPageProps = {
    eyebrow: string
    title: string
    subtitle: string
    groups: TrackedGroup[]
    defaultGroupId?: string
    sortUnlockedFirst?: boolean
    pageProgressRingId?: string

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

// Sort order when 'sortUnlockedFirst' is on.
const STATUS_RANK: Record<ItemStatus, number> = {
    done: 0,
    next: 1,
    todo: 2,
    locked: 3,
}

/**
 * Done items first (in the order they were completed), then "next up",
 * then not started, then locked. Items that are animating out keep the
 * status they had before the click, so they don't jump around.
 */
function sortByStatus(
    items: TrackedItem[],
    group: TrackedGroup,
    done: ReadonlySet<string>,
    exiting: Map<string, ItemStatus>,
) {
    const completionOrder = new Map([...done].map((id, index) => [id, index]))
    const statusFor = (item: TrackedItem) =>
        exiting.get(item.id) ?? statusOf(item, group, done)

    return [...items].sort((a, b) => {
        const aStatus = statusFor(a)
        const bStatus = statusFor(b)

        if (aStatus !== bStatus) return STATUS_RANK[aStatus] - STATUS_RANK[bStatus]

        if (aStatus === 'done') {
            const aOrder = completionOrder.get(a.id) ?? Number.MAX_SAFE_INTEGER
            const bOrder = completionOrder.get(b.id) ?? Number.MAX_SAFE_INTEGER
            return aOrder - bOrder
        }
        return a.id.localeCompare(b.id, undefined, { numeric: true })
    })
}


export default function ChecklistPage({
    eyebrow, title, subtitle, groups, isMission = false,
    defaultGroupId, pageProgressRingId,
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

    // Items just ticked in "Incomplete" mode. They stay in the list while
    // their exit animation plays. Value = their status before the click.
    const [exitingItems, setExitingItems] = useState(new Map<string, ItemStatus>())

    // Derived each render, so it can never go stale.
    const group =
        groups.find((g) => g.id === groupId) ??
        groups.find((g) => g.id === defaultGroupId) ??
        groups[0]

    const filtered = filterItems(group.items, search, mode, done)

    // Just-completed items that still need to animate out of the list.
    const stillExiting = 
        mode === 'todo'
            ? group.items.filter(
                (item) =>
                    exitingItems.has(item.id) &&
                    isItemDone(item, done) &&
                    filterItems([item], search, 'all', done).length > 0,
            )
            : []

    const filteredIds = new Set(filtered.map((item) => item.id))
    const listItems = [
        ...filtered,
        ...stillExiting.filter((item) => !filteredIds.has(item.id)),
    ]

    const visible = sortUnlockedFirst
        ? sortByStatus(listItems, group, done, exitingItems)
        : listItems

    // The chosen item, or the "next up" one, or the first visible one.
    // If a filter hides the chosen item, this falls back instead of showing
    // a panel for something that is not in the list.
    const selected =
        visible.find((item) => item.id === itemId) ??
        visible.find((item) => statusOf(item, group, done) === 'next') ??
        visible[0] ??
        null

    const registerRow = useFlipReorder(visible.map((item) => item.id))

    // -------- Actions
    function stopExiting(id: string) {
        setExitingItems((previous) => {
            if (!previous.has(id)) return previous
            const next = new Map(previous)
            next.delete(id)
            return next
        }) 
    }
    
    function selectGroup(id: string) {
        setGroupId(id)
        setItemId(null)
        setSearch('')
        setMode('all')
        setExitingItems(new Map())
    }

    function toggleChecklistItem(id: string) {
        const item = group.items.find((candidate) => candidate.id === id)
        const completing = mode === 'todo' && item !== undefined && !isItemDone(item, done)

        if (item && completing) {
            setExitingItems((previous) =>
                new Map(previous).set(id, statusOf(item, group, done)),
            )
        } else {
            stopExiting(id)
        }

        if (item?.objectives) {
            const markDone = !isItemDone(item, done)
            for (const objective of item.objectives) {
                if (done.has(objective.id) !== markDone) toggleItem(objective.id)
            }
        } else {
            toggleItem(id)
        }
    }

    return (
        <>
           <PageHead eyebrow={eyebrow} title={title} subtitle={subtitle} />

            {renderStats?.()}

            <div className="checklist-overview">
                <SmallerPicture
                    groups={groups}
                    pageLabel={title}
                    pageProgressRingId={pageProgressRingId}
                />

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
            </div>

            <div className="searchbar">
                <label className="searchbar__field">
                    <Search size={16} strokeWidth={1.5} aria-hidden="true" />
                    <input
                        type="search"
                        placeholder={searchPlaceholder}
                        aria-label={searchPlaceholder}
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
                                const goldObjectives = item.gold ?? []
                                const completedGold = goldObjectives.filter((objective) => 
                                    done.has(objective.id),
                                ).length

                                const medalSrc =
                                    !isMission || goldObjectives.length === 0
                                        ? undefined
                                        : completedGold === 0
                                            ? copperMedal
                                            :completedGold === goldObjectives.length
                                                ? goldMedal
                                                : silverMedal

                                return (
                                    <ItemRow
                                        key={item.id}
                                        item={item}
                                        status={status}
                                        statusText={statusLabel(status)}
                                        medalSrc={medalSrc}
                                        checked={isItemDone(item, done)}
                                        selected={item.id === selected?.id}
                                        exiting={exitingItems.has(item.id) && isItemDone(item, done)}
                                        rowRef={registerRow(item.id)}
                                        onToggle={() => toggleChecklistItem(item.id)}
                                        onSelect={() => setItemId(item.id)}
                                        onExitEnd={() => stopExiting(item.id)}
                                    />
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

            {banner && <aside className="banner">{banner}</aside>}
        </>
    )
}