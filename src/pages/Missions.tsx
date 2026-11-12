import { Link } from 'react-router-dom'
import ChecklistPage from '../components/ChecklistPage'
import StatCard from '../components/StatCard'
import { missionChapters } from '../data/missions'
import { useProgress } from '../hooks/useProgress'
import { chapterStatus, currentGroupIndex, statusOf } from '../lib/checklist'
import type { ChapterStatus, ItemStatus } from '../lib/checklist'
import { countDone } from '../lib/completion'
import { countMedals, getMedalType } from '../lib/medals'

import bronzeMedal from '../assets/icons/Bronze Medal.png'
import silverMedal from '../assets/icons/Silver Medal.png'
import goldMedal from '../assets/icons/Gold Medal.png'

// ---------- Labels ----------

const itemStatusNames: Record<ItemStatus, string> = {
    locked: 'Locked',
    done: 'Completed',
    todo: 'Not started',
}

const chapterStatusNames: Record<ChapterStatus, string> = {
    locked: 'Locked',
    complete: 'Complete',
    inProgress: 'In progress',
    todo: 'Not started',
}

// ---------- Page ----------

export default function Missions() {
    const { done, toggleItem } = useProgress()

    // The chapter the player is currently in. Used as the default tile.
    const current = missionChapters[currentGroupIndex(missionChapters, done)]

    return (
        <ChecklistPage
            eyebrow="Story / chapter journal"
            title="The story so far."
            subtitle="Mark each story mission as you finish it, chapter by chapter."
            groups={missionChapters}
            defaultGroupId={current.id}
            pageProgressRingId="missions"
            sortUnlockedFirst
            searchPlaceholder="Search this chapter..."
            modeLabels={{ all: 'All missions', todo: 'Incomplete', done: 'Completed' }}
            listTitle={(group) => `${group.label} / ${group.name}`}
            statusLabel={(status) => itemStatusNames[status]}
            listFooter={() => 
                'Mission order may vary. This view includes representative missions.'
            }

            // One chapter tile in the selector row
            tileClassName={(_group, index) =>
                chapterStatus(missionChapters, index, done) === 'locked'
                    ? 'tile--locked'
                    : undefined
            }
            renderTile={(group, index) => {
                const status = chapterStatus(missionChapters, index, done)
                const medalMissions = group.items.filter((item) => item.gold?.length)
                return (
                    <>
                        <div className="tile__text">
                            <span className="tile__label">{group.label}</span>
                            <span className="tile__name">{group.name}</span>
                            <span className={`tile__status tile__status--${status}`}>
                                {chapterStatusNames[status]}
                            </span>
                        </div>

                        {status !== 'locked' && (
                            <div className="tile__medals">
                                {[
                                    { type: 'gold', image: goldMedal },
                                    { type: 'silver', image: silverMedal },
                                    { type: 'bronze', image: bronzeMedal },
                                ].map(({ type, image }) => {
                                    const count = medalMissions.filter(
                                        (item) => getMedalType(item, done) === type,
                                    ).length

                                    return (
                                        <div className="tile__medal-row" key={type}>
                                            <img src={image} alt="" />
                                            <span>{count}</span>
                                        </div>
                                    )
                                })}
                            </div>
                        )}
                    </>
                )
            }}

            getMedalType={getMedalType}

            // Summary strip above the tiles (3 cards to match .stats--three)
            renderStats={() => (
                <section className="stats--three" aria-label="Story summary">
                    <StatCard
                        title="Mission progress"
                        items={[
                            {
                                label: 'Chapter missions completed',
                                value: `${countDone([current], done)} / ${current.items.length}`,
                                detail: `In ${current.name} (${current.label})`,
                                tone: 'red'
                            },
                            { 
                                label: 'Total missions completed',
                                value: `${countDone(missionChapters, done)} / ${missionChapters.reduce((sum, chapter) => sum + chapter.items.length, 0)}`,
                                detail: 'Across all chapters',
                                tone: 'sage'
                            }
                        ]}

                    />
                    <StatCard
                        title="Medal progress"
                        items={[
                            { 
                                label: 'Gold Medals',
                                value: `${countMedals(missionChapters, done, 'gold')}`,
                                detail: '',
                                tone: 'gold',
                                medalSrc: goldMedal,
                            },
                            { 
                                label: 'Silver Medals',
                                value: `${countMedals(missionChapters, done, 'silver')}`,
                                detail: '',
                                tone: 'silver',
                                medalSrc: silverMedal,
                            },
                            { 
                                label: 'Bronze Medals',
                                value: `${countMedals(missionChapters, done, 'bronze')}`,
                                detail: '',
                                tone: 'bronze',
                                medalSrc: bronzeMedal,
                            },
                        ]}
                    />
                    <StatCard
                        title="Mission progress"
                        items={[
                            { 
                                label: 'Current chapter',
                                value: current.name,
                                detail: `${current.label} · Arthur Morgan`,
                                tone: 'dark'
                            },
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