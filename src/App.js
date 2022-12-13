import "./App.css";
import Weather from "./Weather";
import React from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1></h1>
        <Weather />
      </header>
      <small>
        <a href="https://github.com/els-390/weather-react-app" target="_blank">
          Open-source code
        </a>
        ", by "
        <a href="https://www.linkedin.com/in/ellie-s-51088146/" target="_blank">
          Ellie Spanswick 😀
        </a>
      </small>
    </div>
  );
}

export default App;
