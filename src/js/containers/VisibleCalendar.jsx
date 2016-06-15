import { connect } from 'react-redux'
import gEvents from '../../../test_data/google_events.json';
import Calendar from '../components/Calendar.jsx'

var googleEvents = gEvents.map((x) => {
  return {
    start: new Date(x.start),
    end: new Date(x.end),
    player: parseInt(x.player)
  }
});
function mapStateToProps(state) {
  return {
    // events: state.playerSchedule === null ?
    // // All player schedules displayed when activePlayer is null
    // googleEvents :
    // // Otherwise it shows the activePlayer's schedule
    // googleEvents.filter((x) => x.player === state.playerSchedule)
    events: state.teamEvents
  }
}

const VisibleCalendar = connect(
  mapStateToProps
)(Calendar)

export default VisibleCalendar
