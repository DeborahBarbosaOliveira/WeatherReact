import React, {useState} from "react";
import axios from "axios";
import Temperature from "./Temperature";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";



export default function Forecast(props){
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);

function handleForecastResponse(response){
    setForecast(response.data);
    setLoaded(true);
   
}

if (loaded && props.city === forecast.city.name) {
    return (<div className="col future" className="Forecast">
                <table className="table">
          <tbody>
           <tr>
           <span> <strong>{new Date(forecast.list[1].dt * 1000).getHours()}:00 </strong> </span><br />
        <p>  <Temperature celsius={Math.round(forecast.list[1].main.temp)} /> </p>
         <WeatherIcon code={forecast.list[1].weather[0].icon} />
       </tr>
          <tr>
         <span> <strong> {new Date(forecast.list[2].dt * 1000).getHours()}:00</strong> </span>
        <Temperature celsius={Math.round(forecast.list[1].main.temp)} /> <WeatherIcon code={forecast.list[2].weather[0].icon} />
           </tr>
         <tr>
        <span> <strong> {new Date(forecast.list[3].dt * 1000).getHours()}:00 </strong> </span>
            <Temperature celsius={Math.round(forecast.list[2].main.temp)} /> <WeatherIcon code={forecast.list[3].weather[0].icon} />
          </tr>
          <tr>
             <span> <strong>  {new Date(forecast.list[4].dt * 1000).getHours()}:00 </strong> </span>
             <Temperature celsius={Math.round(forecast.list[3].main.temp)} /> <WeatherIcon code={forecast.list[4].weather[0].icon} />
             </tr>
           <tr>
         <span> <strong>  {new Date(forecast.list[5].dt * 1000).getHours()}:00  </strong> </span>
          <Temperature celsius={Math.round(forecast.list[4].main.temp)} /> <WeatherIcon code={forecast.list[5].weather[0].icon} />
             </tr>
            </tbody>
           <span id="git-hub" className="my-info"> <a href="https://github.com/DeborahBarbosaOliveira/SheCodesForecast" id="my-github" target="_blank">Open-source code</a> <br /> by <a href="https://www.linkedin.com/in/deborah-barbosa-oliveira/" id="my-linkedin" target="_blank">Deborah barbosa</a> </span>
            </table>
            </div>)
}
    else {let Url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=8ace475fd8f2a50f825109d1b6a3c226&units=metric`;
  axios.get(Url).then(handleForecastResponse)
    return null}
}