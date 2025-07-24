import { Link, useParams } from 'react-router'
import europe from '../mocks/data/europe.json'
import asia from '../mocks/data/asia.json'
import africa from '../mocks/data/africa.json'
import americas from '../mocks/data/americas.json'
import oceania from '../mocks/data/oceania.json'

export default function Country() {
    const countries = [...europe, ...asia, ...africa, ...americas, ...oceania]

    const { slug } = useParams()

    const country = countries.filter(c => c.cca3.toLowerCase() === slug)[0]

    const flag = country.flags.svg
    const flagAlt = country.flags.alt
    const name = country.name.common
    const officialName = country.name.official
    const nativeName = country.name.nativeName[Object.keys(country.name.nativeName)[0]].common
    const population = country.population
    const region = country.region
    const subregion = country.subregion
    const capital = country.capital
    const tld = country.tld
    const currencies = Object.values(country.currencies).map(c => c.name)
    const languages = Object.values(country.languages)
    // const borders = country.borders
    const borders = ['PRT', 'DNK', 'UKR', 'AUT']

    const borderCountries = borders.map(
        border => countries.filter(c => c.cca3 === border)[0].name.common
    )

    return (
        <div className="container mx-auto">
            <Link className="" to="/">Back</Link>

            <article>

                {/* <div style={{ width: "49%" }}>
                    <img className="max-w-[266px]" src={flag} alt={flagAlt} />
                </div> */}

                <div className="w-[49%]">
                    <h2>{name}</h2>

                    <ul>
                        <li><strong>Official Name:</strong> <span>{officialName}</span></li>
                        <li><strong>Native Name:</strong> <span>{nativeName}</span></li>
                        <li><strong>Population:</strong> <span>{population.toLocaleString()}</span></li>
                        <li><strong>Region:</strong> <span>{region}</span></li>
                        <li><strong>Sub Region:</strong> <span>{subregion}</span></li>
                        <li><strong>Capital:</strong> <span>{capital.join(', ')}</span></li>
                    </ul>

                    <ul>
                        <li>
                            <strong>Top Level Domain:</strong> <code>{tld.join(', ')}</code>
                        </li>
                        <li>
                            <strong>Currencies:</strong>
                            <p>
                                {currencies.join(', ')}
                            </p>
                        </li>
                        <li>
                            <strong>Languages:</strong>
                            <ul>
                                {languages.join(', ')}
                            </ul>
                        </li>
                        <li>
                            <strong>Border Countries:</strong>
                            <ul className="-ml-2">
                                {borderCountries.map((b, i) => (
                                    <li className="inline-block px-2" key={i}>
                                        {b}
                                    </li>
                                ))}
                            </ul>
                        </li>
                    </ul>
                </div>
            </article>
        </div>
    )
}
