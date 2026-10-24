import StatCard from '../components/StatCard.tsx'
import type { Tone } from '../components/StatCard.tsx'
import NextOnTrail from '../components/NextOnTrail.tsx'
import RecentEntries from '../components/RecentEntries.tsx'
import BeyondCard from '../components/BeyondCard.tsx'
import BiggerPicture from '../components/BiggerPicture.tsx'
import { progress } from '../data/progress.ts'
import { useProgress } from '../hooks/useProgress.ts'
import { missionChapters } from '../data/missions.ts'
import { countDone, currentGroupName, nextMilestone } from '../lib/completion.ts'

type Stat = {
    label: string
    value: string
    detail: string
    tone: Tone
}

export default function Home() {
    const { totalCompletion, done } = useProgress()
    const milestone = nextMilestone(totalCompletion)
    const pointsToMilestone = (milestone - totalCompletion).toFixed(1)

    const stats: Stat[] = [
        {
            label: 'Story missions',
            value: `${countDone(missionChapters, done)} completed`,
            detail: currentGroupName(missionChapters, done),
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
            value: `${milestone.toFixed(1)}%`,
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
                <BiggerPicture />
                <NextOnTrail />
                <RecentEntries />
                <BeyondCard />
            </div>
        </>
    )
}