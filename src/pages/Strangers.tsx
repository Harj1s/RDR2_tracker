import { Link } from 'react-router-dom'
import ChecklistPage from '../components/ChecklistPage'
import StatCard from '../components/StatCard'
import { strangerMissions, strangerStrands } from '../data/strangers'
import { missionChapters } from '../data/missions'
import { useProgress } from '../hooks/useProgress'
import { chapterStatus, currentGroupIndex, statusOf } from '../lib/checklist'
import type { ChapterStatus, ItemStatus } from '../lib/checklist'
import { countDone } from '../lib/completion'

// ---------- Labels ----------

const itemStatusNames: Record<ItemStatus, string> = {
    locked: 'Locked',
    done: 'Completed',
    todo: 'Not started',
}

const strangerStatusNames: Record<ChapterStatus, string> = {
    locked: 'Locked',
    complete: 'Complete',
    inProgress: 'In progress',
    todo: 'Not started',
}

// ---------- Page ----------

export default function StrangerMissions() {
    const { done, toggleItem } = useProgress()

    // The chapter the player is currently in. Used as the default tile.
    const current = missionChapters[currentGroupIndex(missionChapters, done)]

    return (
        <ChecklistPage
            eyebrow="Strangers / Stranger missions"
            title="Strangers and their stories."
            subtitle="Find out strangers stories and keep track of your progress."
            groups={strangerMissions}
            defaultGroupId={current.id}
            sortUnlockedFirst
            searchPlaceholder="Search strangers and their missions..."
            modeLabels={{ all: 'All strangers', todo: 'Incomplete', done: 'Completed' }}
            listTitle={(group) => `${group.label} / ${group.name}`}
            statusLabel={(status) => itemStatusNames[status]}
            listFooter={() =>
                'Mission order may vary. This view includes representative missions.'
            }

            // One chapter tile in the selector row
            renderTile={(group, index) => {
                const status = chapterStatus(strangerMissions, index, done)
                return (
                    <>
                        <span className="tile__label">{group.label}</span>
                        <span className="tile__name">{group.name}</span>
                        <span className={`tile__status tile__status--${status}`}>
                            {strangerStatusNames[status]}
                        </span>
                    </>
                )
            }}

            // Summary strip above the tiles (3 cards to match .stats--three)
            renderStats={() => (
                <section className="stats stats--three" aria-label="Story summary">
                    <StatCard
                        title={'Stranger missions completed'}
                        items={[
                            {
                                label: '',
                                value: `${countDone(strangerMissions, done)} / ${strangerMissions.reduce((sum, chapter) => sum + chapter.items.length, 0)}`,
                                detail: 'Across all stranger strands',
                                tone: 'red',
                            }
                        ]}
                    />
                    <StatCard
                        title={'Stranger strands completed'}
                        items={[
                            {
                                label: '',
                                value: `${strangerStrands.filter((strand) =>
                                    strand.items.every((item) => done.has(item.id)),
                                ).length} / ${strangerStrands.length}`,
                                detail: 'Out of all stranger strands',
                                tone: 'red',
                            }
                        ]}
                    />
                    <StatCard
                        title={'Current chapter'}
                        items={[
                            {
                                label: '',
                                value: current.name,
                                detail: `${current.label} · Arthur Morgan`,
                                tone: 'dark',
                            }
                        ]}
                    />
                </section>
            )}

            // Right-hand panel for the selected mission
            renderDetail={(item, _group, toggleMission) => {
                if (!item) {
                    return <p>Select a mission to see its details.</p>
                }

                const isDone = done.has(item.id)
                const isLocked = !isDone && statusOf(item, done) === 'locked'
                const hasGold = item.gold && item.gold.length > 0

                return (
                    <>
                        <h3 className="detail__title">{item.name}</h3>
                        <span className="detail__badge">Story mission</span>

                        {item.tagline && <p className="detail__lead">{item.tagline}</p>}
                        {item.description && (
                            <p className="detail__text">{item.description}</p>
                        )}

                        {hasGold && (
                            <section className="detail__section">
                                <p className="eyebrow eyebrow--gold">Gold medal objectives</p>
                                <ul className="objectives">
                                    {item.gold!.map((objective) => (
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
                                disabled={isLocked}
                                onClick={() => toggleMission(item.id)}
                            >
                                {isLocked ? 'Locked' : isDone ? 'Mark incomplete' : 'Mark completed'}
                            </button>
                            <Link to="/map" className="button button--ghost">
                                Show meeting point
                            </Link>
                        </div>
                    </>
                )
            }}
        />
    )
}