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
  const dateBuilder =(d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "sturday"];
  }
  return (
    <div>
      <main>
        <div className='search-box'>
          <input type='text' className='search-bar' placeholder='city name' value={query} onChange={e => setQuery(e.target.value)} onKeyPress={search} />
        </div>
        <div >
          <div className='location-box'>
            <div className='location'>
              {weather.name},{weather.sys.country}
              <div className='date'>
                {dateBuilder(new Date())}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Wed;