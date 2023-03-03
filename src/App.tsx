import React from 'react';
import './App.css';
import WeatherForecast from './api/WeatherForecast';
import DailyForecast from './api/DailyForecast';
import Paper from '@mui/material/Paper';
import Image from './assets/2850815.jpg';
import WeatherCard from './components/WeatherCard'
import { Container } from '@mui/material';
import TitleSearchBar from './components/TitleSearchBar';
import BigLabel from './components/BigLabel';
import CurrentDetails from './components/CurrentDetails'


const styles = {
  paperContainer: {
    backgroundImage: `url(${Image})`
  }
};


function App() {
  return (
    <React.Fragment>
      <Paper style={styles.paperContainer}>
        <Container>
          <TitleSearchBar />
          <BigLabel/>
          <CurrentDetails />
          <WeatherForecast />
        </Container>
      </Paper>
    </React.Fragment>
  );
}

export default App;
