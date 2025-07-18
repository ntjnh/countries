import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import App from './App.jsx'
import './index.css'
import Home from './pages/Home'
import Country from './pages/Country.jsx'

const root = document.getElementById('root')

ReactDOM.createRoot(root).render(
    <BrowserRouter>
        <Routes>
            <Route element={<App />}>
                <Route index element={<Home />} />
                <Route path=":slug" element={<Country />} />
            </Route>
        </Routes>
    </BrowserRouter>
)
