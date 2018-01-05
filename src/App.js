import React, { Component } from 'react';
import './App.css';
import Search from './Components/Search';
import VideoList from './Components/VideoList';
import VideoPlayer from './Components/VideoPlayer';
import YoutubeSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyCP9i60WSl8NaprDSmTW8CZjiUb0KnhkDA';

class App extends Component {

  constructor(props) {
    super();
    this.state = {
      videos: [],
      selected: null
    };
  }

  componentDidMount() {
    YoutubeSearch({key: API_KEY, term: 'music'}, (data) => {
      this.setState({
        videos: data,
        selected: data[0]
      });
    });
  }

  render() {
    return (
      <div className="App">
        <Search  />
        <VideoPlayer list={this.state.selected}  />
        <VideoList list={this.state.videos} 
                   onSelected={(e) => this.setState({selected: e})} />
      </div>
    );
  }
}

export default App;
