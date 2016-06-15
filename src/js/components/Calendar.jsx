import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import { connect } from 'react-redux'
import { addTeamEvent } from '../actions/index'

BigCalendar.momentLocalizer(moment);

class Calendar extends React.Component {
  render() {
    return (
      <div className="mainCalendar" style={{height: 550}}>
        <BigCalendar
          selectable
          events={this.props.events}
          onSelectEvent={event => console.log(event.start)}
          onSelectSlot={function(slotInfo) {
            this.props.dispatch(addTeamEvent(slotInfo))
          }.bind(this)}
          defaultView='week'
          min={new Date(0, 0, 0, 4)}
          max={new Date(0, 0, 0, 23)}
        />
      </div>
    );
  }
}
export default connect()(Calendar)
