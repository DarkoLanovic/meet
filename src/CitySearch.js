import React, { Component } from 'react';



class CitySearch extends Component {
  state = {
    query: '',
    suggestions: []
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    const suggestions = this.props.locations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });
    this.setState({
      query: value,
      suggestions,
    });
  };

  handleItemClicked = (suggestion) => {
    this.setState({
      query: suggestion
    });
    this.props.updateEvents(suggestion);
  }

  render() {
    return (
      <div className="CitySearch">
        <input 
          className="city"
          type="text"  
          value={this.state.query} 
          onChange={this.handleInputChanged} 
        />
        <ul className="suggestions">
          {this.state.suggestions.map((suggestions) => (
            <li 
              key={suggestions} 
              onClick={() => this.handleItemClicked(suggestions)}>{suggestions}</li>
          ))}
          <li>
            <b>See all cities</b>
          </li>
        </ul>
      </div>
    );
  }
}

export default CitySearch;