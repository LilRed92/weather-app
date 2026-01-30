import dotenv from 'dotenv';
dotenv.config();

import React, { useState } from 'react';

function WeatherForm({ onDataReceived, onCityReceived }) {
    const [city, setCity] = useState([]);
    //const [results, setResults] = useState([]);

    const fetchData = async () => {
      try {
          const params = new URLSearchParams({ cityName: city });
          const response = await fetch(`http://localhost:3000/api/results?${params}`);
          if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
          };
          const data = await response.json();

          onDataReceived(data);
          onCityReceived(city);

      } catch (err) {
          console.error('Fetch error:', err);
      }
    };