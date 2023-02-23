import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <News pageSize={5} apiKey="2f2e058ecaa64fdd81c83247ff369134" country="in" category='general'/>
      </div>
    )
  }
}


