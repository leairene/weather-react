import React from "react";
import FormattedDate from "./FormattedDate";

import "./Forecast.css";

export default function Forecast(props) { 
  return (
      <div className="Forecast">
          <div className="row">
            <div className="col-5 forecast-today">
              <h1>{props.data.cityName}</h1>
              <h4><FormattedDate Date={props.data.date} /></h4>
              <div className="currentWeather">
                <img
                  src={props.data.iconUrl}
                  alt={props.data.description}
                />
                <span>
                  <h3>{Math.round(props.data.temp)}</h3>
                  <strong className="unit">°C</strong>
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
                <span id="display-wind">
                  {" "}
                  {Math.round(props.data.wind)} m/s
                </span>
              </div>
              <div className="d-flex justify-content-between">
                Humidity:
                <span id="display-humidity"> {props.data.humidity} %</span>
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
      </div>
    );
} 
