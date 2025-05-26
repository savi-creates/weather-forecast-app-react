import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <>
        <span className="temp-number">{Math.round(props.celsius)}</span>
        <span className="temp-unit">
          ºC |{" "}
          <a href="/" onClick={showFahrenheit}>
            ºF
          </a>
        </span>
      </>
    );
  } else {
    return (
      <>
        <span className="temp-number">{Math.round(fahrenheit())}</span>
        <span className="temp-unit">
          <a href="/" onClick={showCelsius}>
            ºC
          </a>{" "}
          | ºF
        </span>
      </>
    );
  }
}
