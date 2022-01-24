import React, { Component } from 'react';
import { ErrorAlert } from './Alert';


class NumberOfEvents extends Component {
  
  state = {
    NumberOfEvents: 32,
    ErrorAlert: '',
  }

  handleNumberChanged = (event) => {
    const value = event.target.value
    //this.props.udateEvent(null, value);
    if(value < 1 || value > 32) {
      this.setState({
        NumberOfEvents: '',
        ErrorAlert: 'Please select number from 1 to 32',
      })
    } else {
      this.setState({
        NumberOfEvents: value,
        ErrorAlert:'',
      });
    }
    this.props.updateNumberOfEvents(event.target.value); 
  };
  
  render() {
    return( 
      <div>
          <p>Number of events:</p>
          < ErrorAlert text={this.state.ErrorAlert} />
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