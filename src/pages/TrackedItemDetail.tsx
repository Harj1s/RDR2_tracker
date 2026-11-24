import { ArrowLeft, MapPin } from 'lucide-react'
import { useNavigate, useParams } from 'react-router-dom'
import type { TrackedGroup, TrackedItem } from '../data/types'
import { useProgress } from '../hooks/useProgress'
import { isItemDone, statusOf } from '../lib/checklist'

type TrackedItemDetailProps = {
    groups: TrackedGroup[]
    backTo: string
    sectionLabel: string
}

function mapPoint(location: string): { x: number; y: number } {
    const text = location.toLowerCase()

    if (/new austin|rio bravo|cholla springs|gaptooth|hennigan/.test(text)) {
        return { x: 118, y: 242 }
    }
    if (/lemoyne|scarlett|bluewater|bayou/.test(text)) {
        return { x: 423, y: 197 }
    }
    if (/west elizabeth|big valley|tall trees/.test(text)) {
        return { x: 259, y: 164 }
    }
    if (/new hanover|heartlands|cumberland|roanoke/.test(text)) {
        return { x: 360, y: 135 }
    }
    if (/ambarino|grizzlies|o'creagh/.test(text)) {
        return { x: 267, y: 66 }
    }
    return { x: 295, y: 150 }
}

function RangeMap({ location }: { location: string }) {
    const hasLocation = location !== 'No fixed location'
    const point = mapPoint(location)

    return (
        <figure className="item-map">
            <div className="item-map__frame">
                <svg
                    className="item-map__art"
                    viewBox="0 0 560 320"
                    role="img"
                    aria-label={`Approximate range map${hasLocation ? `: ${location}` : ''}`}
                >
                    <rect width="560" height="320" className="item-map__paper" />
                    <path
                        className="item-map__land"
                        d="M37 33 103 20l39 20 57-10 48 18 42-11 38 26 61-16 42 17 53-8 43 40-12 37 18 33-27 31 4 43-34 25-42-9-35 32-49-12-47 15-37-22-44 11-27-25-47 8-29-28-39 4-22-35-41-12 5-35-31-34 17-28-8-34Z"
                    />
                    <path className="item-map__river" d="M80 82c61 9 59 54 112 53s54-42 102-34 48 61 97 55 59-42 103-29" />
                    <path className="item-map__river item-map__river--minor" d="M198 135c-4 40 14 48 7 78s-29 31-31 58" />
                    <path className="item-map__border" d="M204 44 191 119l19 57-20 62 26 50M332 55l-18 60 17 57-4 71M100 171l77-8 55 14 80-5 59 18 99-7" />
                    <path className="item-map__contour" d="M104 79c25-20 55-16 76 1m-56 12c21-15 44-12 62 2m99-42c21-16 48-15 66 1m-57 14c19-12 37-10 51 3M363 94c20-17 46-16 64 1m-38 15c15-12 30-11 42 1M251 219c20-14 40-12 57 2m-43 13c14-10 28-8 38 2" />
                    <text x="275" y="39" className="item-map__label">AMBARINO</text>
                    <text x="364" y="120" className="item-map__label">NEW HANOVER</text>
                    <text x="430" y="220" className="item-map__label">LEMOYNE</text>
                    <text x="240" y="193" className="item-map__label">WEST ELIZABETH</text>
                    <text x="69" y="262" className="item-map__label">NEW AUSTIN</text>
                    {hasLocation && (
                        <g className="item-map__marker" transform={`translate(${point.x} ${point.y})`}>
                            <circle r="13" className="item-map__marker-halo" />
                            <circle r="5" className="item-map__marker-dot" />
                        </g>
                    )}
                    <text x="523" y="300" className="item-map__scale">N ↑</text>
                </svg>
                {hasLocation && <MapPin className="item-map__pin" size={16} aria-hidden="true" />}
            </div>
            <figcaption className="item-map__caption">
                <span>{hasLocation ? 'Approximate habitat' : 'No fixed location'}</span>
                <strong>{location}</strong>
            </figcaption>
        </figure>
    )
}

