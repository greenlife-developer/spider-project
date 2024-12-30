import React from "react";

import temperature from "../../assets/images/temperature.png"

import "./WeatherCard.css";

const WeatherCard = ({ location, currentTemp, currentDesc, forecastData, currentImg }) => {
  return (
    <div className="weather_card">
      <div className="">
        <div className="location">{location}</div>
        <div className="current_weather">
          <img src={currentImg} alt="Weather icon" />
          <div>
            <div className="temperature">{currentTemp}°</div>
            <div className="description">{currentDesc}</div>
          </div>
        </div>
      </div>
      <div className="chart_info">
        {/* <div className="chart">
          <div className="chart-indicator" style={{ left: "50%" }}></div>
        </div> */}
        {/* <div class="chart-container">
          <svg className="chart" viewBox="0 0 100 10" preserveAspectRatio="none">
            <path
              d="M0,5 C30,0 70,10 100,5"
              fill="none"
              stroke="url(#gradient)"
              stroke-width="2"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="rgba(63, 209, 255, 0)" />
                <stop offset="17.78%" stop-color="rgba(63, 209, 255, 0.7)" />
                <stop offset="87.2%" stop-color="rgba(255, 164, 57, 0.7)" />
                <stop offset="100%" stop-color="rgba(255, 164, 57, 0)" />
              </linearGradient>
            </defs>
          </svg>
          <div
            class="chart-indicator"
            style={{ left: "50%", top: "-8px" }}
          ></div>
        </div> */}
        {/* <div class="chart-container">
          <svg
            class="chart"
            viewBox="0 0 100 10"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M0,5 C25,0 75,10 100,5"
              stroke="url(#gradient)"
              stroke-width="2"
              fill="none"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="rgba(63, 209, 255, 0)" />
                <stop offset="18%" stop-color="rgba(63, 209, 255, 0.7)" />
                <stop offset="87%" stop-color="rgba(255, 164, 57, 0.7)" />
                <stop offset="100%" stop-color="rgba(255, 164, 57, 0)" />
              </linearGradient>
            </defs>
          </svg>
          <div class="chart-indicator" style={{left: "50%"}}></div>
        </div> */}
        {/* <div class="chart-container">
          <svg
            className="chart"
            viewBox="0 0 100 20"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="rgba(63, 209, 255, 0)" />
                <stop offset="18%" stop-color="rgba(63, 209, 255, 0.7)" />
                <stop offset="87%" stop-color="rgba(255, 164, 57, 0.7)" />
                <stop offset="100%" stop-color="rgba(255, 164, 57, 0)" />
              </linearGradient>
            </defs>
            <path
              d="M0,15 C20,5 40,20 60,10 C80,0 100,15 100,15  "
              stroke="url(#gradient)"
              stroke-width="2"
              fill="none"
            />
          </svg>
          <div class="chart-indicator"></div>
        </div> */}
        <img src={temperature} alt="" />

        <div className="forecast">
          {forecastData.map((item, index) => (
            <div className={item.active ? "forecast-item active" : "forecast-item"} key={index}>
              <div className="time">{item.time}</div>
              <img src={item.icon} alt={item.description} />
              <div className="temp">{item.temp}°</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
