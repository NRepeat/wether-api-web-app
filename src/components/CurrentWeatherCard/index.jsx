import React from "react";
import { useSelector } from "react-redux";

export default function CurrentWeatherCard({ weatherData }) {
  console.log(
    "🚀 ~ file: index.jsx:4 ~ CurrentWeatherCard ~ CurrentWeatherCard:",
    weatherData
  );
	const temperatureUnit = useSelector((state) => state.weather.temperatureUnit);
  return (
    <div className="flex justify-center ">
      <div>
        <h1>Текущая погода в Запорожьє</h1>
        <p>Дата и время: {weatherData.current_weather.time.slice(0, 10)}/{weatherData.current_weather.time.slice(11, 16)}</p>
        <p>Температура: {weatherData.current_weather.temperature}{temperatureUnit === 'celsius' ?"°F":"°C"}</p>
        <p>
          Ветер: {weatherData.current_weather.windspeed} м/с, 
					направление {weatherData.current_weather.winddirection}°
        </p>
        <p>{weatherData.is_day ? "День" : "Ночь"}</p>
      </div>
    </div>
  );
}
