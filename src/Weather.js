import React, { useState } from "react";
import axios from "axios";
import MainInfo from "./MainInfo";
import Forecast from "./Forecast";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Weather(props) {

const [weatherData, setWeatherData] = useState({ ready: false});
const [city, setCity] = useState(props.defaultCity); 

function handleResponse(response) {
  console.log(response.data)
  setWeatherData(
  {ready: true,
date: new Date(response.data.dt * 1000),
temperature: response.data.main.temp,
wind: response.data.wind.speed,
city: response.data.name,
icon: response.data.weather[0].icon,
humidity: response.data.main.humidity,
feel: response.data.main.feels_like,
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
          <Forecast city={weatherData.city} />;
        </div> 
      </div>
    </div>
  );
  } else {
    search();
    
    return "searching..."}}