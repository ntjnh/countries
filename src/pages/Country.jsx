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
            <Link className="" to="/">Back</Link>
            {loading ? (
                <h2>Loading...</h2>
            ) : error ? (
                <div>
                    <Navigate to='/not-found' />
                </div>
            ) : (

                <article>

                    <div style={{ width: "49%" }}>
                        <img className="max-w-[266px]" src={data.flag} alt={data.flagAlt} />
                    </div>

                    <div className="w-[49%]">
                        <h2>{data.name}</h2>

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
                            <li>
                                <strong>Border Countries:</strong>
                                <ul className="-ml-2">
                                    {data.borders.map((b, i) => (
                                        <li className="inline-block px-2" key={i}>
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
