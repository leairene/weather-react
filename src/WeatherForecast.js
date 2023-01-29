import React, { useState, useEffect } from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import axios from "axios";
import WeatherDaily from "./WeatherDaily";

import "./WeatherForecast.css";

export default function WeatherForecast(props) { 
 let [loaded, setLoaded] = useState(false);
 let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.data]);
 
  function handleResponse(response) {
   setForecast(response.data.daily);
   setLoaded(true);
 }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col-5 forecast-today">
            <h1>{props.data.cityName}</h1>
            <h4>
              <FormattedDate Date={props.data.date} />
            </h4>
            <div className="currentWeather">
              <WeatherIcon
                code={props.data.icon}
                alt={props.data.description}
                size={64}
              />
              <span>
                <WeatherTemperature celsius={props.data.temp} />
              </span>
            </div>
            <div className="d-flex justify-content-between">
              Feels like:
              <span id="display-feel">
                {" "}
                {Math.round(props.data.feelsLike)} °C{" "}
              </span>
            </div>
            <div className="d-flex justify-content-between">
              Wind:
              <span id="display-wind"> {Math.round(props.data.wind)} m/s</span>
            </div>
            <div className="d-flex justify-content-between">
              Humidity:
              <span id="display-humidity"> {props.data.humidity} %</span>
            </div>
          </div>
          <div className="col-7 forecast-styling">
            {forecast.map(function(dailyForecast, index) {
              if (index < 5) {
                return (
                  <div key={index}>
                    <WeatherDaily data={dailyForecast} />
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "9ffb9f94bt43ca48fd62332a60oc4b85";
    let city = props.data.cityName;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    return ("loading...")
  }
  
  
} 
