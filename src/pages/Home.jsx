import { useEffect, useState } from 'react'
import { Link, useParams, useSearchParams } from 'react-router'
import Country from '../components/Country'
import Form from '../components/Form'
import { getCountriesByContinent, getCountries } from '../api/restcountries'

export default function Home() {
    const { continent } = useParams()
    const [countries, setCountries] = useState(null)
    const [loading, setLoading] = useState(true)

    const [searchParams] = useSearchParams()
    const countryToFind = searchParams.get('country')

    useEffect(() => {
        const getCountriesData = async continent => {
            try {
                if (continent) {
                    const countriesData = await getCountriesByContinent(continent)
                    setCountries(countriesData)
                } else {
                    const countriesData = await getCountries(countryToFind)
                    setCountries(countriesData)
                }
            
                setLoading(false)    
            } catch (e) {
                console.log(`Error: `)
                console.log(e)
            }
        }

        getCountriesData(continent)
    }, [countryToFind, continent])

    

    // if (!loading) {
    //     if (continent) {
    //         setCountries(() => getCountriesByContinent(continent))
    //         setLoading(false)
    //     }
    
    //     // if (countryToFind) {
    //     //     setCountries(() => getCountries(countryToFind))
    //     //     setLoading(false)
    //     // }
    // }


    return (
        <div className="container mx-auto relative">
            {loading ? (
                <div>
                    <h2>Loading...</h2>
                </div>
            ) : (
                <div>
                    <Form
                        // isDark={isDark}
                        // searchTerm={searchTerm}
                        // onChangeValue={newVal => setSearchTerm(newVal.target.value)}
                    />

                    <section className="md:grid gap-12 md:gap-4 md:grid-cols-2 lg:grid-cols-4 mx-auto w-[78%] md:w-full">
                        {
                            countries.map(country => {
                                const { flags, name: { common }, population, region, capital, cca3 } = country
                                const slug = cca3.toLowerCase()

                                return (
                                    <Link className="block hover:cursor-pointer" to={`/country/${slug}`} key={slug}>
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
            )}
        </div>
    )
}
