import axios from 'axios';


const WeatherApi = {
  getWeather: async (payload) => {
    try {
      const startTime = performance.now(); 
      const WeatherApiUrl = `https://api.open-meteo.com/v1/forecast?latitude=47.8517&longitude=35.1171&hourly=temperature_2m,precipitation_probability,cloudcover,windspeed_80m,winddirection_80m&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_probability_max,windspeed_10m_max,winddirection_10m_dominant&current_weather=true&timezone=auto&temperature_unit=${payload.temperatureUnit}&forecast_days=${payload.forecastDuration}`;
      const { data } = await axios.get(WeatherApiUrl);
      const endTime = performance.now(); 
      console.log('Ответ получен за ' + (endTime - startTime) + ' миллисекунд');
      return data;
    } catch (error) {
      console.error(error);
    }
  }

}

export { WeatherApi }