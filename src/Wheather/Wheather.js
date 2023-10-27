import React, { useState } from 'react'

const api = {
    key : '362355414e6ae76e48bb15e9f9a890d6',
    base: 'https://api.openweathermap.org/data/2.5/',
}

function Wheather() {

    const [search, setSearch] = useState("");
    const [weather, setWeather] = useState({});

    const saerchPressed = ()=>{
        fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) =>{
            setWeather(result);
        });
    }
    
  return (
    <div style={{backgroundColor:"#032F62",padding:'20px'}}>
      <h1 style={{color:'white'}}>Weather</h1>

      {/* Search Box */}
      <input 
      type='text' 
      placeholder='Enter city/town...'
      onChange={(e)=>setSearch(e.target.value)}
      />

      <button onClick={saerchPressed}>Search</button>

      {typeof weather.main !=="undefined" ? (
        <div>
           {/* Location */}
      <p style={{marginTop:'20px',color:'white'}}>{weather.name}</p>

      {/* Temperature F/C */}
      <p style={{marginTop:'20px',color:'white'}}>{weather.main.temp}°C</p>

     {/* Condition {Sunny} */}
     <p style={{marginTop:'20px',color:'white'}}>{weather.weather[0].main}</p>
     <p style={{marginTop:'20px',color:'white'}}>({weather.weather[0].description})</p>
        </div>
      ):(
      ''
    )}
    </div>
  )
}

export default Wheather
