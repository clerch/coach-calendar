import React from 'react'
import CalendarControlButton from './CalendarControlButton.jsx'

export default class CalendarControlPanel extends React.Component {
  render() {
    return(
      <div className="calendarControlPanel">
        <CalendarControlButton>{this.props.data}</CalendarControlButton>
        <CalendarControlButton />
      </div>
    )
  }
}
