import { useLayoutEffect, useRef, useState } from 'react'
import type { TrackedGroup, TrackedItem } from '../data/types'
import {
    filterItems,
    isItemDone,
    statusOf,
    type FilterMode,
    type ItemStatus,
} from '../lib/checklist'
import { useProgress } from './useProgress'
import { useFlipReorder } from './useFlipReorder'

type UseChecklistPageOptions = {
    groups: TrackedGroup[]
    defaultGroupId?: string
    sortUnlockedFirst?: boolean
}

const STATUS_ORDER: Record<ItemStatus, number> = {
    done: 0,
    todo: 1,
    locked: 2,
}

function sortItemsByStatus(
    items: TrackedItem[],
    done: ReadonlySet<string>,
    exitingItems: Map<string, ItemStatus>,
): TrackedItem[] {
    const completionOrder = new Map([...done].map((id, index) => [id, index]))
    const getStatus = (item: TrackedItem) =>
        exitingItems.get(item.id) ?? statusOf(item, done)

    return [...items].sort((first, second) => {
        const firstStatus = getStatus(first)
        const secondStatus = getStatus(second)

        if (firstStatus !== secondStatus) {
            return STATUS_ORDER[firstStatus] - STATUS_ORDER[secondStatus]
        }

        if (firstStatus === 'done') {
            const firstOrder = completionOrder.get(first.id) ?? Number.MAX_SAFE_INTEGER
            const secondOrder = completionOrder.get(second.id) ?? Number.MAX_SAFE_INTEGER
            return firstOrder - secondOrder
        }

        return first.id.localeCompare(second.id, undefined, { numeric: true })
    })
}

export function useChecklistPage({
    groups,
    defaultGroupId,
    sortUnlockedFirst,
}: UseChecklistPageOptions) {
    const { done, toggleItem } = useProgress()
    const [selectedGroupId, setSelectedGroupId] = useState<string | null>(null)
    const [selectedItemId, setSelectedItemId] = useState<string | null>(null)
    const [search, setSearch] = useState('')
    const [mode, setMode] = useState<FilterMode>('all')
    const [exitingItems, setExitingItems] = useState(new Map<string, ItemStatus>())

    const group =
        groups.find((candidate) => candidate.id === selectedGroupId) ??
        groups.find((candidate) => candidate.id === defaultGroupId) ??
        groups[0]

    const filteredItems = filterItems(group.items, search, mode, done)
    // Keep completed items visible until their "todo" filter exit animation ends.
    const itemsStillExiting =
        mode === 'todo'
            ? group.items.filter(
                (item) =>
                    exitingItems.has(item.id) &&
                    isItemDone(item, done) &&
                    filterItems([item], search, 'all', done).length > 0,
            )
            : []

    const filteredItemIds = new Set(filteredItems.map((item) => item.id))
    const listItems = [
        ...filteredItems,
        ...itemsStillExiting.filter((item) => !filteredItemIds.has(item.id)),
    ]
    const visibleItems = sortUnlockedFirst
        ? sortItemsByStatus(listItems, done, exitingItems)
        : listItems
    const visibleItemsKey = visibleItems.map((item) => item.id).join('|')

    const selectedItem =
        visibleItems.find((item) => item.id === selectedItemId) ??
        visibleItems[0] ??
        null

    const registerRow = useFlipReorder(visibleItems.map((item) => item.id))
    const splitRef = useRef<HTMLDivElement>(null)

    useLayoutEffect(() => {
        const split = splitRef.current
        if (!split) return

        const selectedRow = split.querySelector<HTMLElement>('.row--selected')
        const detailPanel = split.querySelector<HTMLElement>('.card__detail')
        if (!selectedRow || !detailPanel) return

        const splitBounds = split.getBoundingClientRect()
        const rowBounds = selectedRow.getBoundingClientRect()
        const rowCenter = rowBounds.top - splitBounds.top + rowBounds.height / 2
        const maxOffset = Math.max(0, split.clientHeight - detailPanel.offsetHeight)
        const offset = Math.min(
            maxOffset,
            Math.max(0, rowCenter - detailPanel.offsetHeight / 2),
        )

        split.style.setProperty('--detail-offset', `${offset}px`)
    }, [group.id, selectedItem?.id, visibleItemsKey])

    function stopExiting(itemId: string) {
        setExitingItems((current) => {
            if (!current.has(itemId)) return current

            const next = new Map(current)
            next.delete(itemId)
            return next
        })
    }

    function selectGroup(groupId: string) {
        setSelectedGroupId(groupId)
        setSelectedItemId(null)
        setSearch('')
        setMode('all')
        setExitingItems(new Map())
    }

    function updateSearch(value: string) {
        setSearch(value)
        setExitingItems(new Map())
    }

    function updateMode(nextMode: FilterMode) {
        setMode(nextMode)
        setExitingItems(new Map())
    }

    function toggleChecklistItem(itemId: string) {
        const item = group.items.find((candidate) => candidate.id === itemId)
        const isCompletingInTodoMode =
            mode === 'todo' && item !== undefined && !isItemDone(item, done)

        if (item && isCompletingInTodoMode) {
            setExitingItems((current) =>
                new Map(current).set(itemId, statusOf(item, done)),
            )
        } else {
            stopExiting(itemId)
        }

        const objectives = item?.details?.objectives
        if (objectives) {
            const shouldMarkDone = !isItemDone(item, done)
            for (const objective of objectives) {
                if (done.has(objective.id) !== shouldMarkDone) {
                    toggleItem(objective.id)
                }
            }
        } else {
            toggleItem(itemId)
        }
    }

    return {
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
    }
}
