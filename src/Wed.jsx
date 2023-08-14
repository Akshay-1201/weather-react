import React, { useState } from 'react'

const api = {
  key:"e00107916a8cf402a9ce503dfe7a8b30",
  base:"https://api.openweathermap.org/data/2.5/"
}
const Wed = () => {
  const [query,setQuery] = useState('');
  const [weather,setWeather] = useState({});
  const search = evt => {
    if(evt.key === 'Enter'){
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res =>res.json())
      .then(result => {
        setWeather(result);
        setQuery('');
        console.log(result);
      })
    }
  }
  
  return (
    <>
      <main>
        <div className='search-box'>
          <input type='text' className='search-bar' placeholder='city name' value={query} onChange={e => setQuery(e.target.value)} onKeyPress={search} />
        </div>
        <div className='location-box'>
          
        </div>
      </main>
    </>
  )
}

export default Wed;