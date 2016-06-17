import React from 'react';
import BigCalendar from 'react-big-calendar';
import gEvents from '../../../test_data/google_events.json';
import moment from 'moment';
import { connect } from 'react-redux'
import { addTeamEvent, getPlayerCalendars } from '../actions/index'

class Calendar extends React.Component {
  componentWillMount() {
    BigCalendar.momentLocalizer(moment);
    this.props.dispatch(getPlayerCalendars())
  }

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

// // TEMPORARY
// var googleEvents = gEvents.map((x) => {
//   return {
//     start: new Date(x.start),
//     end: new Date(x.end),
//     player: parseInt(x.player)
//   }
// });

function mapStateToProps(state) {
  return {
    events: state.team.visibleEvents.team.concat(state.team.visibleEvents.player)
  }
}

export default connect(
  mapStateToProps, null
)(Calendar)
