import React from "react";

export default function FormattedDate(props) {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[props.Date.getDay()];
    let hours = props.Date.getHours();
     if (hours < 10) {
       hours = `0${hours}`;
     }
    let minutes = props.Date.getMinutes();
     if (minutes < 10) {
        minutes = `0${minutes}`;
     }

    return (<div> {day} {hours}:{minutes}</div>)  
}