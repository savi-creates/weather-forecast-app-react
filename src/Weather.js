import React, { useState } from "react";
import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      city: response.data.city,
      date: "Tuesday 09:46",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather p-4  rounded-4 shadow-sm">
        <h1 className="text-center fw-bold mb-4">Weather Forecast Engine</h1>

        <div className="d-flex justify-content-center mb-4">
          <input
            type="search"
            placeholder="Search city.."
            className="form-control w-50 me-2"
            autoFocus="on"
          />
          <button className="btn search-button">Search</button>
        </div>

        <div className="d-flex justify-content-between align-items-center mb-4 px-3 weather-info">
          <div>
            <h2 className="fw-bold">{weatherData.city}</h2>
            <p className="mb-1">
              {weatherData.date}, {weatherData.description}
            </p>
            <p>
              Humidity:{" "}
              <span className="fw-bold humidity-color">
                {weatherData.humidity}%
              </span>{" "}
              {""}; Wind:{" "}
              <span className="fw-bold wind-color">
                {weatherData.wind} km/h
              </span>
            </p>
          </div>

          <div className="d-flex align-items-center ">
            <ReactAnimatedWeather
              icon="CLEAR_DAY"
              color="#000"
              size={70}
              animate={true}
            />
            <div className="temperature ms-3">
              <span className="temp-number">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="temp-unit">ºC</span>
            </div>
          </div>
        </div>

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
    const apiKey = "ta4d13o783b04c3ee4a956ed2febde0f";

    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return "loading..";
  }
}
