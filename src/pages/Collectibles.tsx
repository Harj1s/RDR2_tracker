import ChecklistPage from "../components/ChecklistPage"
import StatCard from "../components/StatCard"
import { collectibleCategories } from '../data/collectibles'
import { useProgress } from '../hooks/useProgress'
import { collectibleGroupStatus, totalOf, statusOf,
    type ItemStatus, type CollectibleGroupStatus } from '../lib/checklist'

const itemStatusNames: Record<ItemStatus, string> = {
    locked: 'Locked',
    done: 'Found',
    next: 'Not found',
    todo: 'Not found',
}

const collectibleStatusNames: Record<CollectibleGroupStatus, string> = {
    locked: 'Locked',
    inProgress: 'In progress',
    allFound: 'All items found',
}

export default function Collectibles() {
    const { done, toggleItem } = useProgress()

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
            listTitle={(group) => `${group.label} / ${group.name}`}
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
                        label="Collectibles progress"
                        value={`${totalOf(collectibleCategories[0])} ${collectibleCategories[0].name} found`}
                        detail="This is a test"
                        tone="sage"
                    />
                    <StatCard
                        label="Collectibles 2 progress"
                        value={`${totalOf(collectibleCategories[1])} ${collectibleCategories[1].name} found`}
                        detail="This is a test 2"
                        tone="slate"
                    />
                </section>
            )}
            renderDetail={(item, group, toggleMission) => {
                if (!item) {
                    return <p>Select a collectible to see its details.</p>
                }

                const isDone = done.has(item.id)
                const isLocked = !isDone && statusOf(item, group, done) === 'locked'

                return (
                    <>
                        <h3 className="detail__title">{item.name}</h3>
                        <span className="detail__badge">Collectible</span>

                        {item.tagline && <p className="detail__lead">{item.tagline}</p>}
                        {item.description && (
                            <p className="detail__text">{item.description}</p>
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