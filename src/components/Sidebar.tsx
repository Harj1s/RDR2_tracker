import { NavLink } from 'react-router-dom'
import { RotateCcw, SlidersHorizontal } from 'lucide-react'
import { navItems } from '../data/nav'
import { useProgress } from '../hooks/useProgress'
import Meter from './Meter'
import { currentGroupName } from '../lib/completion'
import { missionChapters } from '../data/missions'
import { currentGroupIndex } from '../lib/checklist'

export default function Sidebar() {
    const { totalCompletion, resetProgress } = useProgress()
    const { done, toggleItem } = useProgress()

    function handleReset() {
        if (window.confirm('Reset all progress to the demo save?')) {
            resetProgress()
        }
    }

    return (
        <aside className="sidebar">
            <div className="sidebar__brand">
                <p className="eyebrow eyebrow--gold">Red Dead Redemption 2</p>
                <h1 className="sidebar__title">The Frontier</h1>
                <p className="sidebar__tagline">A completion field journal</p>
                <hr className="sidebar__rule" />
            </div>

            <nav className="nav" aria-label="Main">
                {navItems.map(({ label, path, icon: Icon }) => (
                    <NavLink
                        key={path}
                        to={path}
                        end={path === '/'}
                        className={({ isActive }) =>
                            isActive ? 'nav__link nav__link--active' : 'nav__link'
                        }
                    >
                        <Icon size={16} strokeWidth={1.5} aria-hidden="true" />
                        <span>{label}</span>
                        <span className="nav__dot" aria-hidden="true" />
                    </NavLink>
                ))}
            </nav>

            <div className="total-box">
                <p className="total-box__label">Total completion</p>
                <p className="total-box__value">{totalCompletion.toFixed(1)}%</p>
                <Meter value={totalCompletion} max={100} label="Total completion" />
                <p className="total-box__meta">Arthur Morgan · {currentGroupName(missionChapters, done)}</p>
            </div>

            <div className="sidebar__footer">
                <div className="demo-note">
                    <p className="eyebrow eyebrow--gold">Demo save / manual tracking</p>
                    <p>
                        Illustrative progress. Curated examples, not a full game database.
                    </p>
                    <button type="button" className="demo-note__settings">
                        <SlidersHorizontal size={14} strokeWidth={1.5} aria-hidden="true" />
                        Journal settings
                    </button>
                    <button type="button" className="demo-note__settings" onClick={handleReset}>
                        <RotateCcw size={14} strokeWidth={1.5} aria-hidden="true" />
                        Reset demo save
                    </button>
                </div>
            </div>
        </aside>
    )
}