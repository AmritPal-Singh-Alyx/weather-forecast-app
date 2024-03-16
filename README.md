# Weather Forecast App

This is a simple weather forecast app built with React. It allows users to search for weather information by location using the WeatherAPI.

# Technologies Used
• React
• WeatherAPI
• Libraries:
• @iconscout/react-unicons
• react-icons

## Features
• Search for weather data by location
• Display real-time weather information
• Location name, region, country
• Temperature
• Weather icon
• Wind speed
• Air quality (AQI)
• Humidity

## Components
The app is structured into the following main components:

• App Component: The root component that renders the Search, Top, and Bottom components.
• Search Component: Allows users to search for weather data by location.
• Top Component: Displays location name, region, country, temperature, and weather icon.
• Bottom Component: Displays additional weather details such as wind speed, air quality, and humidity.

## Custom Hook: useFetchData
The useFetchData hook is used to fetch weather data from the WeatherAPI based on the provided location.

## Folder Structure
 `weather-forecast/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── App.js
│   │   ├── Search.js
│   │   ├── Top.js
│   │   ├── Bottom.js
│   │   ├── config.js
│   ├── utils/
│   │   └── useFetchData.js
│   ├── style/
│   │   ├── App.css
│   │   ├── Search.css
│   │   ├── Top.css
│   │   ├── Bottom.css
│   ├── index.js
│   ├── App.test.js
│   ├── reportWebVitals.js
│   ├── setupTests.js
├── .gitignore
├── package-lock.json
├── package.json
└── README.md`


