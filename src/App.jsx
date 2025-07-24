import { useEffect, useState } from 'react'
import Country from './components/Country'
import Attr from './components/Attr'
import Header from './components/Header'
import { Outlet } from 'react-router'

function App() {
    const [countries, setCountries] = useState([])
    const [filteredCountries, setFilteredCountries] = useState(countries)
    const regions = {
        africa: countries.filter(c => c.region.toLowerCase() === 'africa'),
        americas: countries.filter(c => c.region.toLowerCase() === 'americas'),
        asia: countries.filter(c => c.region.toLowerCase() === 'asia'),
        europe: countries.filter(c => c.region.toLowerCase() === 'europe'),
        oceania: countries.filter(c => c.region.toLowerCase() === 'oceania')
    }
    const [isDark, setIsDark] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')

    function handleClick() {
        setIsDark(prev => !prev)
    }

    useEffect(() => {
        async function getCountries() {
            await fetch('https://restcountries.com/v3.1/all?fields=capital,flags,name,population,region')
                .then(response => response.json())
                .then(data => {
                    setCountries(data)
                    setFilteredCountries(data)
                })
        }
        getCountries()
    }, [])

    function searchByTerm(term) {
        setCountries(prev => {
            prev.filter(p => {
                return p.toLowerCase().includes(term.toLowerCase())
            })
        })
    }

    function regionFilter(selectedRegion) {
        if (selectedRegion === 'all') {
            setFilteredCountries(countries)
        } else {
            setFilteredCountries(regions[selectedRegion])
        }
    }

    const lightClasses = 'bg-neutral-50'
    const darkClasses = 'bg-slate-775'
    const modeClasses = isDark ? darkClasses : lightClasses

    return (
        <>
            <Header
                isDark={isDark}
                modeToggle={handleClick}
            />

            <main className={`pb-14 pt-5 px-4 lg:pt-12 ${modeClasses}`}>
                <Outlet />
            </main>

            <Attr isDark={isDark} />
        </>
    )
}

export default App
