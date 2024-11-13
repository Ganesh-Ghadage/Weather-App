import React, { useState } from 'react'

interface props {
    data: any,
    error: string | null
}

function WeatherCard({data, error}: props) {
    
  if(error){
    return (
        <div className='mt-10 bg-white w-80 h-60 rounded-xl'>
            <h1>{error}</h1>
        </div>
        
    )
  }

  if(data.name){
    return (
        <div className='mt-10 bg-white bg-opacity-50 rounded-xl p-4 flex flex-col items-center'>
            <h1 className='text-xl font-bold'>📍 {data?.name}</h1>
            <div className='flex gap-4 mt-4 text-xl'>
                <div>
                    <h2>🌡️ Temperature: {data?.main?.temp} C</h2>
                    <h2>⏱ Pressure: {data?.main?.pressure} hPa</h2>
                </div>
                <div>
                    <h2>💧 Humidity: {data?.main?.humidity} %</h2>
                    <h2>💨 Wind Speed: {data?.wind.speed} m/s</h2>
                </div>
            </div>
            <div className='mt-4 text-center'>
                <h2 className='text-xl font-bold'>Weather</h2>
                <div>
                    <h2 className='text-lg'>{data?.weather[0].description}</h2>
                </div>
            </div>
        </div>
    )
    }

    return (
        <></>
    )
}

export default WeatherCard