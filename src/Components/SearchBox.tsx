import React from 'react'

interface props {
    city: string,
    setCity: React.Dispatch<React.SetStateAction<string>>,
    setData:  React.Dispatch<React.SetStateAction<{}>>,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setError: React.Dispatch<React.SetStateAction<string | null>>
}

function SearchBox({city, setCity, setData, setLoading, setError}: props) {

    const handleSubmit = async (e: React.FormEvent): Promise<void> => {
        e.preventDefault()
        setLoading(true)

        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},IN&units=metric&appid=${import.meta.env.VITE_WEATHER_API_KEY}`)
            const data = await response.json()
            
            console.log(data);
            setData(data)
        } catch (err) {
            if(err instanceof Error) {
                setError(err.message)
            }
        }
        setLoading(false)
        
        
    }

  return (
    <div>
        <form onSubmit={(e) => handleSubmit(e)}>
            <input
                type='text'
                placeholder='Search your city'
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className='w-80 rounded-lg px-2 border-2 text-xl'
            />
            <button className='rounded-lg bg-blue-700 ml-4 text-xl px-2 text-white hover:bg-blue-800'>🔍 Search</button>
        </form>
    </div>
  )
}

export default SearchBox