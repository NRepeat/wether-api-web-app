import React, { useEffect, useState } from "react";
import DailyWeatherCard from "../DailyWeatherCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurentWeather } from "../../redux/slice/weatherSlice";
import CurrentWeatherCard from "../CurrentWeatherCard";
import WeatherFilter from "../Filters";
import { createSelector } from "reselect";
import WeatherHourlyData from "../WeatherHourlyData";
import WeatherComponent from "../Test/test";

function WeatherDashboard() {
  const dispatch = useDispatch();
  const { weather: weatherData } = useSelector((state) => state.weather);

  const selectTemperatureAndDuration = createSelector(
    (state) => state.weather.temperatureUnit,
    (state) => state.weather.forecastDuration,
    (temperatureUnit, forecastDuration) => ({
      temperatureUnit,
      forecastDuration,
    })
  );

  const filtr = useSelector(selectTemperatureAndDuration);
  const [prevFiltr, setPrevFiltr] = useState(filtr);

  const getWeather = async () => {
    try {
      await dispatch(fetchCurentWeather(filtr));
    } catch (error) {
      console.log("🚀 ~ file: index.jsx:18 ~ useEffect ~ error:", error);
    }
  };
  useEffect(() => {
    getWeather();
  }, []);
  useEffect(() => {
    if (filtr !== prevFiltr) {
      getWeather();
    }
  }, [prevFiltr]);

  return (
    <div className="w-full h-full flex flex-col justify-center">
      {weatherData.current_weather ? (
        <>
          <WeatherFilter />
          <CurrentWeatherCard weatherData={weatherData} />
          <DailyWeatherCard weatherData={weatherData} />
          <WeatherHourlyData weatherData={weatherData} />
        </>
      ) : (
        <p>Loading</p>
      )}
      <button onClick={getWeather}>Get</button>
    </div>
  );
}

export default WeatherDashboard;
