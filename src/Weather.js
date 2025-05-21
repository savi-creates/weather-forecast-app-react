import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      city: response.data.city,
      date: new Date(response.data.time * 1000),
    });
  }

  function search() {
    const apiKey = "ta4d13o783b04c3ee4a956ed2febde0f";

    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
    search();
  }

  if (weatherData.ready) {
    return (
      <div className="Weather p-4  rounded-4 shadow-sm">
        <h1 className="text-center fw-bold mb-4">Weather Forecast Engine</h1>

        <form onSubmit={handleSubmit}></form>

        <div className="d-flex justify-content-center mb-4">
          <input
            type="search"
            placeholder="Search city.."
            className="form-control w-50 me-2"
            autoFocus="on"
            onChange={handleCityChange}
          />
          <button className="btn search-button">Search</button>
        </div>

        <WeatherInfo data={weatherData} />

        <footer className="text-center text-muted mt-4 small">
          Coded by{" "}
          <a
            href="https://github.com/savi-creates"
            target="_blank"
            rel="noopener noreferrer"
          >
            Savannah Andresson
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/savi-creates/weather-forecast-app-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    );
  } else {
    search();
    return "loading..";
  }
}
