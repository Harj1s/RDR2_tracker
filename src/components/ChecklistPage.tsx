import type { ReactNode } from 'react'
import type { TrackedGroup, TrackedItem } from '../data/types'
import type { FilterMode, ItemStatus } from '../lib/checklist'
import type { MedalType } from '../lib/medals'
import { isItemDone, statusOf } from '../lib/checklist'
import { useChecklistPage } from '../hooks/useChecklistPage'
import PageHead from './PageHead'
import ItemRow from './ItemRow'
import SmallerPicture from './SmallerPicture'
import ChecklistFilters from './ChecklistFilters'

import bronzeMedal from '../assets/icons/Bronze Medal.png'
import silverMedal from '../assets/icons/Silver Medal.png'
import goldMedal from '../assets/icons/Gold Medal.png'

type ChecklistGroupLayout = {
    rows: 'list' | 'grid'
    showDetail: boolean
}

type ChecklistPageProps = {
    eyebrow: string
    title: string
    subtitle: string
    groups: TrackedGroup[]
    defaultGroupId?: string
    sortUnlockedFirst?: boolean
    pageProgressRingId?: string
    searchPlaceholder: string
    modeLabels: Record<FilterMode, string>
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
    getMedalType?: (
        item: TrackedItem,
        done: ReadonlySet<string>,
    ) => MedalType | undefined
    tileClassName?: (group: TrackedGroup, index: number) => string | undefined
    getGroupLayout?: (group: TrackedGroup) => ChecklistGroupLayout
}

export default function ChecklistPage({
    eyebrow,
    title,
    subtitle,
    groups,
    defaultGroupId,
    sortUnlockedFirst,
    pageProgressRingId,
    searchPlaceholder,
    modeLabels,
    listTitle,
    renderTile,
    renderDetail,
    statusLabel,
    renderStats,
    listFooter,
    banner,
    getMedalType,
    tileClassName,
    getGroupLayout,
}: ChecklistPageProps) {
    const {
        done,
        exitingItems,
        group,
        mode,
        registerRow,
        search,
        selectedItem,
        setSelectedItemId,
        splitRef,
        toggleChecklistItem,
        selectGroup,
        stopExiting,
        updateMode,
        updateSearch,
        visibleItems,
    } = useChecklistPage({
        groups,
        defaultGroupId,
        sortUnlockedFirst,
        storageKey: pageProgressRingId,
    })

    const groupLayout = getGroupLayout?.(group) ?? {
            rows: 'list',
            showDetail: true,
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
                    {groups.map((tileGroup, index) => {
                        const isActive = tileGroup.id === group.id
                        const tileClasses = [
                            'tile',
                            isActive && 'tile--active',
                            tileClassName?.(tileGroup, index),
                        ].filter(Boolean).join(' ')

                        return (
                            <button
                                key={tileGroup.id}
                                type="button"
                                className={tileClasses}
                                aria-pressed={isActive}
                                onClick={() => selectGroup(tileGroup.id)}
                            >
                                {renderTile(tileGroup, index)}
                            </button>
                        )
                    })}
                </div>
            </div>

            <ChecklistFilters
                search={search}
                mode={mode}
                searchPlaceholder={searchPlaceholder}
                modeLabels={modeLabels}
                onSearchChange={updateSearch}
                onModeChange={updateMode}
            />

            <div className={`split${groupLayout.showDetail ? '' : ' split--single'}`} ref={splitRef}>
                <section className="card list">
                    <header className="list__head">
                        <h3 className="card__title">{listTitle(group)}</h3>
                    </header>

                    {visibleItems.length === 0 ? (
                        <p className="list__empty">Nothing matches your search.</p>
                    ) : (
                        <ul className={[
                            'list__rows',
                            groupLayout.rows === 'grid' && 'list__rows--grid',
                            groupLayout.rows === 'grid' && `list__rows--grid--${group.id}`,
                        ].filter(Boolean).join(' ')}>
                            {visibleItems.map((item) => {
                                const status = statusOf(item, done)
                                const medalType = getMedalType?.(item, done)
                                const medalSrc =
                                    medalType === 'gold' ? goldMedal
                                    : medalType === 'silver' ? silverMedal
                                    : medalType === 'bronze' ? bronzeMedal
                                    : undefined

                                return (
                                    <ItemRow
                                        key={item.id}
                                        item={item}
                                        status={status}
                                        statusText={statusLabel(status)}
                                        medalSrc={medalSrc}
                                        checked={isItemDone(item, done)}
                                        selected={item.id === selectedItem?.id}
                                        exiting={
                                            exitingItems.has(item.id) &&
                                            isItemDone(item, done)
                                        }
                                        rowRef={registerRow(item.id)}
                                        onToggle={() => toggleChecklistItem(item.id)}
                                        onSelect={() => setSelectedItemId(item.id)}
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

                {groupLayout.showDetail && (
                    <aside className="card__detail">
                        {renderDetail(selectedItem, group, toggleChecklistItem)}
                    </aside>
                )}
            </div>

            {banner && <aside className="banner">{banner}</aside>}
        </>
    )
}
