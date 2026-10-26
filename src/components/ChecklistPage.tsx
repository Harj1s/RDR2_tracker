import type { ReactNode } from 'react'
import { Search } from 'lucide-react'
import type { TrackedGroup, TrackedItem } from '../data/types'
import type { ItemStatus } from '../lib/checklist'

import { useProgress } from '../hooks/useProgress'
import { statusOf } from '../lib/checklist'



type ChecklistPageProps = {
    eyebrow: string
    title: string
    subtitle: string
    groups: TrackedGroup[]

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

export default function ChecklistPage({
    eyebrow, title, subtitle, groups,
    searchPlaceholder, modeLabels,
    listTitle, renderTile, renderDetail, statusLabel,
    renderStats, listFooter, banner,
}: ChecklistPageProps) {
    const { done, toggleItem } = useProgress()
    const group = groups[0] // Step 3 makes this selectable

    return (
        <>
            <section className="page-head">
                <p className="eyebrow eyebrow--red">{eyebrow}</p>
                <h2 className="page-title">{title}</h2>
                <p className="page-subtitle">{subtitle}</p>
            </section>

            <div className="tiles">
                {groups.map((g, index) => (
                    <button key={g.id} type="button" className="tile">
                        {renderTile(g, index)}
                    </button>
                ))}
            </div>

            {renderStats?.()}

            <div className="searchbar">
                <label className="searchbar__field">
                    <Search size={16} strokeWidth={1.5} aria-hidden="true" />
                    <input type="search" placeholder={searchPlaceholder} />
                </label>
                <div className="searchbar__modes">
                    <button type="button" className="mode mode--active">
                        {modeLabels.all}
                    </button>
                    <button type="button" className="mode mode--active">
                        {modeLabels.todo}
                    </button>
                    <button type="button" className="mode mode--active">
                        {modeLabels.done}
                    </button>
                </div>
            </div>
            
            <div className="split">
                <section className="card list">
                    <header className="list__head">
                        <h3 className="card__title">{listTitle(group)}</h3>
                    </header>

                    <ul className="list__rows">
                        {group.items.map((item) => {
                            const status = statusOf(item, group, done)

                            return (
                                <li key={item.id} className={`row row--${status}`}>
                                    <input
                                        type="checkbox"
                                        className="row__check"
                                        checked={done.has(item.id)}
                                        onChange={() => toggleItem(item.id)}
                                        aria-label={item.name}
                                    />
                                    <div>
                                        <p className="row__title">{item.name}</p>
                                        <p className="row__sub">{item.subtitle}</p>
                                    </div>
                                    <span className="row__status">
                                        {statusLabel(status)}
                                    </span>
                                </li>
                            )
                        })}
                    </ul>

                    {listFooter && (
                        <footer className="list__foot">{listFooter(group)}</footer>
                    )}
                </section>

                <aside className="card">
                    {renderDetail(group.items[0] ?? null, group)}
                </aside>
            </div>

            {banner}
        </>
    )
}