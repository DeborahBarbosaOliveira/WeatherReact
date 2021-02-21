import React from "react";
import FormattedDate from "./Date";
import Temperature from "./Temperature";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import { WiRaindrop } from "weather-icons-react";
import { WiStrongWind } from "weather-icons-react";




export default function MainInfo(props){
    return ( <div className="container">
    <div className="card-group">
      <div className="card">
        <h2 className="city"> {props.data.city} </h2>
        <h3 id="date"> <FormattedDate date={props.data.date} /> </h3>
        <div className="card border-danger mb-3">
        
                  <div className="card-header">
            <span className="current-temp" > <Temperature celsius={props.data.temperature} /> </span> 
            <br />  
            <p className="text-capitalize">   <div className="icon">
          <WeatherIcon code={props.data.icon} className="current-icon" /> </div>{props.data.description}</p>
          </div>
          <div className="card-body text-danger">
            <h5 className="card-title">Real feel: {Math.round(props.data.feel)}°</h5>
            <p className="card-text"> <i className="bi bi-droplet"></i> <span > <WiRaindrop size={24} color="blue" />   {props.data.humidity} </span> <br />
               <span > <WiStrongWind size={24} color="black" />{Math.round(props.data.wind)}</span> <span> km/h</span></p>
          </div>
        </div>
     </div>
    </div>
  </div>);}