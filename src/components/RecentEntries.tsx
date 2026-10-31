import { Bone, Check, PawPrint, type LucideIcon } from 'lucide-react'
import { recentEntries, type EntryKind } from '../data/progress'

const icons: Record<EntryKind, LucideIcon> = {
    mission: Check,
    collectable: Bone,
    hunt: PawPrint,
}

export default function RecentEntries() {
    return (
        <section className="card">
            <header className="card__head">
                <h3 className="card__title">Recent journal entries</h3>
                <span className="card__tag">Today</span>
            </header>

            <ul className="entries">
                {recentEntries.map((entry) => {
                    const Icon = icons[entry.kind]
                    return (
                        <li key={entry.id} className="entries__row">
                            <Icon size={16} strokeWidth={1.5} aria-hidden="true"/>
                            <div>
                                <p className="entries__title">{entry.title}</p>
                                <p className="entries__note">{entry.note}</p>
                            </div>
                            <span className="entries__status">{entry.time}</span>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}