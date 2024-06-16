import React, { useEffect, useState } from "react";
import "./index.css";
import CreateCard from "../show";

const WeatherComponent = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCityName] = useState("");

  const fetchWeatherData = async () => {
    const apiKey = "7ba36f436bb3cea391ad504aa9309676"; // Replace with your actual API key
    // const city = "hyderabad"; // You can replace this with any city you prefer
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setWeatherData(data);
      // console.log(data);
      // console.log(data.main);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const GetGivenData = (event) => {
    event.preventDefault();
    fetchWeatherData();
  };

  const CallsetCityName = (event) => {
    setCityName(event.target.value);
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  return (
    <div>
      <h1 className="weather-heading">Weather Data</h1>
      <div className="input-main-container">
        <form className="form" onSubmit={GetGivenData}>
          <input
            type="search"
            className="city-input"
            placeholder="Enter your city"
            onChange={CallsetCityName}
            value={city}
          />
          <button type="submit" className="submit-button">
            Fetch Data
          </button>
        </form>
      </div>
      {weatherData ? (
        <>
          {/* <pre>{JSON.stringify(weatherData, null, 2)}</pre> */}
          <CreateCard data={weatherData} key={weatherData.name} />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default WeatherComponent;
