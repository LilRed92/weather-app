import { useState,useEffect } from 'react';
import axios from 'axios';
import WeatherForm from './components/WeatherForm.jsx';
import './App.css';

function App() {
  const [city, setCity] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(null);
  const [result, setResult] = useState([]);

  

  // const fetchData = async () => {
  //   const response = await axios.get('http://localhost:3000/api/results');
  //   setResult(response.data);
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // useEffect(() => {
  //   axios.get('http://localhost:3000/api/results')
  //     .then(res => {
  //       if (!res.ok) throw new Error('Network response was not ok');
  //       return res;
  //     })
  //     .then(res => {
  //       setResult(res.data);
  //       console.log(res.data);
  //     })
  //     .catch(err => console.error('Fetch error:', err));
  // });

  return (
    <>
      {/* <WeatherForm city={city} handleSubmit={handleSubmit} />
      {!is} */}
    </>
  )
}

export default App
