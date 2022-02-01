import React, { Component } from 'react';
import './nprogress.css';
import './App.css';
import { WarningAlert } from './Alert';
import EventList from './EventList'; 
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';



class App extends Component {
  state = {
      events: [],
      locations: [],
      numberOfEvents: 32,
      currentLocation: 'all',
      infoText: '',
    }
  
  
  // To load events when the app loads - to make the API call and save inital data to state (?)
  componentDidMount() {
    const { numberOfEvents } = this.state;
    this.mounted = true;
    getEvents().then((events) => {
      if(!navigator.onLine) {
        if (this.mounted) {
          this.setState({ 
            infoText: '⚠️ Warnong: No Internet Connection!',
            events: events.slice(0, numberOfEvents), 
            locations: extractLocations(events) 
          });
        }
      } else {
        if (this.mount) {
          this.setState({
            events: events.slice(0, numberOfEvents),
            location: extractLocations(events)
          });
        }
      }
    });
  }  

  componentWillUnmount() {
    this.mounted = false;
  }

  // Method that changes the events state
  updateEvents = (location) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
        events :
        events.filter((event) => event.location === location);
        const { numberOfEvents } = this.state;
      this.setState({
        events: locationEvents.slice(0, numberOfEvents)
      });
    });
  }

  updateNumberOfEvents = (eventCount) => {
    const { currentLocation } = this.state;
    this.setState({
      numberOfEvents: eventCount
    });
    this.updateEvents(currentLocation, eventCount);
  }


  render() {
    return (
      // This displays all the components within the App component
      <div className="App">
         
         {/* Pass the "locations" and "updateEvents" to CitySearch as a prop  */}
        <CitySearch 
              locations={this.state.locations} 
              updateEvents={this.updateEvents} 
        />
        
        <NumberOfEvents 
              numberOfEvents={this.state.numberOfEvents} 
              updateNumberOfEvents={this.updateNumberOfEvents}  
        />
        
        {/* Pass the state to EventList as a prop of events */}
        <EventList events={this.state.events} /> 
       
      </div>
    );
  } 
}

export default App;


