import React, { useState, useEffect } from "react";
import axios from "axios";
import { IoSearchOutline } from "react-icons/io5";

export default function Weather() {
  const [weatherData, setWeatherData] = useState([]);
  const API_KEY = "fbbed710da6fd0e9bc8dad4fab3c3711";
  const fetchWeather = async () => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=${API_KEY}`
      );
      setWeatherData(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [API_KEY]);

  return (
    // <pre>{JSON.stringify(weatherData, null, 2)}</pre>

    <div
      className="flex flex-col p-20 mx-auto bg-cover h-screen justify-center"
      style={{ backgroundImage: " url(img/weather.jpg)" }}
    >
      <div
        className=" flex  bg-white border-black my-20 h-16 w-2/3 rounded-2xl
      opacity-70 justify-between items-center p-2"
      >
        <input type="text" placeholder="Search by city" />
        <button className="text-2xl text-gray-500">
          <IoSearchOutline />
        </button>
      </div>

      <div className="flex flex-row justify-between space-x-8 ">
        {weatherData?.weather?.map((item, itemId) => {
          return (
            <div
              className="bg-white p-8 rounded-2xl shadow-2xl opacity-80 "
              key={itemId}
            >
              <div className="flex ">
                <div className="flex flex-col">
                  <p className="text-4xl p-4 font-bold">{weatherData.name}</p>
                  <img
                    className="h-32 w-32"
                    src={`http://openweathermap.org/img/wn/${item.icon}.png`}
                    alt="icon"
                  />
                </div>

                <div className="font-bold text-9xl mt-16 text-orange-600 mx-4">
                  {Math.round(((weatherData.main.temp - 273.15) * 9) / 5 + 32)}
                  °F
                </div>
              </div>
              <div>
                <div className="text-2xl   text-gray-500">
                  <p>Weather: {weatherData.weather[0].main}</p>

                  <p>Description: {weatherData.weather[0].description}</p>
                  <p></p>
                  <p>Humidity: {weatherData.main.humidity} %</p>
                  <p>Wind Speed: {weatherData.wind.speed} meter/sec</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
