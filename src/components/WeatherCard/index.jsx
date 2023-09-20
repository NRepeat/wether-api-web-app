import React from "react";

function WeatherCard({ weatherData }) {
  const currentWeatherData = weatherData.current_weather;
  const { temperature, time, winddirection, windspeed } = currentWeatherData;
  return (
    <>
      {currentWeatherData && (
        <div className="bg-blue-300 text-white w-100 h-120">
          <section>
            <p>Температура {temperature}°C</p>
            <p>Время: {time}</p>
            <p>Направление ветра: {winddirection}</p>
            <p>Скорость ветра: {windspeed}</p>
          </section>
        </div>
      )}
    </>
  );
}

export default WeatherCard;
