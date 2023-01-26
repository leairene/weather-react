import React from "react";

import WeatherIcon from "./WeatherIcon";

export default function WeatherDaily(props) {
  function dailyTemp() {
    let temp = Math.round(props.data.temperature.day);
    return `${temp}°C`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    return days[day];
  }

  return (
    <div className="forecast-next-day d-flex justify-content-between">
      <span>{day()}</span>
      <span>
        {dailyTemp()}
        <WeatherIcon code={props.data.condition.icon} size={20} />
      </span>
    </div>
  );
}
