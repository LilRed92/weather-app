import dotenv from 'dotenv';
dotenv.config();

export const getWeatherData = (req, res) => {
    console.log("test 1");  
    // const city = req.query.cityName;
    const apiKey = process.env.VITE_WEATHER_API_KEY;
    const params = new URLSearchParams({
    //     q: req.cityName,
        appid: apiKey,
    //     units: 'imperial'
    });

    const url = `https://pro.openweathermap.org/data/2.5/weather?${params}`;
    console.log(url);
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            res.send({ data });
        })
        .catch((err) => {
            console.error('Error fetching weather data:', err);
        });
    };



