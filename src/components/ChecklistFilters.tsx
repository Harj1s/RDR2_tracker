import { Search } from 'lucide-react'
import type { FilterMode } from '../lib/checklist'

type ChecklistFiltersProps = {
    search: string
    mode: FilterMode
    searchPlaceholder: string
    modeLabels: Record<FilterMode, string>
    onSearchChange: (value: string) => void
    onModeChange: (mode: FilterMode) => void
}

const FILTER_MODES: FilterMode[] = ['all', 'todo', 'done']

export default function ChecklistFilters({
    search,
    mode,
    searchPlaceholder,
    modeLabels,
    onSearchChange,
    onModeChange,
}: ChecklistFiltersProps) {
    return (
        <div className="searchbar">
            <label className="searchbar__field">
                <Search size={16} strokeWidth={1.5} aria-hidden="true" />
                <input
                    type="search"
                    placeholder={searchPlaceholder}
                    aria-label={searchPlaceholder}
                    value={search}
                    onChange={(event) => onSearchChange(event.target.value)}
                />
            </label>
            <div className="searchbar__modes">
                {FILTER_MODES.map((filterMode) => (
                    <button
                        key={filterMode}
                        type="button"
                        className={filterMode === mode ? 'mode mode--active' : 'mode'}
                        aria-pressed={filterMode === mode}
                        onClick={() => onModeChange(filterMode)}
                    >
                        {modeLabels[filterMode]}
                    </button>
                ))}
            </div>
        </div>
    )
}
