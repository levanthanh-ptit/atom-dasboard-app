import React, { Component } from 'react';
import './App.css';
import './layout/AppLayout'
import AppLayout from './layout/AppLayout';

class App extends Component {
  render() {
    return (
      <div id='App'>
        <AppLayout />
      </div>
      
    );
  }
}

export default App;
