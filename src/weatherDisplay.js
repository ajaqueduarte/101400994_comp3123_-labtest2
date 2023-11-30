import React from 'react';
import './weatherDisplay.css'; // Ensure you have this CSS file for styling

function WeatherDisplay({ data, city }) {
  // Check if data and data.current are defined before trying to access data.current.temp_c
  if (!data || !data.current) {
    // You can return a loading spinner here or null to render nothing
    return <div>Loading...</div>; // Or your loading component
  }

  return (
    <div className="weather-display">
      <h2>Weather in {city}</h2>
      <div className="current-weather">
        <p>Temperature: {data.current.temp_c}°C</p>
        <p>Condition: {data.current.condition.text}</p>
        {/* Add more weather details as needed */}
      </div>
    </div>
  );
}

export default WeatherDisplay;
