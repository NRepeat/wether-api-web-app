import React, { useEffect } from "react";
import WeatherCard from "../WeatherCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurentWeather } from "../../redux/slice/weatherSlice";

function WeatherDashboard() {
  const dispatch = useDispatch();
  const { weather:weatherData } = useSelector((state) => state.weather);
  console.log("🚀 ~ file: index.jsx:9 ~ WeatherDashboard ~ weatherData:", weatherData)

  useEffect(() => {
    dispatch(fetchCurentWeather());
  }, []);
  const getWeather = () => {
    dispatch(fetchCurentWeather());
  };

  return (
    <div>
			<WeatherCard weatherData={weatherData}/>
      <button onClick={getWeather}>Get</button>
    </div>
  );
}

export default WeatherDashboard;
