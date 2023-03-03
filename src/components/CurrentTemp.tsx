import React from 'react';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { Box, Container } from '@mui/system';
import { createStyles, makeStyles } from '@mui/material';

// const useStyles = makeStyles({
//     div: {
//         width:'50%', display: 'flex', flex-direction: 'column',
//     },
// });

const CurrentTemp: React.FC = () => {
    // const classes = useStyles();
    return (
        <React.Fragment>
            <Stack
                direction="row" width={'50%'}>
                <Box sx={{ width: '50%', mr: 4}} display={'flex'} flexDirection={'row-reverse'}><WbSunnyIcon sx={{ fontSize: '100px', color: '#fff' }} /></Box>
                {/* <div style={{width:'50%', display: 'flex', flex-direction: 'column', }}> */}
                <Stack
                    display={'flex'}
                    direction="column" width={'50%'}>
                    <Typography
                        variant="h2"
                        color="#fff">
                        31°
                    </Typography>
                    <Typography
                        variant="h5"
                        color="#fff">
                        Clear
                    </Typography></Stack>
            </Stack>
        </React.Fragment>
    )
}

export default CurrentTemp;