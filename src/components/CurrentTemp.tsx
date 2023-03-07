import React from 'react';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { Box} from '@mui/system';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import WeatherIcon from './WeatherIcon';

const CurrentTemp: React.FC = () => {
    const data = useSelector((state: RootState) => (state.dailyForecast.data));
    
    return (
        <React.Fragment>
            <Stack
                direction="row" width={'50%'}>
                <Box sx={{ width: '50%', mr: 4}} display={'flex'} flexDirection={'row-reverse'}>
                    <WeatherIcon/>
                    </Box>
                <Stack
                    display={'flex'}
                    direction="column" width={'50%'}>
                    <Typography
                        variant="h2"
                        color="#fff">
                        {Math.ceil(data.main.temp)}°
                    </Typography>
                    <Typography
                    sx={{textTransform: 'capitalize'}}
                        variant="h5"
                        color="#fff">
                        {data.weather[0].description}
                    </Typography></Stack>
            </Stack>
        </React.Fragment>
    )
}

export default CurrentTemp;