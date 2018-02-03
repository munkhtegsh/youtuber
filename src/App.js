import React, { Component } from 'react';
import './App.css';
import Search from './Components/Search';
import VideoList from './Components/VideoList';
import VideoPlayer from './Components/VideoPlayer';
import YoutubeSearch from 'youtube-api-search';
import ListItem from './Components/ListItem';
import _ from 'lodash';

const API_KEY = 'AIzaSyCP9i60WSl8NaprDSmTW8CZjiUb0KnhkDA';

class App extends Component {

  constructor(props) {
    super();
    this.state = {
      videos: [],
      selected: null
    };
    this.handleSelected('music');
    //this.handleSelected = this.handleSelected.bind(this)
  }

  handleSelected(term) {
    YoutubeSearch({key: API_KEY, term: term}, (data) => {
      this.setState({
        videos: data,
        selected: data[0]
      });
    }); 
  }

  render() {

    const handleSelected = _.debounce((term) => {this.handleSelected(term)}, 500);
    
    return (
        <div className="App">
        <Search handleSearch={handleSelected} />
        <VideoPlayer list={this.state.selected}  />
        <VideoList list={this.state.videos} 
                   onSelected={(e) => this.setState({selected: e})} />
      </div>
    );
  }
}

export default App;
