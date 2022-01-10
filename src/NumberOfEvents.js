import React, { Component } from "react";


class NumberOfEvents extends Component {
  state = {
    NumberOfEvents: 32,
  }

  handleNumberChanged = (event) => {
    const value = event.target.value
    //this.props.udateEvent(null, value);
    if(value < 1 || value > 32) {
      this.setState({
        NumberOfEvents: '',
      })
    } else {
      this.setState({
        NumberOfEvents: value,
      });
    }
    this.props.updateNumberOfEvents(event.target.value); 
  };
  
  render() {
    return( 
      <div>
          <p>Number of events:</p>
          <input 
            type="number"
            className="numberOfEvents"
            value={this.state.NumberOfEvents}
            onChange={this.handleNumberChanged}
          />
      </div>
    )
  }
}

export default NumberOfEvents;