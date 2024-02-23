import React from 'react';
import '../style/Top.css'


function Top({ weatherData }) {

  if (!weatherData || !weatherData.location || !weatherData.current) {
    return null; // Or display a loading indicator or an error message
  }
  return (
    <div className='top-container'>
      <div className='Location-name'>
        <p>{weatherData.location.name}</p>
        <p>{weatherData.location.region}</p>
        <p>{weatherData.location.country}</p>
      </div>
      <div className='temperature'>
        <h1>{weatherData.current.temp_c}°C</h1>
      </div>
      <div className='day-icon'>
        <img src={weatherData.current.condition.icon} alt="Weather Icon" />
      </div>
    </div>
  )
}

export default Top;
