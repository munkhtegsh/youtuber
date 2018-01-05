import React, { Component } from 'react';

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            input: ''
        };       
    }



    render() {

        return (
            <div className="search-bar">
                <input type="text" placeholder="Search" 
                    onChange={e => this.setState({input: e.target.value})}
                />
            </div>
        )
    }
}

export default Search;