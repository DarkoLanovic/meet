import React, { Component } from 'react';
import { InfoAlert } from './Alert';


class CitySearch extends Component {
  
  state = {
    query: '',
    suggestions: [],
    showSuggestions: undefined,
    infoText: '',
  }

  // "Event hendler function" for <input> for the <change> event
  handleInputChanged = (event) => {
    const value = event.target.value;
    //this.setState({showSuggestions:true});
    const suggestions = this.props.locations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });
    if (suggestions.length === 0) {
      this.setState({
        query: value,
        infoText: '🔵 The city you search can not be find. Please try again!',
      });
    } else {
      return this.setState({
        query: value,
        suggestions,
        infoText: '',
      });
    }
  };

  handleItemClicked = suggestion => {
    this.setState({
      query: suggestion,
      showSuggestions: false,
    });
    this.props.updateEvents(suggestion);
  };

  render() {
    return (
      
      <div>
        <h2 className="enter-city">Please Enter City Name</h2>
        <InfoAlert className="InfoAlert" text={this.state.infoText} /> 
        <div className="CitySearch">
          <input 
            className="city"
            type="text"  
            value={this.state.query} 
            onChange={this.handleInputChanged}  // Event Listener       
            onFocus={() => {this.setState({ showSuggestions: true }) }}
          />  
          
          <ul className="suggestions" style={this.state.showSuggestions ? {}: {display: 'none'}}>
            {this.state.suggestions.map((suggestion) => (
              <li 
                key={suggestion} 
                onClick={() => this.handleItemClicked(suggestion) }
              > 
                {suggestion} 
              </li>
            ))}
            <li onClick={() => this.handleItemClicked('all') }>
              <b>See all cities</b>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default CitySearch;