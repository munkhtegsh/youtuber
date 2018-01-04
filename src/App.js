import React, { Component } from 'react';
import './App.css';
import Search from './Components/Search';
const API_KEY = 'AIzaSyD8JXAk7tF4c4DJos6E7jCn_rAyQ0xnUIM';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Search  />
      </div>
    );
  }
}

export default App;
