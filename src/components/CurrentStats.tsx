import React from 'react';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const CurrentStats: React.FC = () => {
    const data = useSelector((state: RootState) => (state.dailyForecast.data));
    return (
        <Grid container spacing={2}>
            <Grid item xs={3}><Typography
                variant="h5"
                color="#fff">
                {Math.ceil(data.main.temp)}°
            </Typography>
                <Typography
                variant="h6"
                    color="#fff">
                    High
                </Typography></Grid>
            <Grid item xs={3}>
                <Typography
                    variant="h5"
                    color="#fff">
                    {Math.ceil(data.main.feels_like)}°
                </Typography>
                <Typography
                variant="h6"
                    color="#fff">
                    Feels Like
                </Typography>
            </Grid>
            <Grid item xs={3}>
                <Typography
                    variant="h5"
                    color="#fff">
                    {new Date(data.sys.sunrise * 1000).getHours() + ':' + new Date(data.sys.sunrise * 1000).getMinutes()}
                </Typography>
                <Typography
                variant="h6"
                    color="#fff">
                    Sunrise
                </Typography>
            </Grid>
            <Grid item xs={3}>
                <Typography
                    variant="h5"
                    color="#fff">
                    {data.wind.speed} mph
                </Typography>
                <Typography
                variant="h6"
                    color="#fff">
                    Wind
                </Typography>
            </Grid>
            <Grid item xs={3}>
                <Typography
                    variant="h5"
                    color="#fff">
                    {Math.floor(data.main.temp_min)}°
                </Typography>
                <Typography
                variant="h6"
                    color="#fff">
                    Low
                </Typography>
            </Grid>
            <Grid item xs={3}>
                <Typography
                    variant="h5"
                    color="#fff">
                    {data.main.humidity}%
                </Typography>
                <Typography
                variant="h6"
                    color="#fff">
                    Humidity
                </Typography>
            </Grid>
            <Grid item xs={3}>
                <Typography
                    variant="h5"
                    color="#fff">
                    {new Date(data.sys.sunset * 1000).getHours() + ':' + new Date(data.sys.sunset * 1000).getMinutes()}
                </Typography>
                <Typography
                variant="h6"
                    color="#fff">
                    Sunset
                </Typography>
            </Grid>
            <Grid item xs={3}>
                <Typography
                    variant="h5"
                    color="#fff">
                    {data.main.pressure}hPa
                </Typography>
                <Typography
                variant="h6"
                    color="#fff">
                    Pressure
                </Typography>
            </Grid>
        </Grid>

    )
}

export default CurrentStats;