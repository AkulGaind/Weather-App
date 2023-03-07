import React from 'react';
import './App.css';
import Paper from '@mui/material/Paper';
import Image from './assets/sunset.jpg';
import { Container } from '@mui/material';
import TitleSearchBar from './components/TitleSearchBar';
import BigLabel from './components/BigLabel';
import CurrentDetails from './components/CurrentDetails';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';
import CardPopulate from './components/CardPopulate';

const styles = {
  paperContainer: {
    minHeight: '100vh',
    backgroundImage: `url(${Image})`
  }
};


function App() {
  const data = useSelector((state: RootState) => (state.dailyForecast.data));
  return (
    <React.Fragment>
      <Paper style={styles.paperContainer}>
        <Container 
        // sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
        >
          <TitleSearchBar />
          {data && (<>
          <BigLabel/>
          <CurrentDetails />
          <CardPopulate />
          </>)}
        </Container>
      </Paper>
    </React.Fragment>
  );
}

export default App;
