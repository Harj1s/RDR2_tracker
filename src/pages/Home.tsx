import PageHead from '../components/PageHead'
import StatCard from '../components/StatCard'
import type { Tone } from '../components/StatCard'
import NextOnTrail from '../components/NextOnTrail'
import RecentEntries from '../components/RecentEntries'
import BeyondCard from '../components/BeyondCard'
import BiggerPicture from '../components/BiggerPicture'
import { progress } from '../data/progress'
import { useProgress } from '../hooks/useProgress'
import { missionChapters } from '../data/missions'
import { countDone, currentGroupName, nextMilestone } from '../lib/completion'

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
            <PageHead
                eyebrow="The completion journal"
                title="Your trail to 100%"
                subtitle="Every discovery brings you closer. Pick up where you left off in Lemoyne."
                
            />

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