import axios from 'axios';


const WeatherApi = {
	getWeather: async (payload) => {
		console.log("🚀 ~ file: weather.js:7 ~ getWeather: ~ payload:", payload.temperatureUnit)
		try {
			const WeatherApiUrl =` https://api.open-meteo.com/v1/forecast?latitude=47.8517&longitude=35.1171&hourly=tem
			perature_2m,precipitation_probability,cloudcover,windspeed_80m,winddirection_80m&daily=tempera
			ture_2m_max,temperature_2m_min,sunrise,sunset,precipitation_probability_max,wind
			speed_10m_max,winddirection_10m_dominant&current_weather=true&timezone=auto&temper
			ature_unit=${payload.temperatureUnit}&forecast_days=${payload.forecastDuration}`

			const { data } = await axios.get(WeatherApiUrl)
			return data
		} catch (error) {
			console.error(error)
		}
	}
}

export { WeatherApi }