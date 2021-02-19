import React from "react";
import FormattedDate from "./Date";
import Temperature from "./Temperature";

export default function MainInfo(props){
    return (
    <div className="MainInfo">
     <h1 class="city" id="current-city">{props.data.city}</h1>
       <h2 id="date"> <FormattedDate date={props.data.date} /> </h2>
        <div class="card border-danger mb-3" class="current-weather">                    
                         <div class="card-header">
                  <span class="current-temp" id="city-temp"> <img src={props.data.iconUrl} /> 
                  </span>  
                  <Temperature celsius={props.data.temperature} /> 
                <br /> <p id ="temperature-description" className="text-capitalize"> {props.data.description}</p></div>
            <div class="card-body text-danger">
              <h5 class="card-title">Real feel: 20<span id="real-feel"></span><span id="metric">°</span></h5>
              <p class="card-text"> {props.data.humidity}%<i class="fas fa-tint"></i> <span id="humidity"> </span> <br />
                <i class="fas fa-wind"></i> Wind: {Math.round(props.data.wind)} <span id="speed"></span><span id="wind-unit"> km/h</span></p>
            </div>               
          
    
    </div>
    </div>);}