import React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';

interface props {
    day: any
}
const WeatherCard: React.FC<props> = ({ day }) => {
    const month = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
    let d: string = new Date().toISOString().split('T')[0].slice(5).slice(3);
    if(Number(d)===Number(day.dt_txt.slice(5,10).slice(3,5))) d = "Today";
    else if(Number(d) + 1===Number(day.dt_txt.slice(5,10).slice(3,5))) d="Tomorrow";
    else d=day.dt_txt.slice(5,10).slice(3,5) + " " + month[Number(day.dt_txt.slice(5,10).slice(0,2)) - 1];
    return (
        <Card
            sx={{minWidth:120, maxHeight: 200, backgroundColor: 'transparent', background: '#ffffff20', boxShadow: 0, color: 'white'}}>

            <Stack
                justifyContent="center"
                alignItems="center"
                textAlign="center"
                spacing={-2}
            >

                <CardContent>
                    <Typography
                        variant="body1">
                            {d}
                            {/* <strong>{d}</strong> */}
                        {/* {day.dt_txt.slice(5,10)}  {d} */}
                    </Typography>
                    <Typography
                        variant="body1">
                        {day.dt_txt.slice(11,16)}
                    </Typography>
                </CardContent>
                <CardMedia
                    sx={{ maxWidth: 70 }}
                    component="img"
                    image={`https://openweathermap.org/img/wn/${day.weather[0].icon}@4x.png`}>
                </CardMedia>
                <CardContent>
                <Typography
                        variant="body1" display="block">
                        {day.weather[0].main}
                    </Typography>
                    <Typography textAlign={'center'}
                        variant="body1" display="block">
                        {Math.ceil(day.main.temp)}°
                    </Typography>
                </CardContent>
            </Stack>
        </Card>

    )
}

export default WeatherCard;