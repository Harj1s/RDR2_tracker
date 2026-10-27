import { Link } from 'react-router-dom'
import ChecklistPage from '../components/ChecklistPage'
import Statcard from '../components/StatCard'
import { missionChapters } from '../data/missions'
import { useProgress } from '../hooks/useProgress'
import { countDone } from '../lib/completion'
import { chapterStatus, currentGroupIndex, goldEarned } from '../lib/checklist'
import type { ChapterStatus, ItemStatus } from '../lib/checklist'
import StatCard from '../components/StatCard'

const itemStatusNames: Record<ItemStatus, string> = {
    locked: 'Locked',
    done: 'Completed',
    next: 'Next up',
    todo: 'Not started',
}

const chapterStatusNames: Record<ChapterStatus, string> = {
    locked: 'Locked',
    complete: 'Complete',
    inProgress: 'In progress',
    todo: 'Not started',
}

export default function Missions() {
    const { done, toggleItem } = useProgress()

    const current = missionChapters[currentGroupIndex(missionChapters, done)]

    return (
        <ChecklistPage
            eyebrow="Story / chapter journal"
            title="The story so far."
            subtitle="Mark each story mission as you finish it, chapter by chapter."
            groups={missionChapters}
            defaultGroupId={current.id}
            searchPlaceholder="Search this chapter..."
            modeLabels={{ all: 'All missions', todo: 'Incomplete', done: 'Completed' }}
            listTitle={(group) => `${group.label} / ${group.name}`}
            statusLabel={(status) => itemStatusNames[status]}
            renderTile={(group, index) => {
                const status = chapterStatus(missionChapters, index, done)
                return (
                    <>
                        <span className="tile__label">{group.label}</span>
                        <span className="tile__name">{group.name}</span>
                        <span className={`tile__status tile__status--${status}`}>
                            {chapterStatusNames[status]}
                        </span>
                    </>
                )
            }}
            renderStats={() => (
                <section className="stats stats-three" aria-label="Story summary">
                    <StatCard
                        label="Story progress"
                        value={`${goldEarned(missionChapters, done)} earned`}
                        detail="Gold rush achievement · goal 70"
                        tone="gold"
                    />
                    <StatCard
                        label="Current chapter"
                        value={current.name}
                        detail={`${current.label} · Arthur Morgan`}
                        tone="dark"
                    />
                </section>
            )}
            renderDetail={(item) => {
                if (!item) {
                    return <p>Select a mission to see its details.</p>
                }

                const isDone = done.has(item.id)

                return (
                    <>
                        <h3 className="detail__title">{item.name}</h3>
                        <span className="detail__badge">Story mission</span>

                        {item.tagline && <p className="detail__lead">{item.tagline}</p>}
                        {item.description && (
                            <p className="detail__text">{item.description}</p>
                        )}

                        {item.gold && item.gold.length > 0 && (
                            <section className="detail__section">
                                <p className="eyebrow eyebrow--gold">Gold medal objectives</p>
                                <ul className="objectives">
                                    {item.gold.map((objective) => (
                                        <li key={objective.id}>
                                            <label>
                                                <input
                                                    type="checkbox"
                                                    checked={done.has(objective.id)}
                                                    onChange={() => toggleItem(objective.id)}
                                                />
                                                {objective.text}
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                                <p className="detail__note">
                                    Gold is optional for 100% Total Completion.
                                </p>
                            </section>
                        )}

                        <div className="detail__actions">
                            <button
                                type="button"
                                className="button"
                                onClick={() => toggleItem(item.id)}
                            >
                                {isDone ? 'Mark incomplete' : 'Mark completed'}
                            </button>
                            <Link to="/map" className="button button--ghost">
                                Show meeting point
                            </Link>
                        </div>
                    </>
                )
            }}
            listFooter={() => 
                'Mission order may vary. This view includes representative missions.'
            }
        />
    )
}