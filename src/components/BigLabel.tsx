import React from 'react';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const BigLabel: React.FC = () => {
    const data = useSelector((state: RootState) => (state.dailyForecast.data))
    const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const d = new Date();
    return(
        <React.Fragment>
            <Typography
            variant="h5" 
            color="white">
                {data.name}, {data.sys.country}
            </Typography>
            <Typography
            sx={{mb: 4}}
            variant="h5" 
            color="white">
               {week[d.getDay()]}, {d.getDate()}  {month[d.getMonth()]}
            </Typography>
        </React.Fragment>
    )
}

export default BigLabel;