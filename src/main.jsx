import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import App from './App.jsx'
import './index.css'
import Home from './pages/Home'
import Country from './pages/Country.jsx'
import NotFound from './pages/NotFound.jsx'

const root = document.getElementById('root')

ReactDOM.createRoot(root).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<Home />} />
                <Route path="/continents/:continent" element={<Home />} />
                <Route path="/country/:slug" element={<Country />} />
                <Route path="/not-found" element={<NotFound />} />
            </Route>
        </Routes>
    </BrowserRouter>
)
