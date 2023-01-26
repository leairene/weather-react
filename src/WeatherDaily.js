import React from "react";

import WeatherIcon from "./WeatherIcon";

export default function WeatherDaily(props) {
  function dailyTemp() {
    let temp = Math.round(props.data.temperature.day);
    return `${temp}°C`;
  }

  return (
    <div className="forecast-next-day d-flex justify-content-between">
      <span>{props.data.time}</span>
      <span>
        {dailyTemp()}
        <WeatherIcon code={props.data.condition.icon} size={20} />
      </span>
    </div>
  );
}
