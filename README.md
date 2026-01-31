# Weather App

![Build Status](https://img.shields.io/badge/build-passing-brightgreen) ![React](https://img.shields.io/badge/React-18.x-blue) ![Express](https://img.shields.io/badge/Express-4.x-lightgrey) ![License](https://img.shields.io/badge/license-MIT-green)

A full-stack weather application that allows users to search for current weather conditions in any city. The app features a React frontend that communicates with an Express backend to fetch and display real-time data from the OpenWeatherMap API.

## 🚀 Features

* **Real-time Weather Data:** Fetches current temperature, humidity, wind speed, and weather conditions.
* **Dynamic Search:** Users can search for weather by city name.
* **Visual Conditions:** Displays dynamic weather icons (sunny, rainy, cloudy, snowy) based on the current forecast.
* **Responsive Design:** Fully responsive interface that works on desktop and mobile devices.
* **Backend Integration:** Secure proxy server using Express to handle API requests and protect keys.

## 📸 Screenshots & Demos

**Desktop**

<img width="2880" height="1388" alt="client" src="https://github.com/user-attachments/assets/8a89d407-756b-43d5-9027-2955c18b772f" />

**GIF**

![new-client](https://github.com/user-attachments/assets/3e7ea22e-dcb4-415a-a90e-13e0958809dc)



## 🛠 Tech Stack

**Frontend:**
* React.js
* HTML5 / CSS3

**Backend:**
* Node.js
* Express.js

**API:**
* [OpenWeatherMap API](https://openweathermap.org/api)

## 📂 API Reference

This project uses the OpenWeatherMap API. The backend acts as a proxy to forward these requests.

### Get Current Weather

```
http
GET /api/results
```

### External API Call (handled by backend)

HTTP
  (https://api.openweathermap.org/data/2.5/weather)

| Parameter | Type   | Description                              |
|-----------|--------|------------------------------------------|
| q         | ```string``` | **Required.** City name to search        |
| appid     | ```string``` | **Required** Your OpenWeatherMap API key |
| units     | ```string``` |  Measurements (metric : imperial)        |


## ⚙️ Environment Variables
To run this project, you will need to add the following environment variables to your ```.env``` file in the root directory:

- ```PORT``` - The port the backend server runs on (e.g., 5000) 
- ```API_KEY``` - Your OpenWeatherMap API Key

## 💻 How to Run Locally

Clone the project & go to the project directory

```bash
  git clone (https://github.com/LilRed92/weather-app.git)
  cd weather-app
```
### Backend Setup
1. Go to the server directory

```bash
  cd server
```

1. Install dependencies

```bash
  npm install
```

1. Start the server

```bash
  npm run dev
```

### Frontend Setup

1. Open a new terminal and navigate to the client folder

```bash
  cd client
```

1. Install dependencies

```bash
  npm install
```

1. Start the React app

```bash
  npm run dev
```

