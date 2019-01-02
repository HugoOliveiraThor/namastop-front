import React, { Component } from 'react'
import './filter.css' 
import { TextField, Button } from '@material-ui/core';
import Card from '@material-ui/core/Card';


class Filter extends Component {

  state = { 
    date: '',
    recipient: '',
    sender: ''
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    const { filterItens } = this.props  
    const { recipient, sender } = this.state
    return (
  <Card className='card-filter'>
    <form className='form-container'>
        <div className='form-row'>
        <TextField
              label="Remetente"
              name='sender'
              value={sender}
              onChange={this.handleChange}
              margin="normal"
              error={!this.state.list && this.state.showErrors}
            />
        </div>
        <div className='form-row'>
        <TextField
              label="Destinatario"
              name='recipient'
              value={recipient}
              onChange={this.handleChange}
              margin="normal"
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
              error={!this.state.product && this.state.name}
          />
          </div>
          <Button 
            variant='outlined' 
            color='secondary' 
            onClick={() => filterItens(this.state)}>
            Pesquisar
          </Button>
    </form>
  </Card>
    )
    }
}

export default Filter