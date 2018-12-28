import React, { Component } from 'react';
import Header from './common/Header'
import Filter from './common/filter/Filter'
import Card from './components/card/Index'
import db from './firebase/init'

// Components
import './App.css';

const img = "https://secure.gravatar.com/avatar/cc84b9f7a53cf2e0722aea4fb609e1fe.jpg?s=512&d=https%3A%2F%2Fa.slack-edge.com%2F7fa9%2Fimg%2Favatars%2Fava_0021-512.png"
const comentary = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

class App extends Component {

  
  render() {
    return (
        <React.Fragment>
          <Header />
          <Filter />
          <div className='containers-card'>
            <Card imgWhoReceived={img} imgWhoSend={img} commentary={comentary} />
            <Card imgWhoReceived={img} imgWhoSend={img} commentary={comentary} />

          </div>
        </React.Fragment>
    );
  }
}

export default App;
