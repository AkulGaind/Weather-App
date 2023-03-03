import React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';

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
interface props {
    day: Day
}
const WeatherCard: React.FC<props> = ({ day }) => {
    return (
        <Card
            sx={{minWidth:120, maxHeight: 200}}>

            <Stack
                justifyContent="center"
                alignItems="center"
                spacing={-2}
            >

                <CardContent>
                    <Typography
                        variant="body1">
                        {day.date} 
                    </Typography>
                    <Typography
                        variant="body1">
                        {day.time}
                    </Typography>
                </CardContent>
                <CardMedia
                    sx={{ maxWidth: 70 }}
                    component="img"
                    image={`https://openweathermap.org/img/wn/${day.icon}@4x.png`}>
                </CardMedia>
                <CardContent>
                <Typography
                        variant="body1" display="block">
                        {day.description}
                    </Typography>
                    <Typography textAlign={'center'}
                        variant="body1" display="block">
                        {day.current_temp}°
                    </Typography>
                </CardContent>
            </Stack>
        </Card>

    )
}

export default WeatherCard;