import React, { Component } from "react";

class Event extends Component {
  render() {
    return (
      <div>
        <p className="summary"></p>
        <p className="start-date"></p>
        <p className="location"></p>
        <p className="description"></p>
        <p className="show-details-btn"></p>
        <p className="hide-details-btn"></p>
      </div>
    );
  }
}
export default Event;