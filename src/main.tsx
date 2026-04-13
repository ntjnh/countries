import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import App from './App.tsx'
import Layout from './layout.tsx'
import Country from './pages/Country.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<App />} />
          <Route path="/country/:country" element={<Country />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
