import React from 'react';
import './App.css';
import Paper from '@mui/material/Paper';
import Image from './assets/2850815.jpg';
import { Container } from '@mui/material';
import TitleSearchBar from './components/TitleSearchBar';
import BigLabel from './components/BigLabel';
import CurrentDetails from './components/CurrentDetails';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';
import CardPopulate from './components/CardPopulate';
import { styled } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material';

const styles = {
  paperContainer: {
    minHeight: '100vh',
    background: `linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url(${Image})`,
    backgroundSize:'cover',
    backgroundRepeat:'no-repeat'
  }
};

let theme = createTheme();
theme = createTheme(theme, {
  typography: {
    fontFamily: 'Poppins',
    allVariants: {
      letterSpacing: '0.5px'
    }
  }
})

const NoCity = styled('div')({
  backgroundColor: 'transparent', 
  background: '#ffffff20',
  color: 'white',
  textAlign: 'center',
//   backgroundColor: 'aliceblue',
  padding: 8,
  borderRadius: 4,
});


function App() {
  const data = useSelector((state: RootState) => (state.dailyForecast.data));
  return (
    <React.Fragment>
      <ThemeProvider theme = {theme}>
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
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
