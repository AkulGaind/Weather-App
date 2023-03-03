import React from 'react';
import Typography from '@mui/material/Typography';

const Stat: React.FC = () => {
    return(
        <React.Fragment>
            <Typography
            variant="h5"
            color="#fff">
            3.55
            </Typography>
            <Typography
            color="#fff">
                Wind
            </Typography>
        </React.Fragment>
    )
}

export default Stat;