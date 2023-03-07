import { configureStore } from '@reduxjs/toolkit';
import dailyForecastReducer, {weatherForecastSlice} from '../features/DailyForecastSlice';

export const store = configureStore({
	reducer: { 
        dailyForecast: dailyForecastReducer,
        weatherForecast: weatherForecastSlice.reducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
