import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCurentWeather,
  setForecastDuration,
  setTemperatureUnit,
} from "../../redux/slice/weatherSlice";
import { createSelector } from "reselect";

function WeatherFilter() {
  const dispatch = useDispatch();
  const selectTemperatureAndDuration = createSelector(
    (state) => state.weather.temperatureUnit,
    (state) => state.weather.forecastDuration,
    (temperatureUnit, forecastDuration) => ({
      temperatureUnit,
      forecastDuration,
    })
  );
  const filtr = useSelector(selectTemperatureAndDuration);

  const handleTemperatureChange = (event) => {
    dispatch(setTemperatureUnit(event.target.value));
    setTemperatureUnit(event.target.value);
    dispatch(fetchCurentWeather(filtr));
  };

  const handleDurationChange = (event) => {
    dispatch(setForecastDuration(event.target.value));
    dispatch(fetchCurentWeather(filtr));
  };

  return (
    <div>
      <h2>Фильтры</h2>
      <div>
        <label>
          Температура:
          <select
            value={filtr.temperatureUnit}
            onChange={handleTemperatureChange}
          >
            <option value="fahrenheit">Градусы Цельсия</option>
            <option value="celsius">Градусы Фаренгейта</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Продолжительность:
          <select
            value={filtr.forecastDuration}
            onChange={handleDurationChange}
          >
            <option value="3">На 3 дня</option>
            <option value="7">На 7 дней</option>
          </select>
        </label>
      </div>
    </div>
  );
}

export default WeatherFilter;
