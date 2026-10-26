import { useState, type CSSProperties } from 'react'
import ChecklistRow from './ChecklistRow'
import Meter from './Meter'
import { useProgress } from '../hooks/useProgress'
import { countDone, countTotal } from '../lib/completion'
import { totalOf } from '../lib/checklist'
import type { TrackedGroup } from '../data/types'

type ChecklistPageProps = {
    eyebrow: string
    title: string
    subtitle: string
    /** Caption under the big count, e.g. "Collectibles recorded". */
    countCaption: string
    /** Label for the "hide done" switch, e.g. "Hide recorded". */
    hideLabel: string
    groups: TrackedGroup[]
}

// One page component for every checklist in the app.
export default function ChecklistPage({
    eyebrow,
    title,
    subtitle,
    countCaption,
    hideLabel,
    groups,
}: ChecklistPageProps) {
    const { done, toggleItem } = useProgress()
    const [filter, setFilter] = useState('all')
    const [hideDone, setHideDone] = useState(false)

    const visibleGroups = 
        filter === 'all' ? groups : groups.filter((group) => group.id === filter)

        return (
            <>
                <section className="page-head">
                    <p className="eyebrow eyebrow--red">{eyebrow}</p>
                    <h2 className="page-title">{title}</h2>
                    <p className="page-subtitle">{subtitle}</p>
                </section>

                {/* Summary */}
                <section className="card summary" aria-label={`${eyebrow} summary`}>
                    <div className="summary__total">
                        <p className="summary__count">
                            {countDone(groups, done)} / {countTotal(groups)}
                        </p>
                        <p className="summary__caption">{countCaption}</p>
                    </div>

                    <div className="summary__cats">
                        {groups.map((group) => {
                            const count = countDone([group], done)
                            return (
                                <div
                                    key={group.id}
                                    className="summary__cat"
                                    style={{ '--accent': group.color } as CSSProperties}
                                >
                                    <p className="summary__cat-head">
                                        <span>{group.name}</span>
                                        <span>
                                            {count} / {totalOf(group)}
                                        </span>
                                    </p>
                                    <Meter value={count} max={totalOf(group)} label={group.name} />
                                </div>
                            )
                        })}
                    </div>
                </section>

                {/* Filters */}
                <div className="toolbar">
                    <div className="tabs" role="group" aria-label="Filter">
                        <button
                            type="button"
                            className={filter === 'all' ? 'tab tab--active' : 'tab'}
                            aria-pressed={filter === 'all'}
                            onClick={() => setFilter('all')}
                        >
                            All
                        </button>
                        {groups.map((group) => (
                            <button
                                key={group.id}
                                type="button"
                                className={filter === group.id ? 'tab tab--active' : 'tab'}
                                aria-pressed={filter === group.id}
                                onClick={() => setFilter(group.id)}
                            >
                                {group.name}
                            </button>
                        ))}
                    </div>

                    <label className="toggle">
                        <input
                            type="checkbox"
                            checked={hideDone}
                            onChange={(event) => setHideDone(event.target.checked)}
                        />
                        {hideLabel}
                    </label>
                </div>

                {/* Lists */}
                <div className="collect-grid">
                    {visibleGroups.map((group) => {
                        const items = group.items.filter(
                            (item) => !hideDone || !done.has(item.id),
                        )
                        const count = countDone([group], done)

                        return (
                            <section
                                key={group.id}
                                className="card"
                                style={{ '--accent': group.color } as CSSProperties}
                            >
                                <header className="card__head">
                                    <h3 className="card__title">{group.name}</h3>
                                    <span className="card__tag">
                                        {count} / {totalOf(group)}
                                    </span>
                                </header>

                                <Meter
                                    value={count}
                                    max={totalOf(group)}
                                    label={`${group.name} progress`}
                                />

                                {items.length === 0 ? (
                                    <p className="collect-empty">Everything here is done.</p>
                                ) : (
                                    <ul className="checklist">
                                        {items.map((item) => (
                                            <ChecklistRow
                                                key={item.id}
                                                label={item.name}
                                                detail={item.description}
                                                checked={done.has(item.id)}
                                                onToggle={() => toggleItem(item.id)}
                                            />
                                        ))}
                                    </ul>
                                )}
                            </section>
                        )
                    })}
                </div>
            </>
        )
}