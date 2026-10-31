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
                    <a href='https://pngtree.com/freepng/distress-or-dirt-and-damage-effect-concept_9090757.html'>png image from pngtree.com/</a>
                    <span>Unofficial companion · Demo data · Progress saved locally</span>
                </footer>
            </div>
        </div>
    )
}