import React from "react";

import FormattedDate from "./FormattedDate";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="d-flex justify-content-between align-items-center mb-4 px-3 weather-info">
        <div>
          <h2 className="fw-bold">{props.data.city}</h2>
          <p className="mb-1">
            <FormattedDate date={props.data.date} />, {props.data.description}
          </p>
          <p>
            Humidity:{" "}
            <span className="fw-bold humidity-color">
              {props.data.humidity}%
            </span>{" "}
            {""}; Wind:{" "}
            <span className="fw-bold wind-color">{props.data.wind} km/h</span>
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
              {Math.round(props.data.temperature)}
            </span>
            <span className="temp-unit">ºC</span>
          </div>
        </div>
      </div>
    </div>
  );
}
