import React from 'react';
import Stack from '@mui/material/Stack';
import CurrentStats from './CurrentStats';
import CurrentTemp from './CurrentTemp';
import { Card } from '@mui/material';
import shadows from '@mui/material/styles/shadows';


const CurrentDetails: React.FC = () => {
    return(
        <React.Fragment>
            <Stack
            direction="row"
            sx={{mb: 6, minHeight: 200}}>
                <CurrentTemp />
                <Card sx={{width:'50%',backgroundColor: 'transparent', boxShadow: 0}}><CurrentStats /></Card>
            </Stack>
        </React.Fragment>
    )
}

export default CurrentDetails;