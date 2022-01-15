import React, { Component } from 'react';

class Event extends Component {
  state = {
    showDetails: null,
  }

  changeShow(showDetails){
    if(showDetails){
      this.setState({
        showDetails: false
      })
    }
    if(!showDetails){
      this.setState({
        showDetails: true
      })
    }
  }

  render() {
    let { showDetails } = this.state;
    const { event } = this.props;
    return (
      <div className="event event-container">
       
        <h1 className="summary">{ event.summary }</h1>
        <p className="dateTime">{ event.dateTime }</p>
        <p className="location">{ event.location }</p>
        
        {showDetails
          ? <div className="event__Details additional-info">
            <h2>About Event</h2>
            <a href={ event.htmlLink } className="event-link">See details on Google calendar</a>
            <p className="description">{ event.description }</p>
          </div>
          : null
        }

        {showDetails
          ? <button 
                  className="details-btn btn-text"  
                  onClick={() => this.changeShow(showDetails)}
            >
              Hide Details
            </button>

          : <button 
                  className="details-btn btn-text"  
                  onClick={() => this.changeShow(showDetails)}
            >
              Show Details
            </button>
        }

      </div> 
      
    )
  }
}

export default Event;








