import React, { Component } from 'react';
import './App.css';
import EventList from './EventList'; // This imports the EventList component into the App component.
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';

class App extends Component {
  render() {
    return (
      // This displays all the components within the App div
      <div className="App">
        <CitySearch />
        <EventList /> 
        <NumberOfEvents />
      </div>
    );
  } 
}
``
export default App;


