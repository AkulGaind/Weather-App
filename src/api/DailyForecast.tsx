import React, { useEffect, useState } from 'react'
import axios from 'axios';

interface Day {
    current_temp: number,
    temp_max: number,
    temp_min: number,
    feels_like: number,
    description: string,
    icon: string,
    sunrise: string,
    sunset: string
}

const DailyForecast = () => {
    const [state, setState] = useState<Day>();
    const apiKey: string = "917a0b1965e1ef446c00cb8a657e5c40";
    const cityName: string = "Chandigarh";
    const url: string = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    const iconUrl = `https://openweathermap.org/img/wn/${state?.icon}@4x.png`;

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const response = await axios.get(url);
                console.log(response.data.list)
                setState({
                    current_temp: Math.ceil(response.data.main.temp),
                    temp_max: Math.ceil(response.data.main.temp_max),
                    temp_min: Math.ceil(response.data.main.temp_min),
                    feels_like: Math.ceil(response.data.main.temp),
                    description: response.data.weather[0].main,
                    icon: response.data.weather[0].icon,
                    sunrise: new Date(response.data.sys.sunrise * 1000).getHours() + ':' + new Date(response.data.sys.sunrise * 1000).getMinutes(),
                    sunset: new Date(response.data.sys.sunset * 1000).getHours() + ':' + new Date(response.data.sys.sunset * 1000).getMinutes()
                })
            }
            catch (error) {
                console.log(error)
            }
        }
        fetchApi();
    }, [url]);
    return (
        <React.Fragment>
            <h1>Hello World!</h1>
            <h2>Current Temp: {state?.current_temp}</h2>
            <h2>Temp Max: {state?.temp_max}</h2>
            <h2>Temp Min: {state?.temp_min}</h2>
            <h2>Feels Like: {state?.feels_like}</h2>
            <h2>Desciption: {state?.description}</h2>
            <h2>Sunrise: {state?.sunrise}</h2>
            <h2>Sunset: {state?.sunset}</h2>
            <img src={`${iconUrl}`} alt="" />
        </React.Fragment>
    )
}

export default DailyForecast;