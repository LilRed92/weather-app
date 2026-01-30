

function WeatherCard({ weatherResults, city }) {

    console.log(weatherResults);
    const mainWeather = `${weatherResults.data.weather[0].main}`
    const weatherIcon = `${weatherResults.data.weather[0].icon}`

    return (
        <div className="weather-card">
            <div className="results">
                <h2>Here's the current weather in {city}</h2>
                <p><img src={`https://openweathermap.org/payload/api/media/file/${weatherIcon}@2x.png`} alt="Weather Icon" /></p>
                <p>Condition: {mainWeather}</p>
                <p>Temperature: {weatherResults.data.main.temp}°</p>
                <p>Humidity: {weatherResults.data.main.humidity}%</p>
                <p>Wind Speed: {weatherResults.data.wind.speed} mph</p>

            </div>
        </div>
    );
}

export default WeatherCard;