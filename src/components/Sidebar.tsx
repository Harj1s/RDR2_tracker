import { NavLink } from 'react-router-dom'
import { SlidersHorizontal } from 'lucide-react'
import { navItems } from '../data/nav.ts'

export default function Sidebar() {

    //ToDo
    const totalCompletion = 63.4

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

                <div className="total-box">
                    <p className="total-box__label">Total completion</p>
                    <p className="total-box__value">{totalCompletion}%</p>
                    <div
                        className="progress"
                        role="progressbar"
                        aria-valuenow={totalCompletion}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-label="Total completion"
                    >
                        <div
                            className="progress__fill"
                            style={{ width: `${totalCompletion}%`}}
                        />
                    </div>
                    <p className="total-box__meta">Arthur Morgan · Chapter 4</p>
                </div>
            </nav>

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
                </div>
            </div>
        </aside>
    )
}