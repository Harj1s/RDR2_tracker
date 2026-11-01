import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import WearFilter from './WearFilter'

export default function Layout() {
    return (
        <div className="app">
            <WearFilter />
            <Sidebar />
            <div className="main">
                <Topbar />
                <main className="content">
                    <Outlet />
                </main>
                <footer className="footer">
                    <span>The Frontier / Story mode</span>
                    <span>Unofficial companion · Demo data · Progress saved locally</span>
                </footer>
            </div>
        </div>
    )
}