import { useState } from 'react'
import './App.css'
import SearchBox from './Components/SearchBox'
import WeatherCard from './Components/WeatherCard'

function App() {
  const [city, setCity] = useState<string>('')
  const [data, setData] = useState({})
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  return (
    <>
      <div className='flex flex-col items-center w-[100%] h-[100%] gap-5'>
        <div className='mt-10 flex items-center gap-4'>
          <img src='weather-logo.svg' className='h-14'></img>
          <h1 className="text-white text-5xl font-extrabold w-fit">Weather App</h1>
        </div>
        

        <SearchBox city={city} setCity={setCity} setData={setData} setLoading={setLoading} setError={setError} />
        
        <div className='w-4 h-4'>
          {loading && <h1>Loading...</h1>}
        </div>
        
        
        <WeatherCard data={data} error={error} />
      </div>
    </>
  )
}

export default App
