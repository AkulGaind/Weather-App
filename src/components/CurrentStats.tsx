import React from 'react';
import Stat from './Stat';
import {Grid, Stack} from '@mui/material';

const CurrentStats: React.FC = () => {
    return(
        
            <Grid container spacing={2}>
                <Grid item xs={3}><Stat /></Grid>
                <Grid item xs={3}><Stat /></Grid>
                <Grid item xs={3}><Stat /></Grid>
                <Grid item xs={3}><Stat /></Grid>
                <Grid item xs={3}><Stat /></Grid>
                <Grid item xs={3}><Stat /></Grid>
                <Grid item xs={3}><Stat /></Grid>
                <Grid item xs={3}><Stat /></Grid>
            </Grid>
            
    )
}

export default CurrentStats;