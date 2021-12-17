import React, { Component } from 'react';
import './App.css';
import EventList from './EventList'; // This imports the EventList component into the App component.

class App extends Component {
  render() {
    return (
      <div className="App">
        // This displays the EventList component within the App div
        <EventList /> 
      </div>
    );
  } 
}

export default App;


