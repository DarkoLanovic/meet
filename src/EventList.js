import React, { Component } from 'react';
import Event from './Event';

class EventList extends Component {
    // Rendering a list of events inside the EventList's render() method in “src/EventList.js” using the events prop
  render() {
    const { events } = this.props;
    return (
      <ul className="EventList">
        {this.props.events.map((event) => 
          <li key={event.id}> 
            <Event event={event} />
          </li>
        )}
      </ul>
    );      
  }
}

export default EventList;