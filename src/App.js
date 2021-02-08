import "./index.css";
import SearchEngine from "./Weather";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <SearchEngine />
        <span id="git-hub"> <strong>Open-source code by </strong> <br /><a href="https://github.com/DeborahBarbosaOliveira/SheCodesForecast" id="my-github">Deborah Barbosa</a></span> 
    </div>
  );
}