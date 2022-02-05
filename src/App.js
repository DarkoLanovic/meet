import React, { Component } from 'react';
import './nprogress.css';
import './App.css';
import EventList from './EventList'; 
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { WarningAlert } from './Alert';
import { getEvents, extractLocations, checkToken, getAccessToken } from './api';
import WelcomeScreen from './WelcomeScreen';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


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
   async componentDidMount() {
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

  getData = () => {
    const {locations, events} = this.state;
    const data = locations.map((location)=>{
      const number = events.filter((event) => event.location === location).length
      const city = location.split(', ').shift()
      return {city, number};
    })
    return data;
  };


  // -------- RENDER --------
  render() {
    
    // Adding a conditional that renders an empty "div" element
    if (this.state.showWelcomeScreen === undefined)
      return <div className="App" />

    return (
      // This displays all the components within the App component
      <div className="App">

        <WarningAlert className="WarningAlert" text={this.state.infoText}/>

        <h1>Meet Up Your Opportunities </h1>
        <hr/>
         
         {/* Pass the "locations" and "updateEvents" to CitySearch as a prop  */}
        <CitySearch 
          locations={this.state.locations} 
          updateEvents={this.updateEvents} 
        />
        
        <NumberOfEvents 
          numberOfEvents={this.state.numberOfEvents} 
          updateNumberOfEvents={this.updateNumberOfEvents}  
        />

        <h4>Check the Events you may like!</h4>

        <div className="data-vis-wrapper">
          <ResponsiveContainer height={400} >
            <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
              <CartesianGrid />
              <XAxis type="category" dataKey="city" />
              <YAxis type="number" dataKey="number" allowDecimals={false} name="number of events" />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Scatter data={this.getData()} fill="#8884d8" />
            </ScatterChart>
          </ResponsiveContainer>
          <EventGenre events={events} />
        </div>
        
        {/* Pass the state to EventList as a prop of events */}
        <EventList events={this.state.events} /> 

        <WelcomeScreen 
          showWelcomeScreen={this.state.showWelcomeScreen}
          getAccessToken={() => { getAccessToken() }} 
        />
       
      </div>
    );
  } 
}

export default App;


