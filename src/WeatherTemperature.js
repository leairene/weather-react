import React from "react";

import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  return (
    <div className="WeatherTemperature">
        <h3>{Math.round(props.celsius)}</h3>
        <span className="unit">
        <strong>°C </strong>
        </span>
    </div>
   );
}