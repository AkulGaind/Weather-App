import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchWeatherForecast = createAsyncThunk('weatherForecast/fetchWeatherForecast', async (city: string) => {
	const response = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=917a0b1965e1ef446c00cb8a657e5c40&units=metric`);
	return response.data;
});

interface WeatherForecastState {
	data: any;
	loading: boolean;
	error: string | null;
}

const initialState: WeatherForecastState = {
	data: null,
	loading: false,
	error: null,
};

const weatherForecastSlice = createSlice({
	name: 'weatherForecast',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchWeatherForecast.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchWeatherForecast.fulfilled, (state, action) => {
				state.data = action.payload;
				state.loading = false;
				state.error = null;
			})
			.addCase(fetchWeatherForecast.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message ?? 'An error occurred';
			});
	},
});

export default weatherForecastSlice.reducer;