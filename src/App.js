import React, { Component } from 'react';
import './App.css';
import Search from './Components/Search';
import YoutubeSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyCP9i60WSl8NaprDSmTW8CZjiUb0KnhkDA';


class App extends Component {

  constructor(props) {
    super();
    this.state = {
      videos: []
    }

    YoutubeSearch({key: API_KEY, term: 'surfBoards'}, (data) => {
      this.setState({videos: data});
    });
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
