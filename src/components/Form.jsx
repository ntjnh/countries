import { useRef } from 'react'
import { createSearchParams, useNavigate } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function Form({ isDark, onChangeValue }) {
    const lightClasses = {
        inputIcon: 'text-neutral-450',
        input: 'shadow-md shadow-neutral-200/60 text-neutral-450',
        select: 'shadow-md shadow-neutral-200/60 text-grey-925',
        selectIcon: 'text-grey-925'
    }
    const darkClasses = {
        inputIcon: 'text-white',
        input: 'bg-slate-750 placeholder:text-white shadow-lg shadow-slate-800 text-white',
        select: 'bg-slate-750 shadow-lg shadow-slate-800 text-white',
        selectIcon: 'text-white'
    }

    const modeClasses = isDark ? darkClasses : lightClasses

    const navigate = useNavigate()

    const inputRef = useRef()

    const handleSubmit = e => {
        e.preventDefault()

        const searchQuery = {
            country: inputRef.current.value
        }

        const query = createSearchParams(searchQuery)

        navigate(`/?${query}`)
    }

    return (
        <div className="md:flex md:items-center md:justify-end mb-7 lg:mb-12">
            <form
                onSubmit={handleSubmit}
                className="country-search mb-9 md:mb-0 relative md:w-[37.5%]"
            >
                <FontAwesomeIcon 
                    className={`absolute left-7 text-md top-5 z-10 ${modeClasses.inputIcon}`} 
                    icon={faMagnifyingGlass}
                />
                <input 
                    className={`font-light pl-16 pr-8 py-[18px] rounded-lg text-sm w-full ${modeClasses.input}`}
                    type="text" 
                    ref={inputRef}
                    placeholder="Search for a country..." 
                    onChange={onChangeValue}
                />
            </form>
        </div>
    )
}
