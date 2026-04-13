import { useParams } from 'react-router'

function Country() {
  const params = useParams()

  return (
    <>
      <h1 style={{ textTransform: 'capitalize' }}>{params.country}</h1>
    </>
  )
}

export default Country
