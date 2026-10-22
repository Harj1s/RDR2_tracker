import { useLocation } from 'react-router-dom'
import { Bell } from 'lucide-react'
import { navItems } from '../data/nav'

export default function Topbar() {
    const { pathname } = useLocation()
    const current = navItems.find((item) => item.path === pathname)

    return (
        <header className="topbar">
            <nav aria-label="Breadcrumb" className="breadcrumb">
                <span>Journal</span>
                <span aria-hidden="true">/</span>
                <span className="breadcrumb__current">{current?.label ?? 'Home'}</span>
            </nav>

            <div className="topbar__actions">
                <span className="badge">Sample Save</span>
                <span className="topbar__updated">Last updated · Today, 14:32</span>
                <button type="button" className="icon-button" aria-label="Notifications">
                    <Bell size={16} strokeWidth={1.5} />
                </button>
                <span className="avatar" aria-label="Account">AM</span>
            </div>
        </header>
    )
}