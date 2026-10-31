import { Link } from 'react-router-dom'
import { ArrowUpRight, MapPin } from 'lucide-react'
import { progress } from '../data/progress'

export default function NextOnTrail() {
    const o = progress.nextObjective

    return (
        <aside className="card trail">
            <h3 className="trail__heading">Next on the trail</h3>
            <p className="eyebrow eyebrow--gold trail__kicker">
                Pinned objective / {o.category}
            </p>

            <p className="trail__title">{o.title}</p>
            <p className="trail__text">{o.description}</p>

            <p className="trail__location">
                <MapPin size={14} strokeWidth={1.5} aria-hidden="true" />
                {o.location}
            </p>

            <hr className="trail__divider" />

            <p className="trail__note">{o.progressNote}</p>

            <Link to="/map" className="button">
                Find on map
                <ArrowUpRight size={14} strokeWidth={2.5} aria-hidden="true" />
            </Link>

            <p className="trail__suggestion">{o.suggestion}</p>
        </aside>
    )
}