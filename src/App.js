import React, { Component } from 'react';
import './nprogress.css';
import './App.css';
import EventList from './EventList'; 
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { WarningAlert } from './Alert';
import { getEvents, extractLocations, checkToken, getAccessToken } from './api';
import WelcomeScreen from './WelcomeScreen';


class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    currentLocation: 'all',
    infoText: '',
    // This state "showWelcomeScreen" will be used as a ﬂag to determine when to render the welcome screen as follows: 
    //  true will mean “show the welcome screen,” 
    //  false will mean “hide it to show the other components,” 
    //  undeﬁned will be used to render an empty div until the state gets either true or false
    showWelcomeScreen: undefined,
  }

  // to load events when the app loads - to make the API call and save inital data to state (?)
  componentDidMount() {
    const { numberOfEvents } = this.state;
    this.mounted = true;
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        this.setState({ events, locations: extractLocations(events) });
        if(!navigator.onLine) {
          if (this.mounted) {
            this.setState({ 
              infoText: '⚠️ Warning: No internet connection. Events may not be up to date', 
              events: events.slice(0, numberOfEvents), 
              locations: extractLocations(events) 
            });
          }
        } else {
          if (this.mounted) {
            this.setState({ 
              events: events.slice(0, numberOfEvents), 
              locations: extractLocations(events) 
            });
          }
        }
      });
    }
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


  // -------- RENDER --------
  render() {
    
    // Adding a conditional that renders an empty "div" element
    if (this.state.showWelcomeScreen === undefined)
      return <div className="App" />

    return (
      // This displays all the components within the App component
      <div className="App">

        <WarningAlert className="WarningAlert" text={this.state.infoText}/>
         
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

        <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen}
          getAccessToken={() => { getAccessToken() }} 
        />
       
      </div>
    );
  } 
}

export default App;


