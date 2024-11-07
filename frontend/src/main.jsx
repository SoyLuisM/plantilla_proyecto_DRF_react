import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/base.min.css'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './router/AppRouter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>
  </StrictMode>,
)
