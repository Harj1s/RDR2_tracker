import ChecklistPage from '../components/ChecklistPage'
import { missionChapters } from '../data/missions'
import { useProgress } from '../hooks/useProgress'
import { chapterStatus } from '../lib/checklist'

export default function Missions() {
    const { done } = useProgress()

    return (
        <ChecklistPage
            eyebrow="Story / chapter journal"
            title="The story so far."
            subtitle="Mark each story mission as you finish it, chapter by chapter."
            groups={missionChapters}
            searchPlaceholder="Search this chapter..."
            modeLabels={{ all: 'All missions', todo: 'Incomplete', done: 'Completed' }}
            listTitle={(g) => g.name}
            renderTile={(g, i) => (
                <span>
                    {g.label} · {g.name} · {chapterStatus(missionChapters, i, done)}
                </span>
            )}
            renderDetail={(item) => <p>{item ? item.name : 'Select a mission'}</p>}
            statusLabel={(status) => status}
        />
    )
}