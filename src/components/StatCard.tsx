export type Tone = 'red' | 'slate' | 'gold' | 'sage' | 'dark' | 'silver' | 'bronze'

type StatCardItem = {
    label: string
    value: string
    detail: string
    tone: Tone
    medalSrc?: string
}

type StatCardProps = {
    title: string
    items: StatCardItem[]
}

export default function StatCard({ title, items }: StatCardProps) {
    const hasMedals = items.some((item) => item.medalSrc)
    return (
        <article className="card stat-card">
            <h2 className="stat-card__title">{title}</h2>
            
            <div className={`stat-card__items${hasMedals ? ' stat-card__items--medals' : ''}`}
                style={{
                    gridTemplateColumns: `repeat(${Math.max(items.length, 1)}, minmax(0, 1fr))`,
                }}
            >
                {items.map((item) => (
                    <div key={item.label}>
                        <p className="stat-card__label">{item.label}</p>
                        {item.medalSrc && (
                            <img className="stat-card__medal" src={item.medalSrc} alt="" />
                        )}
                        <p className={`stat-card__value stat-card__value--${item.tone}`}>{item.value}</p>
                        <p className="stat-card__detail">{item.detail}</p>
                    </div>
                ))}
            </div>
        </article>
    )
}