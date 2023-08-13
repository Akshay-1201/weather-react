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
      })
    }
  }
  const dateBuilder = (d) =>{
    let months = ["January", "february","March", "April", "May", "June", "July", "Augest", "September","October","November", "December"];
    let days = ["sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return `${day} ${date} ${month} ${year}`
  }
  return (
    <>
      <main>
        <div className='search-box'>
          <input type='text' className='search-bar' placeholder='city name' value={query} onChange={e => setQuery(e.target.value)} onKeyPress={search} />
        </div>
        <div className='location-box'>
          <div className='location'>
            {weather.name},{weather.sys.country}
          </div>
          <div className='date'>
            {dateBuilder(new Date())}
          </div>
        </div>
      </main>
    </>
  )
}

export default Wed;