import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { Thunderstorm, WbSunny, SevereCold, Cloud} from '@mui/icons-material';

const WeatherIcon = () => {
    const data = useSelector((state: RootState) => (state.dailyForecast.data));
    const id = data.weather[0].id;
    let weatherIcon: React.ReactNode;
    if (id >= 200 && id < 600) weatherIcon = <Thunderstorm sx={{ fontSize: '100px', color: '#fff' }} />
    if (id >= 600 && id < 700) weatherIcon = <SevereCold sx={{ fontSize: '100px', color: '#fff' }} />
    if (id > 700 || id > 800) weatherIcon = <Cloud sx={{ fontSize: '100px', color: '#fff' }} />
    if (id === 800) weatherIcon = <WbSunny sx={{ fontSize: '100px', color: '#fff' }} />

    return (
        <React.Fragment>
            {weatherIcon}
        </React.Fragment>
    )

}

export default WeatherIcon;
