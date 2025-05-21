import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

import "./Weather.css";

export default function Weather() {
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
          <h2 className="fw-bold">Lisbon</h2>
          <p className="mb-1">Tuesday 09:46, few clouds</p>
          <p>
            Humidity: <span className="fw-bold humidity-color">77%</span> {""};
            Wind: <span className="fw-bold wind-color">9.39km/h</span>
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
            <span className="temp-number">15</span>
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
}
