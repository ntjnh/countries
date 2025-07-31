import { NavLink } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-regular-svg-icons'
import { faSun } from '@fortawesome/free-solid-svg-icons'

export default function Header({ isDark, modeToggle }) {
    const classes = {
        light: 'bg-white shadow-md shadow-neutral-200/60 text-grey-925',
        dark: 'bg-slate-750 text-white'
    }
    const modeClasses = isDark ? classes.dark : classes.light 
    const buttonText = isDark ? 'Light Mode' : 'Dark Mode' 
    
    const continents = [ 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania']

    const handleSortChange = e => {
        console.log(e.target.value)
    }

    return (
        <header className={`p-7 md:py-6 ${modeClasses}`}>
            <div className="container flex items-center justify-between mx-auto">
                <h1
                    className="font-bold m-0 text-sm md:text-lg lg:text-2xl"
                >
                    Where in the world?
                </h1>

                <button
                    className="text-xs md:text-sm lg:text-base"
                    onClick={modeToggle}
                >
                    <FontAwesomeIcon
                        className="mr-3"
                        icon={isDark ? faSun : faMoon}
                    />

                    {buttonText}
                </button>
            </div>

            <div className="container flex items-center justify-between mx-auto">
                <ul className="-ml-6 mt-4">
                    <li className="inline-block px-6">
                        <NavLink
                            className={({ isActive }) => isActive ? 'text-green-700 underline' : ''}
                            to={`/`}
                        >
                            All
                        </NavLink>
                    </li>
                    {continents.map((continent, i) => (
                        <li className="inline-block px-6" key={i}>
                            <NavLink
                                className={({ isActive }) => isActive ? 'text-green-700 underline' : ''}
                                to={`/continents/${continent.toLowerCase()}`}
                            >
                                {continent}
                            </NavLink>
                        </li>

                    ))}
                </ul>

                <div>
                    <span className="font-bold">Sort by: </span>

                    <select onChange={handleSortChange} className="cursor-pointer" name="sort" id="sort">
                        <option value="">--Select--</option>
                        <option value="country">Country</option>
                        {/* <option value="continent">Continent</option> */}
                        <option value="capital">Capital City</option>
                        <option value="population">Population</option>
                    </select>
                </div>
            </div>
        </header>
    )
}
