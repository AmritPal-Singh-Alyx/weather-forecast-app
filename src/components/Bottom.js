import React from 'react';
import '../style/bottom.css';

function bottom({ weatherData }) {

  if (!weatherData || !weatherData.location || !weatherData.current) {
    return null; // Or display a loading indicator or an error message
  }
  return (
    <div className='bottom-container'>

      <div className='wind'>{weatherData.current.wind_kph} <p>KPH</p> </div>
      <div className='air-quality'> {weatherData.current.air_quality.pm10} <p>AQI</p> </div>
      <div className='humidity'> {weatherData.current.humidity} <p> Humidity</p> </div>


    </div>
  )
}

export default bottom