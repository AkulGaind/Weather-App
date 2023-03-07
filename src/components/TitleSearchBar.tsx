import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import SearchIcon from "@mui/icons-material/Search";
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import { useDispatch} from 'react-redux';
import React from 'react';
import { fetchDailyForecast} from '../features/DailyForecastSlice';
import { fetchWeatherForecast} from '../features/WeatherForecastSlice';



const TitleSearchBar: React.FC = () => {
    const [city,setCity] = useState<string>('')
    const dispatch:any = useDispatch();
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(fetchDailyForecast(city));
        dispatch(fetchWeatherForecast(city));
    }
    return(
        <React.Fragment>
        <Stack
        justifyContent="center"
        alignItems="center"
        >
        <form onSubmit={handleSubmit}>
        <Typography
        sx={{mt: 4}}
        variant="h3" 
        color="white">
            The Weather Channel
        </Typography>
        <TextField 
        sx={{bgcolor: "#fff",width:'100%' ,borderRadius: 8,mt: 4, mb: 6, "& fieldset": { border: 'none' }}}
        placeholder="City Name"
        // onSubmit={handleSubmit}
        onChange={(e) => {setCity(e.target.value)}}
        InputProps={{
            endAdornment: (
                <IconButton>
                  <SearchIcon />
                </IconButton>
            )
          }}
        />
        </form>
        </Stack>
        </React.Fragment>
    )
}

export default TitleSearchBar;