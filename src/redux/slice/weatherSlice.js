import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as Api from "../../api/weather"
const SLICE_NAME = "weather"


export const fetchCurentWeather = createAsyncThunk(`${SLICE_NAME}/getWeather`,
	async (values, thunkApi) => {

		try {
			const weather = await Api.WeatherApi.getWeather(values);
			return weather;
		} catch (error) {
			console.error(error);
			throw error;
		}
	});

const initialState = {
	weather: {},
	isLoading: false,
	error: null,
	temperatureUnit: 'celsius',
	forecastDuration: '7'
};

export const weatherSlice = createSlice({
	name: SLICE_NAME,
	initialState,
	reducers: {
		setTemperatureUnit: (state, action) => {
			state.temperatureUnit = action.payload
		},
		setForecastDuration: (state, action) => {
			state.forecastDuration = action.payload
		}

	},
	extraReducers: (builder) => {
		builder.addCase(fetchCurentWeather.pending, (state) => {
			state.isLoading = true;
		});

		builder.addCase(fetchCurentWeather.fulfilled, (state, action) => {
			state.isLoading = false;
			state.weather = action.payload;
		});

		builder.addCase(fetchCurentWeather.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		});
	},
});


const { reducer: weatherReducer } = weatherSlice;

export const { setTemperatureUnit,setForecastDuration } = weatherSlice.actions

export default weatherReducer;