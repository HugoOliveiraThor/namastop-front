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

  componentWillUpdate() {
    
  }

  componentDidUpdate(prevProps) {
    
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
    // console.log('state',this.state)
    // const newValue = this.props.data.filter(d => {
    //   // console.log('Real_name', d.real_name)
    //   // console.log('indexOf',e.target.value)
    //   // console.log('TRUE', d.real_name.indexOf(e.target.value) !== -1)
    //   return d.real_name.indexOf(e.target.value) !== -1
    // })
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