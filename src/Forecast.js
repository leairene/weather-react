import React from "react";

import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <main>
        <span>
          <a href="#" id="celsius-symbol">
            Cº
          </a>
          |
          <a href="#" id="fahrenheit-symbol">
            Fº
          </a>
        </span>
        <div className="row">
          <div className="col-5 forecast-today">
            <h1 id="display-city">Ålesund</h1>
            <h4>Saturday 20:02</h4>
            <h2>
              <span id="display-temp">21</span>
              °C
            </h2>
            <h3>
              <i className="fa-solid fa-sun"></i>
            </h3>
            <div className="d-flex justify-content-between">
              Feels like:
              <span id="display-feel"> 25°C</span>
            </div>
            <div className="d-flex justify-content-between">
              Wind:
              <span id="display-wind"> 2 m/s</span>
            </div>
            <div className="d-flex justify-content-between">
              Humidity:
              <span id="display-humidity"> 40%</span>
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
}
