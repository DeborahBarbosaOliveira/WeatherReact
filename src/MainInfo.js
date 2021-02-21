import React from "react";
import FormattedDate from "./Date";
import Temperature from "./Temperature";
import WeatherIcon from "./WeatherIcon";

export default function MainInfo(props){
    return ( <div className="container">
    <div className="card-group">
      <div className="card">
        <h2 className="city" id="current-city"> {props.data.city} </h2>
        <h3 id="date"> <FormattedDate date={props.data.date} /> </h3>
        <div className="card border-danger mb-3" className="current-weather" >
          <div className="float-left">
        <WeatherIcon code={props.data.icon} /> </div>
                  <div className="card-header">
            <span className="current-temp" id="city-temp"> <i class="bi bi-thermometer"></i> <Temperature celsius={props.data.temperature} /> </span> 
            <br />
            <p id="temperature-description" className="text-capitalize">{props.data.description}</p>
          </div>
          <div className="card-body text-danger">
            <h5 className="card-title">Real feel: {Math.round(props.data.feel)}°</h5>
            <p className="card-text"> <i className="bi bi-droplet"></i> <span id="humidity"> Humidity:  {props.data.humidity} </span> <br />
              <i className="fas fa-wind"></i> Wind: <span id="speed">{Math.round(props.data.wind)}</span><span id="wind-unit"> km/h</span></p>
          </div>
        </div>
     </div>
    </div>
  </div>);}