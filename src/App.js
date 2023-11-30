import React, { useState } from 'react';
import SearchBar from './searchBar';
import WeatherDisplay from './weatherDisplay';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = (searchCity) => {
    setIsLoading(true);
    setError(null);
    // Use HTTPS for API requests
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=890217156a7e13ed492ba979545975cb`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Weather data not found for this city');
        }
        return response.json();
      })
      .then(data => {
        setWeatherData(data);
        setCity(searchCity);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
        setError(error.message);
        setIsLoading(false);
      });
  };

  return (
    <div className="App">
      <SearchBar onSearch={handleSearch} />
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {weatherData && <WeatherDisplay data={weatherData} city={city} />}
    </div>
  );
}

export default App;
