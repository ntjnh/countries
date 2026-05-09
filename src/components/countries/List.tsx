import type { CountryCard } from '../../types/country'
import Card from './Card'

export const List: React.FC<{
  countries: CountryCard[]
}> = ({ countries }) => {
  return (
    <div>
      {countries.map((country, i) => {
        // const code = country.cca3
        // console.log(code)
        // const uid = code.toLowerCase()
        return (
          <Card
            key={`country-${i}`}
            cca3={country.cca3}
            name={country.name.common}
            population={country.population}
            region={country.region}
            capital={country.capital}
            flag={country.flag} 
          />
        )
      })}
    </div>
  )
}
