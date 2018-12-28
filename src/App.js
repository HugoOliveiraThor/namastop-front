import React, { Component } from 'react';
import { createMuiTheme } from '@material-ui/core/styles'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import Header from './common/Header'
import Filter from './common/Filter'
import Card from './components/card/index'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'



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
        <Router>
            <React.Fragment>
              <Header />
              <Filter />
              <div className='containers-card'>
              <Card/>
              <Card/>
              </div>              
              <Switch>
                {/* <Route exact path='/' component={Home} /> */}
                {/* <Route path='/lista/:action' component={CreateList} /> */}
              </Switch>
            </React.Fragment>
          </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
