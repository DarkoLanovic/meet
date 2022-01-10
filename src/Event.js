import React, { Component } from "react";

class Event extends Component {
  render() {
    return (
      <div>
        <p className="summary">{this.props.event.summary}</p>
        <p className="start-date"></p>
        <p className="location">{this.props.event.location}</p>
        <p className="description">{this.props.event.description}</p>
        <p className="show-details-btn"></p>
        <p className="hide-details-btn"></p>
      </div>
    );
  }
}
export default Event;