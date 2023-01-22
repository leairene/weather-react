import React, { useState } from "react";

import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
    const [unit, setUnit] =  useState("celsius");

    function showFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function showCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }

    function fahrenheit() {
        return ( (props.celsius * 9) /5 + 32)
    }

    if (unit === "celsius") {
        return (
        <div className="WeatherTemperature">
            <h3>{Math.round(props.celsius)}</h3>
            <span className="unit">
            <strong>°C </strong> |{" "}
            <a href="/" onClick={showFahrenheit}>
                °F
            </a>
            </span>
        </div>
        );
    } else {
        return (
          <div className="WeatherTemperature">
            <h3>{Math.round(fahrenheit())}</h3>
            <span className="unit">
              <a href="/" onClick={showCelsius}>
                °C
              </a>{" "}
              | <strong>°F</strong>
            </span>
          </div>
        );
    }
}