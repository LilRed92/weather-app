<script src="http://localhost:8097"></script>
import ReactDom from 'react-dom';
import React, { useState } from 'react';

function WeatherForm({ onDataReceived, onCityReceived }) {
    const [city, setCity] = useState([]);
    //const [results, setResults] = useState([]);

    const fetchData = async () => {
      try {
          const params = new URLSearchParams({ cityName: city });
          const response = await fetch(`http://localhost:3000/api/results?${params}`);
          if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
          };
          const data = await response.json();

          onDataReceived(data);
          onCityReceived(city);

      } catch (err) {
          console.error('Fetch error:', err);
      }
    };

         

  const handleInputChange = (event) => {
    // capture and handle city input value
    setCity(event.target.value)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData();
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
        <input
            type="text"
            value={city}
            onChange={handleInputChange}
            placeholder="Enter city name"
        />
        <button type="submit">Get Weather</button>
    </form>
    </>
  )
}



export default WeatherForm;