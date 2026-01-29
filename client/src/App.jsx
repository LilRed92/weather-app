import { useState,useEffect } from 'react';
import axios from 'axios';
import WeatherForm from './components/WeatherForm.jsx';
import './App.css';

function App() {
  const [city, setCity] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(null);
  const [result, setResult] = useState([]);

  

  const fetchData = async () => {
    const response = await axios.get('http://localhost:3000/api/results');
    setResult(response.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <WeatherForm city={city} handleSubmit={handleSubmit} />
      {!is}
    </>
  )
}

export default App
