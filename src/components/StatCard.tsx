export type Tone = 'red' | 'slate' | 'gold' | 'sage' | 'dark'

type StatCardProps = {
    label: string
    value: string
    detail: string
    tone: Tone
}

export default function StatCard({ label, value, detail, tone }: StatCardProps) {
    return (
        <article className="card stat-card">
            <p className="stat-card__label">{label}</p>
            <p className={`stat-card__value stat-card__value--${tone}`}>{value}</p>
            <p className="stat-card__detail">{detail}</p>
        </article>
    )
}