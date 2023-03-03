import React from 'react';
import Typography from '@mui/material/Typography';

const BigLabel: React.FC = () => {
    const week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const d = new Date();
    return(
        <React.Fragment>
            <Typography
            variant="h5" 
            color="white">
                Chandigarh, IN
            </Typography>
            <Typography
            sx={{mb: 4}}
            variant="h5" 
            color="white">
                {week[d.getDay() - 1]}, {d.getDate()}  {month[d.getMonth()]}
            </Typography>
        </React.Fragment>
    )
}

export default BigLabel;