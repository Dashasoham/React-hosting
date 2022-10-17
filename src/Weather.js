import React from 'react';

import './Weather.css';

export default function Weather() {
  let weatherData = {
    city: 'Athens',
    temperature: 19,
    date: 'Tuesday 10:00',
    description: 'Sunny',
    imgUrl: 'https://ssl.gstatic.com/onebox/weather/64/sunny.png',
    humidity: 80,
    wind: 10,
  };
  return (
    <div className="Weather">
      <div className="container">
        <div className="app-wrapper">
          <form className="mb-5">
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Type a city.."
                  className="form-control"
                  autocomplete="off"
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary w-100"
                />
              </div>
            </div>
          </form>
          <div className="row">
            <div className="col-4">
              <img
                src={weatherData.imgUrl}
                alt={weatherData.description}
                className="float-right"
              />

              <div>
                <ul>
                  <li>{weatherData.date}</li>
                </ul>
              </div>
            </div>
            <div className="col-4">
              <div className="current-city">
                <h1>
                  <div>{weatherData.city}</div>
                </h1>
                <br />
                <span className="units">{weatherData.temperature}°C</span>
                <ul>
                  <li></li>
                  <li>
                    Humidity: <strong>{weatherData.humidity}%</strong> <br />
                    Wind:
                    <strong>{weatherData.wind}</strong>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-4"></div>
          </div>
        </div>
      </div>
      <p className="footer">
        Coded by Daria Korniienko. This project is open-sourced on{' '}
        <a
          href="https://github.com/Dashasoham/React-hosting"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </p>
    </div>
  );
}
