import React from "react";
import './App.css';
import Weather from './Weather';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        <p>
         Hello World
        </p>
       <Weather city="Belo Horizonte" />
      </header>
    </div>
  );
}

export default App;
