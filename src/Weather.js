import React, { useState } from "react";
import axios from "axios";
import FormattedDate from './Date';

export default function Weather(props) {
  
  const [weatherData, setWeatherData] = useState({ ready: false});

  function handleResponse(response){

    console.log(response.data);
    setWeatherData({
ready: true,
date: new Date(response.data.dt * 1000),
temperature: response.data.main.temp,
wind: response.data.wind.speed,
city: response.data.name,
humidity: response.data.main.humidity,
description: response.data.weather[0].description,

    })
  }

  if (weatherData.ready){
 return (
        <div className="App">
       <div className="container">
    <div className="card-group">
      <div className="card">
      <h1 class="city" id="current-city">{weatherData.city}</h1>
       <h2 id="date"> <FormattedDate date={weatherData.date} /> </h2>
        <div class="card border-danger mb-3" class="current-weather">
                       <img
                       src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                       class="float-left"
                       id="icon"
                       />
                         <div class="card-header">
                  <span class="current-temp" id="city-temp"> {Math.round(weatherData.temperature)}</span> <a href="#" id="celsius-link" class="active">°C</a> | <a href="#" id="fahrenheit-link">F°</a>
                <br /> <p id ="temperature-description" className="text-capitalize"> {weatherData.description}</p></div>
            <div class="card-body text-danger">
              <h5 class="card-title">Real feel: 20<span id="real-feel"></span><span id="metric">°</span></h5>
              <p class="card-text"> {weatherData.humidity}%<i class="fas fa-tint"></i> <span id="humidity"> </span> <br />
                <i class="fas fa-wind"></i> Wind: {Math.round(weatherData.wind)} <span id="speed"></span><span id="wind-unit"> km/h</span></p>
            </div>               
          
    </div>
    </div>
    </div> 
     </div>
    <footer id="git-hub"> <a href="https://github.com/DeborahBarbosaOliveira/SheCodesForecast" id="my-github" target="_blank">Open-source code</a> <br /> by <a href="https://www.linkedin.com/in/deborah-barbosa-oliveira/" id="my-linkedin" target="_blank">Deborah barbosa</a></footer> 
    </div>
  );
  } else {
  
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=8ace475fd8f2a50f825109d1b6a3c226&units=metric`;
  axios.get(apiUrl).then(handleResponse); 

  return "wait..."}
}