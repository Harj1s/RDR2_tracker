import ChecklistPage from '../components/ChecklistPage'
import { compendiumCategories } from '../data/compendium'
import type { ItemStatus } from '../lib/checklist'
import { useNavigate } from 'react-router-dom'

const itemStatusNames: Record<ItemStatus, string> = {
    locked: 'Locked',
    done: 'Found',
    todo: 'Not found',
}

export default function Compendium() {
    const navigate = useNavigate()

    return (
        <ChecklistPage
            eyebrow="Compendium"
            title="Animals and shit"
            subtitle="See how many animals you have seen."
            groups={compendiumCategories}
            pageProgressRingId="compendium"
            searchPlaceholder='Search...'
            modeLabels={{ all: 'All items', todo: 'Incomplete', done: 'Completed' }}
            listTitle={(group) => group.name}
            statusLabel={(status) => itemStatusNames[status]}
            onOpenDetail={(item) => navigate(`/compendium/${item.id}`)}
            renderTile={() => null}
            renderDetail={() => null}
            getGroupLayout={() => ({
                rows: 'grid',
                showDetail: false
            })}
        />
    )
}