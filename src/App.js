import React, { Component } from 'react';
import './App.css';
import Search from './Components/Search';
import YoutubeSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyCP9i60WSl8NaprDSmTW8CZjiUb0KnhkDA';


YoutubeSearch({key: API_KEY, term: 'surfBoards'}, (data) => {
  console.log(data);
});


class App extends Component {

  constructor(props) {
    super();
    this.state = {
      term: ''
    }
  }


  

  render() {
    return (
      <div className="App">
        <Search  />
      </div>
    );
  }
}

export default App;
