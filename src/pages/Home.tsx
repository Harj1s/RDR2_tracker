import PageHead from '../components/PageHead'
import StatCard from '../components/StatCard'
import NextOnTrail from '../components/NextOnTrail'
import RecentEntries from '../components/RecentEntries'
import BeyondCard from '../components/BeyondCard'
import BiggerPicture from '../components/BiggerPicture'
import { progress } from '../data/progress'
import { useProgress } from '../hooks/useProgress'
import { missionChapters } from '../data/missions'
import { countDone, currentGroupName, nextMilestone } from '../lib/completion'

export default function Home() {
    const { totalCompletion, done } = useProgress()

    const milestone = nextMilestone(totalCompletion)
    const pointsToMilestone = (milestone - totalCompletion).toFixed(1)

    return (
        <>
            <PageHead
                eyebrow="The completion journal"
                title="Your trail to 100%"
                subtitle="Every discovery brings you closer. Pick up where you left off in Lemoyne."
                
            />

            <section className="stats" aria-label="Progress summary">
                <StatCard 
                    title={'Story missions'}
                    items={[
                        {
                            label: '',
                            value: `${countDone(missionChapters, done)} completed`,
                            detail: currentGroupName(missionChapters, done),
                            tone: 'red',
                        }
                    ]}
                />
                    <StatCard 
                    title={'Stranger strands'}
                    items={[
                        {
                            label: '',
                            value: `${progress.strangers.done} / ${progress.strangers.total}`,
                            detail: 'Complete 10 for Total Completion',
                            tone: 'slate',
                        }
                    ]}
                />
                    <StatCard 
                    title={'Achievements'}
                    items={[
                        {
                            label: '',
                            value: `${progress.achievements.done} / ${progress.achievements.total}`,
                            detail: 'Platform goals · separate from 100%',
                            tone: 'gold',
                        }
                    ]}
                />
                    <StatCard 
                    title={'Next milestone'}
                    items={[
                        {
                            label: '',
                            value: `${milestone.toFixed(1)}%`,
                            detail: `${pointsToMilestone} points from your next target`,
                            tone: 'sage',
                        }
                    ]}
                />
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