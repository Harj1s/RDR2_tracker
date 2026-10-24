import ChecklistPage from '../components/ChecklistPage'
import { missionChapters } from '../data/missions'

export default function Missions() {
    return (
        <ChecklistPage
            eyebrow="Missions"
            title="The story so far."
            subtitle="Mark each story mission as you finish it, chapter by chapter."
            countCaption="Story missions completed"
            hideLabel="Hide completed"
            groups={missionChapters}
        />
    )
}