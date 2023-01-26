import React, { useState } from "react";
import axios from "axios";
import WeatherForecast from "./WeatherForecast";

import "./Searchbar.css";

export default function SearchBar(props) {
  const [city, setCity] = useState(props.defaultCity);
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
      icon: response.data.condition.icon
    });
  }

  function search() {
    const apiKey = "9ffb9f94bt43ca48fd62332a60oc4b85";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.loaded) {
    return (
      <div>
        <WeatherForecast data={weatherData} />
        <form className="new-city" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-6">
              <input
                type="search"
                placeholder="Search for a city"
                className="search-bar"
                id="city-bar"
                autocomplete="off"
                onChange={handleChange}
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
              />
            </div>
          </div>
        </form>
        <br />
        <p>or go to...</p>
      </div>
    );
  } else {
    search();
    return "loading...";
  }
}
