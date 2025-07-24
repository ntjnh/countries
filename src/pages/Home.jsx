import { Link, useParams, useSearchParams } from 'react-router'
import Country from '../components/Country'
import Form from '../components/Form'
import europe from '../mocks/data/europe.json'
import asia from '../mocks/data/asia.json'
import africa from '../mocks/data/africa.json'
import americas from '../mocks/data/americas.json'
import oceania from '../mocks/data/oceania.json'

export default function Home() {
    const { continent } = useParams()
    const countries = [...europe, ...asia, ...africa, ...americas, ...oceania]
    const filteredCountries = continent ? countries.filter(c => c.region.toLowerCase() == continent) : countries
    let countriesList = filteredCountries

    const [searchParams] = useSearchParams()
    const countryToFind = searchParams.get('country')

    if (countryToFind) {
        countriesList = countries.filter(country => {
            let countryName = country.name.common.toLowerCase()
            let query = countryToFind ? countryToFind.toLowerCase() : ''

            return countryName.includes(query)
        })
    }

    return (
        <div className="container mx-auto relative">
            <Form
                // isDark={isDark}
                // searchTerm={searchTerm}
                // onChangeValue={newVal => setSearchTerm(newVal.target.value)}
            />

            <section className="md:grid gap-12 md:gap-4 md:grid-cols-2 lg:grid-cols-4 mx-auto w-[78%] md:w-full">
                {
                    countriesList.map(country => {
                        const { flags, name: { common }, population, region, capital, cca3 } = country
                        const slug = cca3.toLowerCase()

                        return (
                            <Link className="block hover:cursor-pointer" to={`/${slug}`} key={slug}>
                                <Country
                                    flag={flags}
                                    name={common}
                                    population={population.toLocaleString()}
                                    region={region}
                                    capital={capital}
                                    // isDark={isDark}
                                />
                            </Link>
                        )
                    })
                }
            </section>
        </div>
    )
}
