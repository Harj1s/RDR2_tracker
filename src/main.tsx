import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import './styles/app.css'
import './styles/base.css'
import './styles/home.css'
import './styles/collectables.css'
import './styles/checklist.css'
import './styles/texture.css'
import App from './App.tsx'
import ProgressProvider from './state/ProgressProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ProgressProvider>
        <App />
      </ProgressProvider>
    </BrowserRouter>
  </StrictMode>,
)