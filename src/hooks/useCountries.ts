import { useState, useEffect } from 'react'
import { getAllCountries } from '../services/api'
import type { Country, CountryCard } from '../types/country'

export const useCountries = (name?: string, code?: string) => {
  const [countries, setCountries] = useState<Country[]>([])

  useEffect(() => {
    const loadCountries = async () => {
      try {
        const allCountries: Country[] = await getAllCountries()
        setCountries(allCountries)
      } catch(err) {
        console.error(err)
      }
    }

    loadCountries()
  }, [name, code])

  return countries
}

/*

✅ Suggested data flow
countries (full list)
        ↓
searchTerm (state)
        ↓
filteredCountries (derived)

Then:

- Country list UI → uses filteredCountries
- Autocomplete dropdown → uses filteredCountries.slice(0, 5) (or similar) - depending on how many suggestions you want to show


Keep it dumb and predictable

Something like:

const filteredCountries = countries.filter(country =>
  country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
);

Then:

- Main list → show all filtered
- Dropdown → show top 5–10 matches

One thing people mess up here

Don’t create separate state for:

- filteredCountries
- suggestions

That leads to bugs and syncing issues.

👉 Always derive them from:

searchTerm + countries

✨ Nice UX touches (low effort, high impact)

- Highlight hovered suggestion
- Allow keyboard navigation (↑ ↓ Enter)
- Close dropdown on selection
- Fill input when user clicks suggestion

🚀 If you want to push it slightly further

You can prioritise better matches:

Instead of just .includes(), you can:

- show countries that start with the search first
- then the rest

Example idea:

startsWith → includes → rest

It makes autocomplete feel smarter without much extra code.

*/