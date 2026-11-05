export type Tone = 'red' | 'slate' | 'gold' | 'sage' | 'dark'

type StatCardItem = {
    label: string
    value: string
    detail: string
    tone: Tone
}

type StatCardProps = {
    title: string
    items: StatCardItem[]
}

export default function StatCard({ title, items }: StatCardProps) {
    return (
        <article className="card stat-card">
            <h2 className="stat-card__title">{title}</h2>
            
            <div className="stat-card__items">
                {items.map((item) => (
                    <div key={item.label}>
                        <p className="stat-card__label">{item.label}</p>
                        <p className={`stat-card__value stat-card__value--${item.tone}`}>{item.value}</p>
                        <p className="stat-card__detail">{item.detail}</p>
                    </div>
                ))}
            </div>
        </article>
    )
}