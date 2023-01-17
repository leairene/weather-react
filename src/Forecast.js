import React , { useState } from "react";
import axios from "axios";

import "./Forecast.css";

export default function Forecast() {
  const [weatherData, setWeatherData] = useState({loaded: false});
  
  function handleResponse(response) {
    console.log(response);
    setWeatherData({
      loaded: true,
      temp: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      feelsLike: response.data.temperature.feels_like,
      wind: response.data.wind.speed,
      name: response.data.city,
      date: "Saturday 20:02",
      description: response.data.condition.description,
      iconUrl: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png`,
    });
  }

  

  if (weatherData.loaded) {
    return (
      <div className="Forecast">
        <main>
          <div className="row">
            <div className="col-5 forecast-today">
              <h1>{weatherData.name}</h1>
              <h4>{weatherData.date}</h4>
              <div className="currentWeather">
                <img
                  src={weatherData.iconUrl}
                  alt={weatherData.description}
                />
                <span>
                  <h3>{Math.round(weatherData.temp)}</h3>
                  <strong className="unit">°C</strong>
                </span>
              </div>
              <div className="d-flex justify-content-between">
                Feels like:
                <span id="display-feel">
                  {" "}
                  {Math.round(weatherData.feelsLike)} °C{" "}
                </span>
              </div>
              <div className="d-flex justify-content-between">
                Wind:
                <span id="display-wind">
                  {" "}
                  {Math.round(weatherData.wind)} m/s
                </span>
              </div>
              <div className="d-flex justify-content-between">
                Humidity:
                <span id="display-humidity"> {weatherData.humidity} %</span>
              </div>
            </div>
            <div className="col-7 forecast-styling">
              <div className="next-day-1 forecast-next-day d-flex justify-content-between">
                Friday
                <span>
                  23°C
                  <i className="fa-solid fa-cloud-sun "></i>
                </span>
              </div>
              <div className="next-day-2 forecast-next-day d-flex justify-content-between">
                Saturday
                <span>
                  24°C
                  <i className="fa-solid fa-sun"></i>
                </span>
              </div>
              <div className="next-day-3 forecast-next-day d-flex justify-content-between">
                Sunday
                <span>
                  18°C
                  <i className="fa-solid fa-cloud-sun"></i>
                </span>
              </div>
              <div className="next-day-4 forecast-next-day d-flex justify-content-between">
                Monday
                <span>
                  15°C
                  <i className="fa-solid fa-cloud"></i>
                </span>
              </div>
              <div className="next-day-5 forecast-next-day d-flex justify-content-between">
                Tuesday
                <span>
                  14°C
                  <i className="fa-solid fa-cloud-showers-heavy"></i>
                </span>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  } else {
    const apiKey = "9ffb9f94bt43ca48fd62332a60oc4b85";
    let city = "Ålesund";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "loading...";
  }
} 
