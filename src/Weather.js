import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import Loader from "./Loader";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  const [debouncedCity, setDebouncedCity] = useState(city);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedCity(city);
    }, 500);

    return () => clearTimeout(timer);
  }, [city]);

  useEffect(() => {
    function search(cityToSearch) {
      const apiKey = "ta4d13o783b04c3ee4a956ed2febde0f";
      let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityToSearch}&key=${apiKey}&units=metric`;
      axios
        .get(apiUrl)
        .then(handleResponse)
        .catch(() => {
          setWeatherData({ ready: false });
        });
    }
    if (debouncedCity) {
      search(debouncedCity);
    }
  }, [debouncedCity]);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coordinates,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      icon: response.data.condition.icon,
      city: response.data.city,
      date: new Date(response.data.time * 1000),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <>
        <div className="Weather p-4 rounded-4 shadow-sm">
          <h1 className="text-center fw-bold mb-4">Weather Forecast Engine</h1>

          <form onSubmit={handleSubmit}>
            <div className="d-flex justify-content-center mb-4">
              <input
                type="search"
                placeholder="Search city.."
                className="form-control w-50 me-2"
                autoFocus
                onChange={handleCityChange}
                value={city}
              />
              <button className="btn search-button">Search</button>
            </div>
          </form>

          <WeatherInfo data={weatherData} />
          <WeatherForecast coordinates={weatherData.coordinates} />
        </div>
      </>
    );
  } else {
    return <Loader />;
  }
}
