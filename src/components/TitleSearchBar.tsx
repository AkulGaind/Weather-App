import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import SearchIcon from "@mui/icons-material/Search";
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { styled } from '@mui/material/styles';
import { fetchDailyForecast} from '../features/DailyForecastSlice';
import { fetchWeatherForecast} from '../features/WeatherForecastSlice';
import { RootState } from '../store/store';

const TitleSearchBar: React.FC = () => {
//     const data = useSelector((state: RootState) => (state.dailyForecast.data));
// const fragment = styled(Stack)({
//     top: ${({ data }) => (data ? '0%' : '30%')},
// position: 'relative',
// margin: '0 auto',
// maxWidth: 500,
// transition: '0.8s 0.5s'
//   });
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
        sx={{mt: 5, mb: 1}}
        variant="h2" 
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