import React, {useState} from "react";
import axios from "axios";
import Temperature from "./Temperature";
import WeatherIcon from "./WeatherIcon";


export default function Forecast(props){
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);

function handleForecastResponse(response){
    setForecast(response.data);
    setLoaded(true);
   
}

if (loaded && props.city === forecast.city.name) {
    return (<div className="col future">
                <table className="table">
          <tbody>
           <tr>
             <th scope="row three-hours">
                <p > {new Date(forecast.list[1].dt * 1000).getHours()}:00 </p>
              </th>
              <td><Temperature celsius={Math.round(forecast.list[1].main.temp)} /> <WeatherIcon code={forecast.list[0].weather[0].icon} />
              </td> 
           </tr>
          <tr>
             <th scope="row six-hours">
                <p > {new Date(forecast.list[2].dt * 1000).getHours()}:00 </p>
              </th>
              <td><Temperature celsius={Math.round(forecast.list[1].main.temp)} /> <img src="https://ssl.gstatic.com/onebox/weather/48/sunny.png" alt="" id="icon-day-two"></img>
              </td> 
           </tr>
                     <tr>
             <th scope="row nine-hours">
                <p >{new Date(forecast.list[3].dt * 1000).getHours()}:00  </p>
              </th>
              <td><Temperature celsius={Math.round(forecast.list[2].main.temp)} /> <img src="https://ssl.gstatic.com/onebox/weather/48/sunny.png" alt="" id="icon-day-two"></img>
              </td> 
           </tr>
                         <tr>
             <th scope="row twelve-hours">
                <p > {new Date(forecast.list[4].dt * 1000).getHours()}:00 </p>
              </th>
              <td><Temperature celsius={Math.round(forecast.list[3].main.temp)} /> <img src="https://ssl.gstatic.com/onebox/weather/48/sunny.png" alt="" id="icon-day-two"></img>
              </td> 
           </tr>
                     <tr>
             <th scope="row fifteen-hours">
                <p > {new Date(forecast.list[5].dt * 1000).getHours()}:00  </p>
              </th>
              <td><Temperature celsius={Math.round(forecast.list[4].main.temp)} /> <img src="https://ssl.gstatic.com/onebox/weather/48/sunny.png" alt="" id="icon-day-two"></img>
              </td> 
           </tr>
            </tbody>
            <hr />
              <span id="git-hub"> <a href="https://github.com/DeborahBarbosaOliveira/SheCodesForecast" id="my-github" target="_blank">Open-source code</a> <br /> by <a href="https://www.linkedin.com/in/deborah-barbosa-oliveira/" id="my-linkedin" target="_blank">Deborah barbosa</a> </span>
            </table>
            </div>);
}
    else {let Url = `http://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=8ace475fd8f2a50f825109d1b6a3c226&units=metric`;
  axios.get(Url).then(handleForecastResponse); 
    return null;}
}