//import React, { useState } from 'react';

function WeatherCard({ weatherResults, city }) {
    // const [icon, setIcon] = useState([]);

    const mainWeather = `${weatherResults.data.weather[0].main}`
    const iconCode = `${weatherResults.data.weather[0].icon}`
    

    // const handleChildIcon = (icon) => {
    //     setIcon(icon);
    // }

    return (
        <div className="weather-card">
            <div className="results">
                <h2>Here's the current weather in {city}</h2>
                <p><img src={`http://openweathermap.org/img/w/${iconCode}.png`} alt="Weather Icon" /></p>
              
                <p>Condition: {mainWeather}</p>
                <p>Temperature: {weatherResults.data.main.temp}°</p>
                <p>Humidity: {weatherResults.data.main.humidity}%</p>
                <p>Wind Speed: {weatherResults.data.wind.speed} mph</p>

            </div>
        </div>
    );
}

export default WeatherCard;