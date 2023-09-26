import React from "react";

function DailyWeatherCard({ weatherData }) {
 console.log("🚀 ~ file: index.jsx:4 ~ DailyWeatherCard ~ weatherData :", weatherData )
 
  return (
    <div className="flex justify-center items-center  flex-col">
      <h1>Погодный прогноз</h1>
      {weatherData && (
        <div>
          <table className="w-full ">
            <thead>
              <tr>
                <th>Дата</th>
                <th>Вероятность осадков (макс)</th>
                <th>Восход солнца</th>
                <th>Закат солнца</th>
                <th>Макс. температура (°C)</th>
                <th>Мин. температура (°C)</th>
                <th>Доминирующее направление ветра (градусы)</th>
                <th>Макс. скорость ветра (м/с)</th>
              </tr>
            </thead>
            <tbody className="text-center  ">
              {weatherData.daily.time.map((dd, index) => (
                <tr key={index}>
                  <td>{dd}</td>
                  <td>
                    {weatherData.daily.precipitation_probability_max[index]}
                  </td>
                  <td>{weatherData.daily.sunrise[index].slice(11, 16)}</td>
                  <td>{weatherData.daily.sunset[index].slice(11, 16)}</td>
                  <td>{weatherData.daily.temperature_2m_max[index]}</td>
                  <td>{weatherData.daily.temperature_2m_min[index]}</td>
                  <td>{weatherData.daily.winddirection_10m_dominant[index]}</td>
                  <td>{weatherData.daily.windspeed_10m_max[index]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default DailyWeatherCard;
