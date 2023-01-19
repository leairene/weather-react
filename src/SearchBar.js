import React, { useState } from "react";
import axios from "axios";
import Forecast from "./Forecast";

import "./Searchbar.css";

export default function SearchBar() {
  const [weatherData, setWeatherData] = useState({loaded: false});
  
  function handleResponse(response) {
    setWeatherData({
      loaded: true,
      temp: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      feelsLike: response.data.temperature.feels_like,
      wind: response.data.wind.speed,
      cityName: response.data.city,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      iconUrl: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png`,
    });
  }

  if (weatherData.loaded) {
    return (
      <div>
        <Forecast data={weatherData} />
        <form className="new-city" id="city-form">
          <div className="row">
            <div className="col-6">
              <input
                type="search"
                placeholder="Search for a city"
                className="search-bar"
                id="city-bar"
                autocomplete="off"
              />
            </div>
            <div className="col-3 go-button">
              <input
                type="submit"
                value="Go!"
                className="search-button form-control"
              />
            </div>
            <div className="col-3 current-button">
              <input
                type="submit"
                value="Current"
                className="search-button form-control"
                id="current-location"
              />
            </div>
          </div>
        </form>
        <br />
        <p>or go to...</p>
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
