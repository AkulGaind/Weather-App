import React from 'react'
import WeatherCard from './WeatherCard';
import { Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const CardPopulate: React.FC = () => {
    const data = useSelector((state: RootState) => (state.weatherForecast.data));
    const loading = useSelector((state: RootState) => (state.weatherForecast.loading));
    const date = new Date().toISOString().split('T')[0] + " " + new Date().toLocaleString('en-GB').slice(12);
    console.log(date)
    const time = Number(new Date().toLocaleString('en-GB').slice(12).slice(0, 2));

    return (
        <React.Fragment>
            {loading ? <div>Loading...</div> : <Grid container wrap='nowrap' overflow={'scroll'} spacing={1}>
                {
                    // data.list.map((item: any, index: number) => {
                    //     return(
                    // { (time < Number(item.dt_txt.slice(12,15))) && 
                    //  <>
                    //     <Grid item key={index} sx={{ mb: 4 }}>
                    //         <WeatherCard day={item} />
                    //     </Grid>
                    // </>
                    // }

                    (data.list).filter((l:any) => { 
                            // return time < parseInt(l.dt_txt.substring(11,13))
                            // const s = l.dt_txt ;
                            const d1 = new Date(date);
                            const d2 = new Date(l.dt_txt);
                            return d1 < d2;
                        }).map((item: object, index: number) => {
                        return (
                            <>
                                <Grid item key={index} sx={{ mb: 4 }}>
                                    <WeatherCard day={item} />
                                </Grid>
                            </>)
                    })


                        //  ((data.list).filter((l:any) => { 
                        //     console.log(parseInt(l.dt_txt.substring(11,13)));
                        //     return time < parseInt(l.dt_txt.substring(11,13))
                        // }))
                        //  .map((item: any, index:number) => {
                        //     console.log(item)
                        //     return 
                        //     (<>
                        //             <Grid item key={index} sx={{ mb: 4 }}>
                        //                  <WeatherCard day={item} />
                        //            </Grid>
                        //         </>)
                        //  })
                                // return(
                                // { (time < Number(item.dt_txt.slice(12,15))) && 
                                //  <>
                                //     <Grid item key={index} sx={{ mb: 4 }}>
                                //         <WeatherCard day={item} />
                                //     </Grid>
                                // </>
                                // }



                    //     )
                    // data.list.filter(check).map((item: any, index: number) => {
                    //     return (<>
                    //         <Grid item key={index} sx={{ mb: 4 }}>
                    //             <WeatherCard day={item} />
                    //         </Grid>
                    //     </>)
                    // })
                    }


            </Grid>}
        </React.Fragment>
    )
}

export default CardPopulate;