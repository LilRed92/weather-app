import { useState,useEffect } from 'react';
import WeatherForm from './components/WeatherForm.jsx';
import './App.css';

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [results, setResults] = useState([null]);

  const handleChildData  = (results) => {
    setIsSubmitted(true);
    setResults(results);
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      {!isSubmitted ? (
        <WeatherForm onDataReceived={handleChildData} />
      ) : (
        <WeatherCard weatherData={results} />
      )}
      
    </div>
  );
}

export default App
