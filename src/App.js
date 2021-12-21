import React, { Component } from 'react';
import './App.css';
import EventList from './EventList'; // This imports the EventList component into the App component.
import CitySearch from './CitySearch';

class App extends Component {
  render() {
    return (
      // This displays all the components within the App div
      <div className="App">
        <CitySearch />
        <EventList /> 
      </div>
    );
  } 
}

export default App;


