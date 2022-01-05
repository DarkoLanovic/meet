import React, { Component } from "react";


class NumberOfEvents extends Component {
  state = {
    query: 32,
  }

  updateNumberOfEvents = (event) => {
    const value = event.target.value
    this.props.udateEvent(null, value);
    if(value < 1 || value > 32) {
      this.setState({
        query: value,
      })
    } else {
      return this.setState({
        query: value,
      })
    }
    
  }
  
  render() {
    return( 
      <div>
          <p>Number of events:</p>
          <input 
            type="number"
            className="numberOfEvents"
            value={this.state.query}
            onChange={this.updateNumberOfEvents}
          />
      </div>
    )
  }
}

export default NumberOfEvents;