import { useState, type CSSProperties } from 'react'
import CheckListRow from '../components/CheckListRow.tsx'
import Meter from '../components/Meter.tsx'
import {
    collectibleCategories,
    type Collectible,
} from '../data/collectibles.ts'
import { useProgress } from '../hooks/useProgress.ts'

export default function Collectibles() {
    const { found, toggleCollectible } = useProgress()

    const [filter, setFilter] = useState('all')
    const [hideFound, setHideFound] = useState(false)

    const countFound = (items: Collectible[]) =>
        items.filter((item) => found.has(item.id)).length

    const allItems = collectibleCategories.flatMap((c) => c.items)
    const totalFound = countFound(allItems)

    const visibleCategories = 
        filter === 'all'
        ? collectibleCategories
        : collectibleCategories.filter((c) => c.id === filter)

    return (
        <>
            <section className="page-head">
                <p className="eyebrow eyebrow--red">Collectibles</p>
                <h2 className="page-title">Everything worth finding.</h2>
                <p className="page-subtitle">
                    Tick off each discovery as you record it in the field.
                </p>
            </section>

            {/* Summary */}
            <section className="card summary" aria-label="Collectibles summary">
                <div className="summary__total">
                    <p className="summary__count">
                        {totalFound} / {allItems.length}
                    </p>
                    <p className="summary__caption">Collectibles recorded</p>
                </div>

                <div className="summary__cats">
                    {collectibleCategories.map((category) => {
                        const done = countFound(category.items)
                        return (
                            <div
                                key={category.id}
                                className="summary__cat"
                                style={{ '--accent': category.color } as CSSProperties}
                            >
                                <p className="summary__cat-head">
                                    <span>{category.name}</span>
                                    <span>
                                        {done} / {category.items.length}
                                    </span>
                                </p>
                                <Meter
                                    value={done}
                                    max={category.items.length}
                                    label={category.name}
                                />
                            </div>
                        )
                    })}
                </div>
            </section>

            {/* Filters */}
            <div className="toolbar">
                <div className="tabs" role="group" aria-label="Filter by category">
                    <button
                        type="button"
                        className={filter === 'all' ? 'tab tab--active' : 'tab'}
                        aria-pressed={filter === 'all'}
                        onClick={() => setFilter('all')}
                    >
                        All
                    </button>
                    {collectibleCategories.map((category) => (
                        <button
                            key={category.id}
                            type="button"
                            className={filter === category.id ? 'tab tab--active' : 'tab'}
                            aria-pressed={filter === category.id}
                            onClick={() => setFilter(category.id)}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

                <label className="toggle">
                    <input
                        type="checkbox"
                        checked={hideFound}
                        onChange={(event) => setHideFound(event.target.checked)}
                    />
                    Hide recorded
                </label>
            </div>

            {/* Lists */}
            <div className="collect-grid">
                {visibleCategories.map((category) => {
                    const items = category.items.filter(
                        (item) => !hideFound || !found.has(item.id),
                    )
                    const done = countFound(category.items)

                    return (
                        <section
                            key={category.id}
                            className="card"
                            style={{ '--accent': category.color} as CSSProperties}
                        >
                            <header className="card__head">
                                <h3 className="card__title">{category.name}</h3>
                                <span className="card__tag">
                                    {done} / {category.items.length}
                                </span>
                            </header>

                            <Meter
                                value={done}
                                max={category.items.length}
                                label={`${category.name} progress`}
                            />

                            {items.length === 0 ? (
                                <p className="collect-empty">Everything here is recorded.</p>
                            ) : (
                                <ul className="checklist">
                                    {items.map((item) => (
                                        <CheckListRow
                                            key={item.id}
                                            label={item.name}
                                            detail={item.region}
                                            checked={found.has(item.id)}
                                            onToggle={() => toggleCollectible(item.id)}
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