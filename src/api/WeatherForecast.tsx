import React, { useEffect, useState } from 'react'
import axios from 'axios';
import WeatherCard from '../components/WeatherCard';
import { Grid, Stack } from '@mui/material';

interface Day {
    current_temp: number,
    temp_max: number,
    temp_min: number,
    feels_like: number,
    description: string,
    icon: string,
    time: string,
    date: string
}

interface State extends Array<Day> {
}

const WeatherForecast = () => {
    const [state, setState] = useState<State>([]);
    const apiKey: string = "917a0b1965e1ef446c00cb8a657e5c40";
    const cityName: string = "Chandigarh";
    const url: string = `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=metric`;
    const iconUrl = `https://openweathermap.org/img/wn/04n@4x.png`;

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const response = await axios.get(url);
                // console.log(response.data.list)
                response.data.list.map((item: any) => {
                    let day: Day = {
                        current_temp: Math.ceil(item.main.temp),
                        temp_max: Math.ceil(item.main.temp_max),
                        temp_min: Math.ceil(item.main.temp_min),
                        feels_like: Math.ceil(item.main.feels_like),
                        description: item.weather[0].main,
                        icon: item.weather[0].icon,
                        date: item.dt_txt.slice(5,10),
                        time: item.dt_txt.slice(11,16),
                        
                    }
                    setState(state => [...state, day])
                    return;
                })
            }
            catch (error) {
                console.log(error)
            }
        }
        fetchApi()
    }, [url]);

    return (
        <React.Fragment>
            <>
            <Grid container wrap='nowrap' overflow={'scroll'} spacing={1}>
            
                {
                    state.map((item: Day, index:number) => {

                        return <><Grid item key={index} sx={{mb: 4}}>
                        <WeatherCard   day = {item} />
                </Grid>

                            {/* <h2>------Day------</h2>
                            <h2>Current Temp: {item.current_temp}</h2>
                            <h2>Temp Max: {item.temp_max}</h2>
                            <h2>Temp Min: {item.temp_min}</h2>
                            <h2>Feels Like: {item.feels_like}</h2>
                            <h2>Description: {item.description}</h2>
                            <img src={`https://openweathermap.org/img/wn/${item.icon}@4x.png`} alt="" /> */}
                        </>

                    })
                }
            </Grid>
            </></React.Fragment>
    )
}

export default WeatherForecast;