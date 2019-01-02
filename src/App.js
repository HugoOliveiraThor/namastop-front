import React, { Component } from 'react';
import Header from './common/Header'
import Filter from './common/filter/Filter'
import Card from './components/card/Index'
import db from './firebase/init'
import {getToDateTime, formatDataToBrazil} from './helpers/helpers'

// Components
import './App.css';

class App extends Component {
  state = {
    comments:[],
    data: [],
    originalArray: []
  }

  async componentDidMount () {
    db.collection('namastop').get().then(users => {
      let array = []
      users.docs.forEach(doc => {array.push(doc.data())})
      this.setState({comments:array, originalArray:array})
    })   
     
  }

  _verifyIfStringExist = (stringVerify,stringFilter) => {
    return stringVerify.indexOf(stringFilter) !== -1
  }

  
  filterItens = (obj) => {
    const {recipient = '', sender= ''} = obj
    
    if(recipient === '' && sender === '') {
      this.setState({ comments: this.state.originalArray })
    } else {
      const filterExtracted = this.state.comments.filter(d => {
        if ( recipient && sender && d.real_name && d.realNameWhoReceive ) { 
          return this._verifyIfStringExist(d.real_name, sender)  && this._verifyIfStringExist(d.realNameWhoReceive, recipient)
        } else if (sender && !recipient && d.real_name) {
          return this._verifyIfStringExist(d.real_name,sender)
        } else if (!sender && recipient && d.realNameWhoReceive) {
          return this._verifyIfStringExist(d.realNameWhoReceive, recipient)
        }
      })
      this.setState({ comments:filterExtracted })
    }
  }
  
  render() {
    const {comments} = this.state
    return (
        <React.Fragment>
          <Header />
          <Filter filterItens={(e) => this.filterItens(e)}  />
          <div className='containers-card'>
          {comments && comments.map((d,idx) =>  
            (<Card 
              imgWhoReceived={d.photo} 
              imgWhoSend={d.photo} 
              commentary={d.text} 
              key={idx}
              date={d.date ? formatDataToBrazil(getToDateTime(d.date.seconds)) : '22/12/2018'} 
              realNameWhoReceive={d.realNameWhoReceive}  
            />) 
          )}
          </div>
        </React.Fragment>
    );
  }
}

export default App;
