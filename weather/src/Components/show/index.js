import React, { useState } from "react";
import "./index.css";
import {
  FaTemperatureHigh,
  FaTemperatureLow,
  FaWind,
  FaTint,
  FaEye,
  FaCloud,
  FaCompressArrowsAlt,
  FaArrowUp,
  FaPlus,
  FaMinus,
  FaSun,
  FaMoon,
} from "react-icons/fa";

const CreateCard = (data) => {
  const {
    base,
    cod,
    id,
    lon,
    lat,
    grnd_level,
    sea_level,
    temp_max,
    temp_min,
    sunrise,
    sunset,
    gust,
    clouds,
    dt,
    main,
    sys,
    timezone,
    visibility,
    weather,
    wind,
    name,
  } = data.data;

  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const Weather = weather[0];
  const { description, icon } = Weather;
  const { temp, feels_like, humidity, pressure } = main;
  const { country } = sys;
  const { speed, deg } = wind;
  const { all } = clouds;

  // Convert UTC timestamp (dt) to local date and time
  const timestamp = new Date(dt * 1000); // Convert to milliseconds
  const localDate = timestamp.toLocaleDateString();
  const localTime = timestamp.toLocaleTimeString();

  return (
    <div className="card-view-container">
      <div className="card-view">
        <h1>
          {name}, {country}
        </h1>
        <div className="weather-main">
          <img
            src={`http://openweathermap.org/img/wn/${icon}.png`}
            alt="weather icon"
          />
          <p>{description}</p>
        </div>
        <div className="weather-details">
          <div className="weather-detail date-section">
            <p>
              <strong>Date:</strong> {localDate}
            </p>
            <p>
              <strong>Time:</strong> {localTime}
            </p>
            <p>
              <strong>Timezone:</strong> UTC {timezone / 3600}
            </p>
          </div>
          <div className="weather-details----222">
            <div className="">
              <div className="weather-detail">
                <FaTemperatureHigh className="weather-icon" />
                <p>
                  <strong>Temperature:</strong> {temp} °C
                </p>
              </div>
              <div className="weather-detail">
                <FaTemperatureLow className="weather-icon" />
                <p>
                  <strong>Feels like:</strong> {feels_like} °C
                </p>
              </div>
              <div className="weather-detail">
                <FaTint className="weather-icon" />
                <p>
                  <strong>Humidity:</strong> {humidity} %
                </p>
              </div>
              <div className="weather-detail">
                <FaCompressArrowsAlt className="weather-icon" />
                <p>
                  <strong>Pressure:</strong> {pressure} hPa
                </p>
              </div>
              <div className="weather-detail">
                <FaWind className="weather-icon" />
                <p>
                  <strong>Wind speed:</strong> {speed} m/s
                </p>
              </div>
            </div>
            <div className="">
              {/* From Here */}
              <div className="weather-detail">
                <FaArrowUp className="weather-icon" />
                <p>
                  <strong>Wind direction:</strong> {deg} °
                </p>
              </div>
              <div className="weather-detail">
                <FaCloud className="weather-icon" />
                <p>
                  <strong>Cloudiness:</strong> {all} %
                </p>
              </div>
              <div className="weather-detail">
                <FaEye className="weather-icon" />
                <p>
                  <strong>Visibility:</strong> {visibility} m
                </p>
              </div>
              <div className="weather-detail">
                <FaSun className="weather-icon" />
                <p>
                  <strong>Sunrise:</strong>{" "}
                  {new Date(sunrise * 1000).toLocaleTimeString()}
                </p>
              </div>
              <div className="weather-detail">
                <FaMoon className="weather-icon" />
                <p>
                  <strong>Sunset:</strong>{" "}
                  {new Date(sunset * 1000).toLocaleTimeString()}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="toggle-details" onClick={toggleDetails}>
          {showDetails ? (
            <FaMinus className="toggle-icon" />
          ) : (
            <FaPlus className="toggle-icon" />
          )}
          <p>{showDetails ? "Hide details" : "View more details"}</p>
        </div>
        {showDetails && (
          <div className="additional-details">
            <h3>Additional Details</h3>
            <p>
              <strong>Base:</strong> {base}
            </p>
            <p>
              <strong>Cod:</strong> {cod}
            </p>
            <p>
              <strong>ID:</strong> {id}
            </p>
            <p>
              <strong>Longitude:</strong> {lon}
            </p>
            <p>
              <strong>Latitude:</strong> {lat}
            </p>
            <p>
              <strong>Ground Level:</strong> {grnd_level}
            </p>
            <p>
              <strong>Sea Level:</strong> {sea_level}
            </p>
            <p>
              <strong>Max Temperature:</strong> {temp_max} °C
            </p>
            <p>
              <strong>Min Temperature:</strong> {temp_min} °C
            </p>
            <p>
              <strong>Gust:</strong> {gust} m/s
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateCard;
