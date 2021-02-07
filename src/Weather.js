    import React from "react";
    import axios from 'axios';
    import Loader from "react-loader-spinner";

    export default function Weather(props){
        function handleResponse(response){

        alert(`The weather in ${response.data.name} is ${response.data.main.temp}`)
        }
        
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=8ace475fd8f2a50f825109d1b6a3c226&units=metric`;
    axios.get(apiUrl).then(handleResponse);
        return(
            <h2>
                Hello from Weather!
           
            <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
       </h2>
        )
    }