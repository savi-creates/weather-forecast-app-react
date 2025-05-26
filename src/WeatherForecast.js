import React, { useState, useEffect } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    setLoaded(false);

    const apiKey = "ta4d13o783b04c3ee4a956ed2febde0f";
    const { longitude, latitude } = props.coordinates;
    const apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;

    axios
      .get(apiUrl)
      .then(handleResponse)
      .catch((error) => console.error("API error:", error));
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function formatDay(timestamp) {
    const date = new Date(timestamp * 1000);
    const options = { weekday: "short" };
    return date.toLocaleDateString("en-US", options);
  }

  if (!loaded) {
    return null;
  }

  return (
    <div className="WeatherForecast">
      <div className="row">
        {forecast.slice(1, 6).map(function (dailyForecast, index) {
          return (
            <div className="col text-center" key={index}>
              <div className="WeatherForecast-day">
                {formatDay(dailyForecast.time)}
              </div>
              <WeatherIcon code={dailyForecast.condition.icon} size={50} />
              <div className="WeatherForecast-temps">
                <span className="WeatherForecast-temp-max">
                  {Math.round(dailyForecast.temperature.maximum)}º{" "}
                </span>
                <span className="WeatherForecast-temp-min">
                  {Math.round(dailyForecast.temperature.minimum)}º
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
