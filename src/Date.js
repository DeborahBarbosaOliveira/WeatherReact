import React from "react";
import "./WeatherForecast.css";

export default function FormattedDate(props){
    let days =  ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    let day = days[props.date.getDay()];

    let hours = props.date.getHours();
    let minutes = props.date.getMinutes();

    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    let month = months[props.date.getMonth()];

    let date = props.date.getDate();
     
    return (<div> |{day}, {month}/{date}| <br /> {hours}:{minutes}</div>);
}