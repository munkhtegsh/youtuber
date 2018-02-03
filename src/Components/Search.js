import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        };       
    }

    handleChange(term) {
        //this.setState({input: term});
        this.props.handleSearch(term);
    }

    render() {
        return (
            <div className="search-bar">
                <input type="text" 
                       placeholder="Search" 
                       onChange={e => this.handleChange(e.target.value)}  
                />
            </div>
        )
    }
}

export default Search;