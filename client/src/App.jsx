import { useState,useEffect } from 'react';
import axios from 'axios';
import WeatherForm from './components/WeatherForm.jsx';
import './App.css';

function App() {
  const [values, setValues] = useState([]);
  const [result, setResult] = useState(null);
  

  const fetchData = async () => {
    const response = await axios.get('http://localhost:3000');
    setArray(response.data);
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
