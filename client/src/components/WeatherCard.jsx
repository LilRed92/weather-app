import React, { useState } from 'react';

function WeatherCard({ weatherResults, city }) {
    const [icon, setIcon] = useState([]);

    console.log(weatherResults);
    const mainWeather = `${weatherResults.data.weather[0].main}`
    const iconCode = `${weatherResults.data.weather[0].icon}`
    <p><img src={`https://openweathermap.org/payload/api/media/file/${weatherIcon}@2x.png`} alt="Weather Icon" /></p>

    const handleChildIcon = (icon) => {
        setIcon(icon);
    }

    return (
        <div className="weather-card">
            <div className="results">
                <h2>Here's the current weather in {city}</h2>
                <WeatherIcon onIconReceived={handleChildIcon} toChild={iconCode}/>
                <p>Condition: {mainWeather}</p>
                <p>Temperature: {weatherResults.data.main.temp}°</p>
                <p>Humidity: {weatherResults.data.main.humidity}%</p>
                <p>Wind Speed: {weatherResults.data.wind.speed} mph</p>

            </div>
        </div>
    );
}

export default WeatherCard;