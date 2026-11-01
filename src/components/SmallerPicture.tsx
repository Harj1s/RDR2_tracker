import RingChart from './RingChart'
import type { Ring } from './RingChart'
import { useProgress } from '../hooks/useProgress'
import type { TrackedGroup } from '../data/types'
import { percentDone } from '../lib/completion'

type SmallerPictureProps = {
    groups: TrackedGroup[],
    pageLabel: string,
    pageProgressRingId?: string,
}

const MUTED = 'var(--text-muted-on-dark)'

export default function SmallerPicture({
    groups,
    pageLabel,
    pageProgressRingId,
}: SmallerPictureProps) {
    const { done, rings } = useProgress()

    const pagePercent = percentDone(groups, done)
    const hasPageRing = rings.some((ring) => ring.id === pageProgressRingId)

    let chartRings: Ring[]

    if (hasPageRing) {
        chartRings = rings.map((ring) =>
            ring.id === pageProgressRingId
                ? { ...ring, percent: pagePercent }
                : { ...ring, color: MUTED },
        )
    } else {
        chartRings = [
            { id: 'page-progress', label: pageLabel, percent: pagePercent, color: 'var(--red)' },
            ...rings.map((ring) => ({ ...ring, color: MUTED })),
        ]
    }
    return (
        <section className="card smaller-picture-card">
            <header className="card__head">
                <h3 className="card__title">Page progress</h3>
            </header>

            <div className="smaller-picture">
                <div className="smaller-picture__chart">
                    <RingChart
                        rings={chartRings}
                        centerValue={`${pagePercent}%`}
                    />
                </div>
            </div>
        </section>
    )
}