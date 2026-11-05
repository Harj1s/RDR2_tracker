import type { TrackedItem } from '../data/types'
import type { ItemStatus } from '../lib/checklist'

type ItemRowProps = {
    item: TrackedItem
    status: ItemStatus
    statusText: string
    medalSrc?: string
    checked: boolean
    selected: boolean
    exiting: boolean
    rowRef: (element: HTMLElement | null) => void
    onToggle: () => void
    onSelect: () => void
    onExitEnd: () => void
}

// One row in a ChecklistPage list: a checkbox plus a button that selects
// the item for the detail panel.
export default function ItemRow({
    item, status, statusText, medalSrc, checked, selected, exiting,
    rowRef, onToggle, onSelect, onExitEnd,
}: ItemRowProps) {
    const className = [
        'row',
        `row--${status}`,
        exiting && 'row--exiting',
        selected && 'row--selected',
    ].filter(Boolean).join(' ')

    return (
        <li
            ref={rowRef}
            className={className}
            onAnimationEnd={(event) => {
                // Ignore animations coming from child elements.
                if (event.target === event.currentTarget) onExitEnd()
            }}
        >
            <input
                type="checkbox"
                className="row__check"
                checked={checked}
                disabled={status === 'locked'}
                onChange={onToggle}
                aria-label={item.name}
            />
            <button
                type="button"
                className="row__select"
                aria-current={selected ? 'true' : undefined}
                onClick={onSelect}
            >
                <span className="row__text">
                    <span className="row__title">{item.name}</span>
                    <span className="row__sub">{item.subtitle}</span>
                </span>
                <span className="row__status">
                    {medalSrc && checked && (
                        <img className="row__medal" src={medalSrc} alt="Mission medal" />
                    )}
                    {statusText}
                </span>
            </button>
        </li>
    )
}