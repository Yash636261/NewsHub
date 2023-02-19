import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import NewsSec from './components/NewsSec';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <NewsSec pageSize={6}/>
      </div>
    )
  }
}
