import dotenv from 'dotenv';
dotenv.config();

export const getIconData = (req, res) => {
    const params = new URLSearchParams({
        q: city,
        appid: apiKey,
        units: 'imperial',
    });

    const url = `https://pro.openweathermap.org/data/2.5/weather?${params}`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            res.send({ data });
        })
        .catch((err) => {
            console.error('Error fetching weather data:', err);
            res.status(500).json({ message: 'Internal Server Error', detail: err.message });
        });
    };





