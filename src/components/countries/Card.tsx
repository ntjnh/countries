import type { CountryCard } from '../../types/country'

export default function Card({
  cca3,
  name,
  population,
  region,
  capital,
  flag
}: CountryCard) {
  return (
    <article id={cca3}>
      <h2>{name}</h2>
      <p>{population}</p>
      <p>{region}</p>
      <p>{capital}</p>
      <img src={flag} alt={name} />
    </article>
  )
}
