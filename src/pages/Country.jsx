import { useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router'
import { getCountry } from '../api/restcountries'

export default function Country() {
    const { slug } = useParams()
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        const getCountriesData = async () => {
            try {
                const countryData = await getCountry(slug)
                setData(countryData)
                setError(false)

            } catch(e) {
                console.error(`Error: ${e.message}`)
                setError(true)
            }
            setLoading(false)

        }

        getCountriesData()
    }, [slug])

    return (
        <div className="container mx-auto">
            <Link className="inline-block mb-6" to="/">Back</Link>
            {loading ? (
                <h2>Loading...</h2>
            ) : error ? (
                <div>
                    <Navigate to='/not-found' />
                </div>
            ) : (

                <article className="grid grid-cols-12 gap-12">

                    <div className="col-span-5">
                        <img className="max-w-full" src={data.flag} alt={data.flagAlt} />
                    </div>

                    <div className="col-span-7">
                        <h2 className="font-semibold mb-4 text-3xl">{data.name}</h2>

                        <div className="grid grid-cols-2">

                            <ul>
                                <li><strong>Official Name:</strong> <span>{data.officialName}</span></li>
                                <li><strong>Native Name:</strong> <span>{data.nativeName}</span></li>
                                <li><strong>Population:</strong> <span>{data.population.toLocaleString()}</span></li>
                                <li><strong>Region:</strong> <span>{data.region}</span></li>
                                <li><strong>Sub Region:</strong> <span>{data.subregion}</span></li>
                                <li><strong>Capital:</strong> <span>{data.capital.join(', ')}</span></li>
                            </ul>

                            <ul>
                                <li>
                                    <strong>Top Level Domain:</strong> <code>{data.tld.join(', ')}</code>
                                </li>
                                <li>
                                    <strong>Currencies:</strong>
                                    <p>
                                        {data.currencies.join(', ')}
                                    </p>
                                </li>
                                <li>
                                    <strong>Languages:</strong>
                                    <ul>
                                        {data.languages.join(', ')}
                                    </ul>
                                </li>
                                
                            </ul>

                        </div>

                        <ul className="mt-4">
                            <li>
                                <strong>Border Countries:</strong>
                                <ul className="-ml-1 mt-2">
                                    {data.borders.map((b, i) => (
                                        <li className="border border-neutral-700 inline-block mx-1 px-2" key={i}>
                                            {b}
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        </ul>

                    </div>
                </article>
            )}

        </div>
    )
}