function CigaretteCardGrid({
    item,
    done,
    onToggle,
}: {
    item: TrackedItem
    done: ReadonlySet<string>
    onToggle: (id: string) => void
}) {
    const cards = item.details?.objectives ?? []
    const foundCount = cards.filter((card) => done.has(card.id)).length
    const allCardsLandscape = cards.length > 0 && cards.every((card) => card.orientation === 'landscape')

    return (
        <section className="cigarette-cards" aria-labelledby="cigarette-cards-title">
            <header className="cigarette-cards__header">
                <div>
                    <span className="eyebrow eyebrow--gold">Collection</span>
                    <h2 id="cigarette-cards-title">Cards in this set</h2>
                </div>
                <span className="item-detail__count">{foundCount} / {cards.length} found</span>
            </header>
            <ul className={`cigarette-card-grid${allCardsLandscape ? ' cigarette-card-grid--landscape' : ''}`}>
                {cards.map((card, index) => {
                    const isFound = done.has(card.id)
                    const unfoundImage = item.details?.unfoundCardImage ?? item.image
                    const foundImage = card.foundImage ?? unfoundImage

                    return (
                        <li
                            key={card.id}
                            className={card.orientation === 'landscape' ? 'cigarette-card-grid__item--landscape' : undefined}
                        >
                            <label className={`cigarette-card cigarette-card--${card.orientation ?? 'portrait'}`}>
                                <input
                                    type="checkbox"
                                    checked={isFound}
                                    onChange={() => onToggle(card.id)}
                                    aria-label={`${card.text}: ${isFound ? 'found' : 'not found'}`}
                                />
                                <span className="cigarette-card__flip" aria-hidden="true">
                                    <span className="cigarette-card__flipper">
                                        <span className="cigarette-card__picture cigarette-card__face">
                                            {unfoundImage && <img src={unfoundImage} alt="" />}
                                            <span className="cigarette-card__overlay">
                                                <span className="cigarette-card__number">
                                                    {String(index + 1).padStart(2, '0')}
                                                </span>
                                                <span className="cigarette-card__stamp">Not found</span>
                                            </span>
                                        </span>
                                        <span className="cigarette-card__picture cigarette-card__face cigarette-card__face--back">
                                            {foundImage && <img src={foundImage} alt="" />}
                                            <span className="cigarette-card__overlay">
                                                <span className="cigarette-card__number">
                                                    {String(index + 1).padStart(2, '0')}
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </span>
                                <span className="cigarette-card__name">{card.text}</span>
                            </label>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

export default function TrackedItemDetail({
    groups,
    backTo,
    sectionLabel,
}: TrackedItemDetailProps) {
    const { itemId } = useParams()
    const navigate = useNavigate()
    const { done, toggleItem } = useProgress()
    const group = groups.find((candidate) =>
        candidate.items.some((item) => item.id === itemId),
    )
    const item: TrackedItem | undefined = group?.items.find(
        (candidate) => candidate.id === itemId,
    )

    if (!item || !group) {
        return (
            <section className="item-detail item-detail--missing">
                <button type="button" className="item-detail__back" onClick={() => navigate(backTo)}>
                    <ArrowLeft size={17} aria-hidden="true" />
                    Back to {sectionLabel}
                </button>
                <h1>Item not found</h1>
                <p>This entry may have been removed or the address is invalid.</p>
            </section>
        )
    }

    const detailImage = item.photo ?? item.image
    const objectives = item.details?.objectives?.length
        ? item.details.objectives
        : [{ id: item.id, text: 'Completed' }]
    const completedCount = objectives.filter((objective) => done.has(objective.id)).length
    const itemDone = isItemDone(item, done)
    const locked = !itemDone && statusOf(item, done) === 'locked'
    const location = item.details?.region || 'No fixed location'
    const isCigaretteCardCollection = group.id === 'cigarette-cards'

    return (
        <article className="item-detail" aria-labelledby="item-detail-title">
            <header className="item-detail__header">
                <button type="button" className="item-detail__back" onClick={() => navigate(backTo)}>
                    <ArrowLeft size={17} aria-hidden="true" />
                    Back to {sectionLabel}
                </button>
                <span className="eyebrow eyebrow--red">{sectionLabel} / {group.name}</span>
            </header>

            {isCigaretteCardCollection ? (
                <div className="item-detail__cards-view">
                    <div className="item-detail__cards-intro">
                        {item.image && (
                            <img className="item-detail__cards-cover" src={item.image} alt={`${item.name} collection cover`} />
                        )}
                        <div>
                            <span className={`item-detail__status${itemDone ? ' item-detail__status--done' : ''}`}>
                                {itemDone ? 'Complete' : 'In progress'}
                            </span>
                            <h1 className="item-detail__title" id="item-detail-title">{item.name}</h1>
                            <p className="item-detail__description">
                                Collect all twelve cards in this set. Mark each card as you find it.
                            </p>
                        </div>
                    </div>
                    <CigaretteCardGrid item={item} done={done} onToggle={toggleItem} />
                </div>
            ) : (
                <div className="item-detail__layout">
                    <div className="item-detail__visual">
                        {detailImage ? (
                            <img className="item-detail__image" src={detailImage} alt={item.name} />
                        ) : (
                            <div className="item-detail__image item-detail__image--empty" aria-label="No item picture available">
                                <span>{group.name}</span>
                            </div>
                        )}
                        <RangeMap location={location} />
                    </div>

                    <div className="item-detail__content">
                        <span className={`item-detail__status${itemDone ? ' item-detail__status--done' : ''}`}>
                            {itemDone ? 'Complete' : locked ? 'Locked' : 'In progress'}
                        </span>
                        <h1 className="item-detail__title" id="item-detail-title">{item.name}</h1>
                        <p className="item-detail__description">
                            {item.description || 'No description is available for this entry yet.'}
                        </p>

                        <section className="item-detail__tracking" aria-labelledby="item-tracking-title">
                            <div className="item-detail__tracking-head">
                                <div>
                                    <span className="eyebrow eyebrow--gold">Field notes</span>
                                    <h2 id="item-tracking-title">Tracking</h2>
                                </div>
                                <span className="item-detail__count">{completedCount} / {objectives.length}</span>
                            </div>
                            <ul className="item-detail__tasks">
                                {objectives.map((objective) => (
                                    <li key={objective.id}>
                                        <label>
                                            <input
                                                type="checkbox"
                                                checked={done.has(objective.id)}
                                                disabled={locked}
                                                onChange={() => toggleItem(objective.id)}
                                            />
                                            <span>{objective.text}</span>
                                        </label>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>
                </div>
            )}
        </article>
    )
}
