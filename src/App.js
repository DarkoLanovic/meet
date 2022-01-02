import React, { Component } from 'react';
import './App.css';
import EventList from './EventList'; 
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents } from './api';

// Method that changes the events state
updateEvents = (location) => {
  getEvents().then((events) => {
    const locationEvents = events.filter((event) => event.location === location);
    this.setState({
      events: locationEvents
    });
  });
}

class App extends Component {
  state = {
    events: [],
    locations: [],
  }
  render() {
    return (
      // This displays all the components within the App div
      <div className="App">
         // Pass the "locations" and "updateEvents" to CitySearch as a prop 
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        
        <NumberOfEvents />
        
        // Pass the state to EventList as a prop of events
        <EventList events={this.state.events} /> 
       
      </div>
    );
  } 
}

export default App;


