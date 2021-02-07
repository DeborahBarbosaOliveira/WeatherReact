import React, { useState } from "react";
import axios from "axios";

export default function SearchEngine() {
  let [input, setInput] = useState("");
  let [message, setMessage] = useState("");

  function showDetails(response) {
    let imgURL = `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`;
    setMessage(
      <ul>
        <li>Temperature: {Math.round(response.data.main.temp)}°C</li>
        <li>Description: {response.data.weather[0].description}</li>
        <li>Humidity: {response.data.main.humidity} %</li>
        <li>Wind: {Math.round(response.data.wind.speed)} km/h</li>
        <li>
          <img src={imgURL} alt="weather Icon" />
        </li>
      </ul>
    );
  }

  function submitForm(event) {
    event.preventDefault();
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=8ace475fd8f2a50f825109d1b6a3c226&units=metric`;
    axios.get(apiUrl).then(showDetails);
  }

  function changeInput(event) {
    setInput(event.target.value);
  }

  return (
    <div className="SearchEngine">
      <form onSubmit={submitForm}>
        <input
          type="search"
          placeholder="Type city here"
          onChange={changeInput}
        />
        <button type="Submit">Search</button>
      </form>
      <p>{message}</p>
    </div>
  );
}
