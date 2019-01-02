import React, { Component } from 'react';
import Header from './common/Header'
import Filter from './common/filter/Filter'
import Card from './components/card/Index'
import db from './firebase/init'

// Components
import './App.css';

class App extends Component {
  state = {
    comments:[],
    data: [],
    users:'',
    originalArray: []
  }

  async componentDidMount () {
    db.collection('namastop').get().then(users => {
      let array = []
      users.docs.forEach(doc => {array.push(doc.data())})
      this.setState({comments:array, originalArray:array})
    })  
  }

  verifyIfStringExist = (stringVerify,stringFilter) => {
    return stringVerify.indexOf(stringFilter) !== -1
  }

  filterItens = (obj) => {
    console.log('eee', obj)
    if(obj.recipient === '' && obj.sender === '') {
      this.setState({ comments: this.state.originalArray })
    } else {
      const filterExtracted = this.state.comments.filter(d => {
        if( obj.recipient && obj.sender && d.real_name && d.realNameWhoReceive ) { 
          return this.verifyIfStringExist(d.real_name, obj.sender)  && this.verifyIfStringExist(d.realNameWhoReceive,obj.recipient)
        } else if (obj.sender && !obj.recipient && d.real_name) {
          return this.verifyIfStringExist(d.real_name,obj.sender)
        } else if (!obj.sender && obj.recipient && d.realNameWhoReceive) {
          return this.verifyIfStringExist(d.realNameWhoReceive,obj.recipient)
        }
      })
      this.setState({ comments:filterExtracted })
    }
  }

  //remetente = sender
  // destinatario = recipient


// email: "hugooliveirahenrique@gmail.com"
// id: "U7RQZNW1K"
// idToWho: "U7RKZ6TD1"
// photo: "https://secure.gravatar.com/avatar/cc84b9f7a53cf2e0722aea4fb609e1fe.jpg?s=512&d=https%3A%2F%2Fa.slack-edge.com%2F7fa9%2Fimg%2Favatars%2Fava_0021-512.png"
// photoWhoReceive: "https://secure.gravatar.com/avatar/2dabad37f406e2b18d367b6952a94908.jpg?s=512&d=https%3A%2F%2Fa.slack-edge.com%2F7fa9%2Fimg%2Favatars%2Fava_0026-512.png"
// presence: "away"
// realNameWhoReceive: "José Barreto Teixeira De Paula "
// real_name: "Hugo Oliveira"
// real_name_normalized: "Hugo Oliveira"
// sendToWho: "U7RKZ6TD1"
// team_id: "T7RQZNVS9"
// text: "vamos celebrar uma nova era, "

  
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
              realNameWhoReceive={d.realNameWhoReceive}  
            />) 
            
          )}
          </div>
        </React.Fragment>
    );
  }
}

export default App;
