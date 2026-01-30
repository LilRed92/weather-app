function WeatherCard({ weatherData }) {

    return (
        <div className="weather-card">
            <div className="results">
                <h2>Here's the current weather in {weatherData.name}</h2>
                //TODO:
                // current weather icon
                <p>Condition: {weatherData.weather.main}/p>
                // temperature
                <p>Temperature: {weatherData.main.temp}°</p>
                <p>Description: {weatherData.weather[0].description}</p>
                // humidity
                <p>Humidity: {weatherData.main.humidity}%</p>
                // wind speed
                <p>Wind Speed: {weatherData.wind.speed} mph</p>

            </div>
        </div>
    );
}

export default WeatherCard;