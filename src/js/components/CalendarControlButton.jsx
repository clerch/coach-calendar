import React from 'react'

export default class CalendarControlButton extends React.Component {
  render() {
    return(
      <div
        className="calendarControlButton"
        onClick={this.props.toggleEvents}
      >{this.props.children}
      </div>
    )
  }
}
