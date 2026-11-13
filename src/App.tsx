import type { ReactElement } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.tsx'
import Home from './pages/Home.tsx'
import Collectibles from './pages/Collectibles.tsx'
import Missions from './pages/Missions.tsx'
import ComingSoon from './pages/ComingSoon.tsx'
import { navItems } from './data/nav.ts'
import StrangerMissions from './pages/Strangers.tsx'
import Compendium from './pages/Compendium.tsx'

// Pages that are built. Anything not listed here shows "not built yet".

const builtPages: Record<string, ReactElement> = {
  '/collectibles': <Collectibles />,
  '/missions': <Missions />,
  '/strangers': <StrangerMissions />,
  '/compendium': <Compendium />,
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        {navItems
          .filter((item) => item.path !== '/')
          .map((item) => (
            <Route
              key={item.path}
              path={item.path}
              element={builtPages[item.path] ?? <ComingSoon title={item.label} />}
            />
          ))}
      </Route>
    </Routes>   
  )
}
