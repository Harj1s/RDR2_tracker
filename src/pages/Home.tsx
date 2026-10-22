import StatCard from '../components/StatCard.tsx'
import type { Tone } from '../components/StatCard.tsx'
import NextOnTrail from '../components/NextOnTrail.tsx'
import RecentEntries from '../components/RecentEntries.tsx'
import BeyondCard from '../components/BeyondCard.tsx'
import { progress } from '../data/progress.ts'

type Stat = {
    label: string
    value: string
    detail: string
    tone: Tone
}

export default function Home() {
    const pointsToMilestone = (
        progress.nextMilestone - progress.totalCompletion
    ).toFixed(1)

    const stats: Stat[] = [
        {
            label: 'Story missions',
            value: `${progress.storyMissions.completed} completed`,
            detail: progress.storyMissions.location,
            tone: 'red',
        },
        {
            label: 'Stranger strands',
            value: `${progress.strangers.done} / ${progress.strangers.total}`,
            detail: 'Complete 10 for Total Completion',
            tone: 'slate',
        },
        {
            label: 'Achievements',
            value: `${progress.achievements.done} / ${progress.achievements.total}`,
            detail: 'Platform goals · separate from 100%',
            tone: 'gold',
        },
        {
            label: 'Next milestone',
            value: `${progress.nextMilestone.toFixed(1)}%`,
            detail: `${pointsToMilestone} points from your next target`,
            tone: 'sage',
        },
    ]

    return (
        <>
            <section className="page-head">
                <p className="eyebrow eyebrow--red">The completion journal</p>
                <h2 className="page-title">Your trail to 100%</h2>
                <p className="page-subtitle">
                    Every discovery brings you closer. Pick up where you left off in Lemoyne.
                </p>
            </section>

            <section className="stats" aria-label="Progress summary">
                {stats.map((stat) => (
                    <StatCard key={stat.label} {...stat} />
                ))}
            </section>

            <div className="home-grid">
                {/* Ring chart replaces this placeholder in the next step */}
                <section className="card">
                    <header className="card__head">
                        <h3 className="card__title">The bigger picture</h3>
                        <span className="card__tag">In-game total completion</span>
                    </header>
                    <p>Ring chart goes here.</p>
                </section>

                <NextOnTrail />
                <RecentEntries />
                <BeyondCard />
            </div>
        </>
    )
}