import React, { Component } from "react";

class Event extends Component {
  render() {
    let event = this.props.event;

    return (
      <div>
        <p className="summary">{event.summary}</p>
        <p className="timeZone">{event.timeZone}</p>
        <p className="dateTime">{event.dateTime}</p>
        <p className="location">{event.location}</p>
        <p className="description">{event.description}</p>
        <p className="show-details-btn"></p>
        <p className="hide-details-btn"></p>
      </div>
    );
  }
}
export default Event;