import ChecklistPage from "../components/ChecklistPage"
import StatCard from "../components/StatCard"
import { cigaretteCardCategory, collectibleCategories } from '../data/collectibles'
import { useProgress } from '../hooks/useProgress'
import {
    collectibleGroupStatus,
    isItemDone,
    statusOf,
    totalOf,
    type CollectibleGroupStatus,
    type ItemStatus,
} from '../lib/checklist'
import { countDone } from '../lib/completion'

const itemStatusNames: Record<ItemStatus, string> = {
    locked: 'Locked',
    done: 'Found',
    todo: 'Not found',
}

const collectibleStatusNames: Record<CollectibleGroupStatus, string> = {
    locked: 'Locked',
    inProgress: 'In progress',
    allFound: 'All items found',
}

export default function Collectibles() {
    const { done } = useProgress()

    return (
        <ChecklistPage
            eyebrow="Collectibles"
            title="Everything worth finding."
            subtitle="Tick off each discovery as you record it in the field."
            groups={collectibleCategories}
            pageProgressRingId="collectibles"
            sortUnlockedFirst
            searchPlaceholder="Search collectibles..."
            modeLabels={{ all: 'All collectibles', todo: 'Not found', done: 'Found' }}
            listTitle={(group) =>
                group.id === 'cigarette-cards'
                    ? 'Cigarette card collections'
                    : `${group.label} / ${group.name}`
            }
            statusLabel={(status) => itemStatusNames[status]}
            renderTile={(group, index) => {
                const status = collectibleGroupStatus(collectibleCategories, index, done)
                return (
                    <>
                        <span className="tile__label">{group.label}</span>
                        <span className="tile__name">{group.name}</span>
                        <span className={`tile__status tile__status--${status}`}>
                            {collectibleStatusNames[status]}
                        </span>
                    </>
                )
            }}
            renderStats={() => (
                <section className="stats stats-three" aria-label="Collectibles summary">
                    <StatCard
                        title={'Collectibles progress'}
                        items={[
                            {
                                label: '',
                                value: `${totalOf(collectibleCategories[0])} ${collectibleCategories[0].name} found`,
                                detail: 'This is a test',
                                tone: 'sage',
                            }
                        ]}
                    />
                    <StatCard
                        title={'Cigarette cards'}
                        items={[
                            {
                                label: '',
                                value: `${countDone([cigaretteCardCategory], done)} / ${totalOf(cigaretteCardCategory)} found`,
                                detail: 'Across all 12 collections',
                                tone: 'slate',
                            }
                        ]}
                    />
                </section>
            )}
            renderDetail={(item, _group, toggleMission) => {
                if (!item) {
                    return <p>Select a collectible to see its details.</p>
                }

                const isDone = isItemDone(item, done)
                const isLocked = !isDone && statusOf(item, done) === 'locked'

                return (
                    <>
                        <h3 className="detail__title">{item.name}</h3>
                        <span className="detail__badge">Collectible</span>

                        {item.tagline && <p className="detail__lead">{item.tagline}</p>}
                        {item.description && (
                            <p className="detail__text">{item.description}</p>
                        )}

                        {item.objectives && (
                            <section className="detail__section">
                                <p className="eyebrow eyebrow--gold">Cards in this collection</p>
                                <ul className="objectives">
                                    {item.objectives.map((objective) => (
                                        <li key={objective.id}>
                                            <label>
                                                <input
                                                    type="checkbox"
                                                    checked={done.has(objective.id)}
                                                    onChange={() => toggleMission(objective.id)}
                                                />
                                                {objective.text}
                                            </label>
                                        </li>
                                    ))}
                                </ul>
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
                        </div>
                    </>
                )
            }}
            listFooter={() => 
                'This needs to be replaced.'
            }
        />
    )
}