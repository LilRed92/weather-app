function WeatherCard({ weatherData }) {

    return (
        <div className="weather-card">
            <div className="results">
                <h2>Here's today's weather in {weatherData.name}</h2>
                //TODO:
                // current weather icon
                // temperature
                // humidity
                // wind speed

            </div>
        </div>
    );
}

export default WeatherCard;