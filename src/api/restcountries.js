import europe from '../mocks/data/europe.json'
import asia from '../mocks/data/asia.json'
import africa from '../mocks/data/africa.json'
import americas from '../mocks/data/americas.json'
import oceania from '../mocks/data/oceania.json'
const countries = [...europe, ...asia, ...africa, ...americas, ...oceania]

export const getCountries = () => {}

export const getCountry = async slug => {
    // const endpoint = `/countries/${slug}`
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
        // borders: country.borders,
        borders: ['PRT', 'DNK', 'GBR', 'AUT'],
    
        // borderCountries: country.borders.map(border => {
        //     let borders = countries.filter(c => c.cca3 === border)[0]
        //     return borders.name.common
        // })
    }
}

export const getContinents = () => {}
