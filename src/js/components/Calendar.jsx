import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import events from '../../../test_data/player_events.js';

BigCalendar.momentLocalizer(moment);

export default class Calendar extends React.Component {
  render() {
    return (
      <div className="mainCalendar" style={{height: 550}}>
        <BigCalendar
          selectable
          events={this.props.events}
          defaultView='week'
          min={new Date(0, 0, 0, 4)}
          max={new Date(0, 0, 0, 23)}
        />
      </div>
    );
  }
}
