import { useState } from 'react'
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

    searchPlaceholder: string
    modeLabels: { all: string; todo: string; done: string }

    listTitle: (group: TrackedGroup) => string
    renderTile: (group: TrackedGroup, index: number) => ReactNode
    renderDetail: (item: TrackedItem | null, group: TrackedGroup) => ReactNode
    statusLabel: (status: ItemStatus) => string

    renderStats?: () => ReactNode
    listFooter?: (group: TrackedGroup) => ReactNode
    banner?: ReactNode
}

const MODES: FilterMode[] = ['all', 'todo', 'done']

export default function ChecklistPage({
    eyebrow, title, subtitle, groups, defaultGroupId,
    searchPlaceholder, modeLabels,
    listTitle, renderTile, renderDetail, statusLabel,
    renderStats, listFooter, banner,
}: ChecklistPageProps) {
    const { done, toggleItem } = useProgress()

    // What the player has chosen, null means "nothing chosen yet, use the default".
    const [groupId, setGroupId] = useState<string | null>(null)
    const [itemId, setItemId] = useState<string | null>(null)
    const [search, setSearch] = useState('')
    const [mode, setMode] = useState<FilterMode>('all')

    // Everything below is derived each render, so it can never go stale.
    const group =
        groups.find((g) => g.id === groupId) ??
        groups.find((g) => g.id === defaultGroupId) ??
        groups[0]

    const visible = filterItems(group.items, search, mode, done)

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
    }

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
                        onChange={(event) => setSearch(event.target.value)}
                    />
                </label>
                <div className="searchbar__modes">
                    {MODES.map((m) => (
                        <button
                            key={m}
                            type="button"
                            className={m === mode ? 'mode mode--active' : 'mode'}
                            aria-pressed={m === mode}
                            onClick={() => setMode(m)}
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
                                        className={
                                            `row row--${status}` +
                                            (isSelected ? ' row--selected' : '')
                                        }
                                    >
                                        <input
                                            type="checkbox"
                                            className="row__check"
                                            checked={done.has(item.id)}
                                            onChange={() => toggleItem(item.id)}
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
                    {renderDetail(selected, group)}
                </aside>
            </div>

            {banner}
        </>
    )
}