import axios from 'axios';

const WeatherApiUrl = "https://api.open-meteo.com/v1/forecast?latitude=47.8517&longitude=35.1171&hourly=temperature_2m,precipitation_probability,cloudcover,windspeed_80m,winddirection_80m&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_probability_max,windspeed_10m_max,winddirection_10m_dominant&current_weather=true&timezone=auto"

const WeatherApi = {
	getWeather: async () => {
		try {
			const { data } = await axios.get(WeatherApiUrl)
			console.log("🚀 ~ file: weather.js:9 ~ getWeather: ~ data:", data)
			return data
		} catch (error) {
			console.error(error)
		}
	}
}

export { WeatherApi }