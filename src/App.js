import React, { Component } from 'react';
import Header from './common/Header'
import Filter from './common/filter/Filter'
import Card from './components/card/Index'
import db from './firebase/init'

// Components
import './App.css';

class App extends Component {
  state = {
    comments:[]
  }

  async componentDidMount () {
    db.collection('namastop').get().then(users => {
      let array = []
      users.docs.forEach(doc => {array.push(doc.data())})
      this.setState({comments:array})
    })  
  }

  
  render() {
    const {comments} = this.state
    console.log(comments)
    return (
        <React.Fragment>
          <Header />
          <Filter />
          <div className='containers-card'>
          {comments && comments.map((d,idx) => <Card imgWhoReceived={d.photo} imgWhoSend={d.photo} commentary={d.text} key={idx} /> )}
          </div>
        </React.Fragment>
    );
  }
}

export default App;
