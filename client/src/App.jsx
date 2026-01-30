import { useState } from 'react';
import WeatherForm from './components/WeatherForm.jsx';
import WeatherCard from './components/WeatherCard.jsx';
import './App.css';

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [results, setResults] = useState([]);
  const [city, setCity] = useState([]);

  const handleChildData  = (results) => {
    setIsSubmitted(true);
    setResults(results);
  };

  const handleChildCity = (city) => {
    setCity(city);
  }

  return (
    <div className="App">
      <h1>Weather App</h1>
      {!isSubmitted ? (
        <WeatherForm onDataReceived={handleChildData} onCityReceived={handleChildCity} />
      ) : (
        <WeatherCard weatherResults={results} city={city} />
      )} 
    </div>
  )
}

export default App
