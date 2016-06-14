import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import events from '../events';

BigCalendar.momentLocalizer(moment);

export default class Calendar extends React.Component {
  render() {
    return (
      <div style={{height: 550}}>
        <BigCalendar
          selectable
          events={events}
          defaultView='week'
          min={new Date(0, 0, 0, 4)}
          max={new Date(0, 0, 0, 23)}
        />
      </div>
    );
  }
}
