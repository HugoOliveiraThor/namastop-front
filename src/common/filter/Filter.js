import React, { Component } from 'react'
import './filter.css' 
import { TextField, Button } from '@material-ui/core';
import Card from '@material-ui/core/Card';


class Filter extends Component {

  state = {
    date: '',
    users: ''
  }

  componentDidUpdate(prevProps) {
    
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = () => {
      
  }

  render() {
    return (
  <Card className='card-filter'>
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
          <Button 
            variant='outlined' 
            color='secondary' 
            onClick={this.handleSubmit}>
            Pesquisar
          </Button>
    </form>
  </Card>
    )
    }
}

export default Filter