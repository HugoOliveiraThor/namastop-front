import React, { Component } from 'react'
import { MenuItem, TextField, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Cards from '../components/card/index';


import AppBar from '@material-ui/core/AppBar';

import Grid from '@material-ui/core/Grid';


const styles = {
  root: {
    flexGrow: 1,
  },
};




class Form extends Component {

  
  state = {
    date: '',
    users: '',
    list: '',
    product: '',
    quantity: '',
    unit: '',
    price: '',
    showErrors: false
  }

  componentDidUpdate(prevProps) {
    
  }

  handleChange = e => {
    console.log('e',e.target.name)
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = () => {
      
  }

  render() {
    return (
<Card style={{margin:'10px 0 10px 0'}}>
<form className='form-container'>
        <div className='form-row'>
        <TextField
              label="Remetente ou Destinatario"
              name='users'
              value={this.state.users}
              onChange={this.handleChange}
              margin="normal"
              required
              error={!this.state.list && this.state.showErrors}
            />
        </div>
        <div className='form-row'>    
        <TextField
              label="Data de publicaçao"
              name='date'
              type="date"
              value={this.state.date}
              onChange={this.handleChange}
              required
              InputLabelProps={{
                shrink: true,
              }}
              error={!this.state.product && this.state.showErrors}
          />
          </div>
          <Button variant='outlined' color='secondary' onClick={this.handleSubmit}>Pesquisar</Button>
        </form>
      </Card>
    )
    }
}

export default withStyles(styles)(Form);