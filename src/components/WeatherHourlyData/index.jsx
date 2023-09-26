import React from "react";

function WeatherHourlyData({ weatherData }) {
  const {
    cloudcover,
    precipitation_probability,
    temperature_2m,
    time,
    winddirection_80m,
    windspeed_80m,
  } = weatherData.hourly;

  return (
    <div className="h-300 overflow-auto text-center" >
      <h2>Hourly Weather Data</h2>
      <div className="h-500  text-center flex justify-center">
        <table>
          <thead>
            <tr>
              <th>Time</th>
              <th>Cloudcover</th>
              <th>Precipitation Probability</th>
              <th>Temperature (°C)</th>
              <th>Wind Direction (°)</th>
              <th>Wind Speed (m/s)</th>
            </tr>
          </thead>
          <tbody>
            {time.map((hour, index) => (
              <tr key={index}>
                <td>{hour}</td>
                <td>{cloudcover[index]}</td>
                <td>{precipitation_probability[index]}</td>
                <td>{temperature_2m[index]}</td>
                <td>{winddirection_80m[index]}</td>
                <td>{windspeed_80m[index]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default WeatherHourlyData;
