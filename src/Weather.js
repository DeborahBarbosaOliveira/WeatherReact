import React, { useState } from "react";
import axios from "axios";
import MainInfo from "./MainInfo";

export default function Weather(props) {
  
const [weatherData, setWeatherData] = useState({ ready: false});
const [city, setCity] = useState(props.defaultCity); 

function handleResponse(response)
{setWeatherData(
  {ready: true,
date: new Date(response.data.dt * 1000),
temperature: response.data.main.temp,
wind: response.data.wind.speed,
city: response.data.name,
iconUrl:`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
humidity: response.data.main.humidity,
description: response.data.weather[0].description})
  }

  function search(){
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8ace475fd8f2a50f825109d1b6a3c226&units=metric`;
  axios.get(apiUrl).then(handleResponse); 
  }


function handleSubmit(event)
{event.preventDefault()
search();}

function handleNewCity(event){
setCity(event.target.value);
}

  if (weatherData.ready){
 return (
    <div className="App">
      <div className="container">
        <div className="card-group">
          <div className="card">
        <MainInfo data={weatherData} />
          <form onSubmit={handleSubmit} id="search-form">
              <input type="submit" value="📍" />
              <input onChange={handleNewCity} type="text" autocomplete="off" autofocus="on" id="input-city" placeholder="Enter a city!" />
          </form>
          </div>
        </div> 
      </div>
    <footer id="git-hub"> <a href="https://github.com/DeborahBarbosaOliveira/SheCodesForecast" id="my-github" target="_blank">Open-source code</a> <br /> by <a href="https://www.linkedin.com/in/deborah-barbosa-oliveira/" id="my-linkedin" target="_blank">Deborah barbosa</a></footer> 
    </div>
  );
  } else {
    search();
    
    return "searching..."}}