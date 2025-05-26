import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <WeatherIcon code="clear-sky-day" size={50} />
          <div className="WeatherForecast-temps">
            <span className="WeatherForecast-temp-max">19º </span>
            <span className="WeatherForecast-temp-min">10º</span>
          </div>
        </div>
      </div>
    </div>
  );
}
