import europe from '../mocks/data/europe.json'
import asia from '../mocks/data/asia.json'
import africa from '../mocks/data/africa.json'
import americas from '../mocks/data/americas.json'
import oceania from '../mocks/data/oceania.json'
const countries = [...europe, ...asia, ...africa, ...americas, ...oceania]

export const getCountries = async query => {
    // const endpoint = `/countries`

    // const response = await fetch(endpoint, {
    //     method: 'GET'
    // })

    // const json = await response.json()

    // return json

    if (query) {
        return countries.filter(country => {
            const countryName = country.name.common.toLowerCase()

            return countryName.includes(query.toLowerCase())
        })
    }

    return countries
}

export const getCountry = async slug => {
    // const endpoint = `/countries/?country=${slug}`
    // const response = await fetch(endpoint, {
    //     method: 'GET'
    // })

    // const json = await response.json()

    // return json

    const country = countries.filter(c => c.cca3.toLowerCase() === slug)[0]

    return {
        flag: country.flags.svg,
        flagAlt: country.flags.alt,
        name: country.name.common,
        officialName: country.name.official,
        nativeName: country.name.nativeName[Object.keys(country.name.nativeName)[0]].common,
        population: country.population,
        region: country.region,
        subregion: country.subregion,
        capital: country.capital,
        tld: country.tld,
        currencies: Object.values(country.currencies).map(c => c.name),
        languages: Object.values(country.languages),
        borders: country.borders
    }
}

export const getCountriesByContinent = async continent => {
    // const endpoint = `/continents/${continent}`
    // const response = await fetch(endpoint, {
    //     method: 'GET'
    // })

    // const json = await response.json()

    // return json

    return countries.filter(country => country.region.toLowerCase() == continent)
}

export const getBorderCountries = async borderCode => {
    return borderCode.map(b => {
        let borderCountry = countries.find(country => country.cca3 === b)
        return borderCountry
    })
}
