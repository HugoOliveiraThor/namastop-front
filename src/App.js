import React, { Component } from 'react';
import { createMuiTheme } from '@material-ui/core/styles'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import Header from './common/Header'
import Filter from './common/filter/Filter'
import Card from './components/card/Index'



import './App.css';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: {
      main: '#00bcd4'
    },
    secondary: {
      main: '#f50057',
    },
  }
})

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <React.Fragment>
          <Header />
          <Filter />
          <div className='containers-card'>
            <Card />
            <Card />
          </div>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default App;
