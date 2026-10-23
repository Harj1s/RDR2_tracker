import RingChart from './RingChart.tsx'
import { useProgress } from '../hooks/useProgress.ts'

export default function BiggerPicture() {
    const { rings, totalCompletion } = useProgress()

    return (
        <section className="card">
            <header className="card__head">
                <h3 className="card__title">The bigger picture</h3>
                <span className="card__tag">In-game total completion</span>
            </header>

            <div className="picture">
                <div className="picture__chart">
                    <RingChart
                        rings={rings}
                        centerValue={`${totalCompletion.toFixed(1)}%`}
                        centerLabel="TOTAL COMPLETION"
                        centerNote="From your sample save"
                    />
                </div>

                <div className="picture__side">
                    <ul className="legend">
                        {rings.map((ring) => (
                            <li key={ring.id} className="legend__row">
                                <span
                                    className="legend__swatch"
                                    style={{ background: ring.color }}
                                    aria-hidden="true"
                                />
                                <span className="legend__label">{ring.label}</span>
                                <span className="legend__value" style={{ color: ring.color }}>
                                    {ring.percent}%
                                </span>
                            </li>
                        ))}
                    </ul>

                    <p className="picture__note">
                        Rings show demo checklist coverage, not the game's percentage weighting.
                    </p>
                </div>
            </div>
        </section>
    )
}