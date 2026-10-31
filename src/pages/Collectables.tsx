import ChecklistPage from "../components/ChecklistPage"
import StatCard from "../components/StatCard"
import { collectableCategories } from '../data/collectables'
import { useProgress } from '../hooks/useProgress'
import { collectableGroupStatus, totalOf, statusOf,
    type ItemStatus, type CollectableGroupStatus } from '../lib/checklist'

const itemStatusNames: Record<ItemStatus, string> = {
    locked: 'Locked',
    done: 'Found',
    next: 'Not found',
    todo: 'Not found',
}

const collectableStatusNames: Record<CollectableGroupStatus, string> = {
    locked: 'Locked',
    inProgress: 'In progress',
    allFound: 'All items found',
}

export default function Collectables() {
    const { done, toggleItem } = useProgress()

    return (
        <ChecklistPage
            eyebrow="Collectables"
            title="Everything worth finding."
            subtitle="Tick off each discovery as you record it in the field."
            groups={collectableCategories}
            sortUnlockedFirst
            searchPlaceholder="Search collectables..."
            modeLabels={{ all: 'All collectables', todo: 'Not found', done: 'Found' }}
            listTitle={(group) => `${group.label} / ${group.name}`}
            statusLabel={(status) => itemStatusNames[status]}
            renderTile={(group, index) => {
                const status = collectableGroupStatus(collectableCategories, index, done)
                return (
                    <>
                        <span className="tile__label">{group.label}</span>
                        <span className="tile__name">{group.name}</span>
                        <span className={`tile__status tile__status--${status}`}>
                            {collectableStatusNames[status]}
                        </span>
                    </>
                )
            }}
            renderStats={() => (
                <section className="stats stats-three" aria-label="Collectables summary">
                    <StatCard
                        label="Collectables progress"
                        value={`${totalOf(collectableCategories[0])} ${collectableCategories[0].name} found`}
                        detail="This is a test"
                        tone="sage"
                    />
                    <StatCard
                        label="Collectables 2 progress"
                        value={`${totalOf(collectableCategories[1])} ${collectableCategories[1].name} found`}
                        detail="This is a test 2"
                        tone="slate"
                    />
                </section>
            )}
            renderDetail={(item, group, toggleMission) => {
                if (!item) {
                    return <p>Select a collectable to see its details.</p>
                }

                const isDone = done.has(item.id)
                const isLocked = !isDone && statusOf(item, group, done) === 'locked'

                return (
                    <>
                        <h3 className="detail__title">{item.name}</h3>
                        <span className="detail__badge">Collectable</span>

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