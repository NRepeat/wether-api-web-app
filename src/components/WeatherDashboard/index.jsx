import React, { useEffect } from "react";
import WeatherCard from "../WeatherCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurentWeather } from "../../redux/slice/weatherSlice";

function WeatherDashboard() {
  const dispatch = useDispatch();
  const { weather: weatherData } = useSelector((state) => state.weather);
  console.log(
    "🚀 ~ file: index.jsx:9 ~ WeatherDashboard ~ weatherData :",
    weatherData
  );

  useEffect(() => {
    try {
      dispatch(fetchCurentWeather());
    } catch (error) {
    console.log("🚀 ~ file: index.jsx:18 ~ useEffect ~ error:", error)
    }
  }, []);

  const getWeather = async() => {
   await dispatch(fetchCurentWeather());
  };

  return (
    <div>
      {weatherData.current_weather ? <WeatherCard weatherData={weatherData} /> : <p>Loading</p>}
      <button onClick={getWeather}>Get</button>
    </div>
  );
}

export default WeatherDashboard;
