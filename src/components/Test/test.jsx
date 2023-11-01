import React, { useEffect } from "react";

function WeatherComponent() {
  useEffect(() => {
    const fetchWeatherData = async (url) => {
      const startTime = performance.now();
      const xhr = new XMLHttpRequest();
      xhr.open("GET", url, true);

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          const endTime = performance.now();
          const response = JSON.parse(xhr.responseText);
          console.log("Ответ получен за " + (endTime - startTime) + " миллисекунд");
          console.log(response);
        } else if (xhr.readyState === 4) {
          console.error("Помилка запиту");
        }
      };
      xhr.send();
    };

    const WeatherApiUrls = [
      `https://api.open-meteo.com/v1/forecast?latitude=47.8517&longitude=35.1171&hourly=temperature_2m,precipitation_probability,cloudcover,windspeed_80m,winddirection_80m&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_probability_max,windspeed_10m_max,winddirection_10m_dominant&current_weather=true&timezone=auto`,
      `https://api.open-meteo.com/v1/forecast?latitude=47.8517&longitude=55.1171&hourly=temperature_2m,precipitation_probability,cloudcover,windspeed_80m,winddirection_80m&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_probability_max,windspeed_10m_max,winddirection_10m_dominant&current_weather=true&timezone=auto`,
      `https://api.open-meteo.com/v1/forecast?latitude=47.8517&longitude=75.1171&hourly=temperature_2m,precipitation_probability,cloudcover,windspeed_80m,winddirection_80m&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_probability_max,windspeed_10m_max,winddirection_10m_dominant&current_weather=true&timezone=auto`,
      `https://api.open-meteo.com/v1/forecast?latitude=47.8517&longitude=85.1171&hourly=temperature_2m,precipitation_probability,cloudcover,windspeed_80m,winddirection_80m&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_probability_max,windspeed_10m_max,winddirection_10m_dominant&current_weather=true&timezone=auto`,
    ];

    WeatherApiUrls.forEach((url) => {
      fetchWeatherData(url);
    });
  }, []);

  return <div></div>;
}

export default WeatherComponent;
