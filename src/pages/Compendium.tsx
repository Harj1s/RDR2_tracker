import ChecklistPage from '../components/ChecklistPage'
import StatCard from '../components/StatCard'
import { compendiumCategories } from '../data/compendium'
import type { ItemStatus, CollectibleGroupStatus } from '../lib/checklist'

const itemStatusNames: Record<ItemStatus, string> = {
    locked: 'Locked',
    done: 'Found',
    todo: 'Not found',
}

export default function Compendium() {
    return (
        <ChecklistPage
            eyebrow="Compendium"
            title="Animals and shit"
            subtitle="See how many animals you have seen."
            groups={compendiumCategories}
            pageProgressRingId="compendium"
            sortUnlockedFirst
            searchPlaceholder='Search...'
            modeLabels={{ all: 'All items', todo: 'Incomplete', done: 'Completed' }}
            listTitle={(group) => `${group.details?.label} / ${group.name}`}
            statusLabel={(status) => itemStatusNames[status]}
            renderTile={() => null}
            renderDetail={() => null}
        />
    )
}