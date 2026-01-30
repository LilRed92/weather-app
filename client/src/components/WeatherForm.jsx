import React, { useState } from 'react';

function WeatherForm(props) {
    const [city, setCity] = useState("");
    const [weatherData, setWeatherData] = useState(null);

    const fetchData = async () => {
        try {
        const response = await fetch('http://localhost:3000/api/results');
        const data = await response.json();
        setWeatherData(data);
        console.log(data);

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
}



export default WeatherForm;