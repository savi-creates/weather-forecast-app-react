import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import Loader from "./Loader";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  const [error, setError] = useState(null);

  const [firstLoad, setFirstLoad] = useState(true);

  const handleResponse = (response) => {
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
    setError(null);
  };

  function search() {
    const apiKey = "ta4d13o783b04c3ee4a956ed2febde0f";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

    axios
      .get(apiUrl)
      .then(handleResponse)
      .catch(() => {
        setError("Insert a valid city.");
        setWeatherData({ ready: false });
      });
  }

  useEffect(() => {
    if (firstLoad) {
      search();
      setFirstLoad(false);
    }
  }, [firstLoad]);

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (error) {
    return (
      <div className="Weather p-4 rounded-4 shadow-sm text-center">
        <h1 className="text-danger">{error}</h1>
      </div>
    );
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
                autoFocus={true}
                onChange={handleCityChange}
                value={city}
              />
              <button type="submit" className="btn search-button">
                Search
              </button>
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
