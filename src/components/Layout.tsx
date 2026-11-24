import { Outlet, useMatch } from 'react-router-dom'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import WearFilter from './WearFilter'

export default function Layout() {
    const isCompendiumDetail = useMatch('/compendium/:itemId')
    const isCollectibleDetail = useMatch('/collectibles/:itemId')
    const isItemDetail = Boolean(isCompendiumDetail || isCollectibleDetail)

    return (
        <div className={`app${isItemDetail ? ' app--detail' : ''}`}>
            <WearFilter />
            <Sidebar />
            <div className={`main${isItemDetail ? ' main--detail' : ''}`}>
                {!isItemDetail && <Topbar />}
                <main className={`content${isItemDetail ? ' content--detail' : ''}`}>
                    <Outlet />
                </main>
                {!isItemDetail && (
                    <footer className="footer">
                        <span>The Frontier / Story mode</span>
                        <span>Unofficial companion · Demo data · Progress saved locally</span>
                    </footer>
                )}
            </div>
        </div>
    )
}