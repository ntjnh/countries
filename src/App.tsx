import { useCountries } from './hooks/useCountries'
import './App.css'
import { List } from './components/countries/List'

function App() {
  
  return (
    <>
      <h1>Countries</h1>

      <List countries={useCountries()} />
    </>
  )
}

export default App
