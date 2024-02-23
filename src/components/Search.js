import React, { useEffect, useState } from 'react';
import '../style/Search.css';
import { MdSearch } from "react-icons/md";
import { API_KEY } from './config';
import Top from './Top';
import Bottom from './Bottom';

function Search() {
  const [searchText, setSearchText] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  }

  async function fetchData() {
    try {
      const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${searchText}&aqi=yes`);
      if (!res.ok) {
        throw new Error('Network is not responding')
      }
      const data = await res.json();
      console.log(data);
      setWeatherData(data);
    } catch (error) {
      console.error('An error occurred while fetching the Data', error);
      setError('An Error occurred while fetching the Data')
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = () => {
    fetchData();
  }
  const handleKeyDown = (e) => {
    const key = e.key;

    if (key === 'Enter') {
      fetchData()
    }
  }

  return (
    <div className='container'>
      <div className='search-container'>
        <div className='search'>
          <input
            className='searchText'
            placeholder='Search Location'
            value={searchText}
            onChange={handleSearch}
            onKeyDown={handleKeyDown}
          />
        </div>
        <div>
          <button
            className='search-btn'
            onClick={handleClick}
          >
            <MdSearch />
          </button>
        </div>

      </div>
      <div className='weather-data'>
        {weatherData && weatherData.location && weatherData.current && (
          <>
            <Top weatherData={weatherData} />
            <Bottom weatherData={weatherData} />
          </>
        )}
        {weatherData && !weatherData.location && (
          <p>Location not found</p>
        )}
      </div>


    </div>
  )
}

export default Search;
