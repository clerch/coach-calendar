import React from 'react';
import Calendar from './Calendar.jsx';
import PlayerBox from './player-box/PlayerBox.jsx';
// import events from '../../../test_data/player_events.js';
import gEvents from '../../../test_data/google_events.json';

var players = [{ id: 0, calId: 0, name: 'Billy S.' }, { id: 1, calId: 1, name: 'Robert D.' }, { id: 2, calId: 2, name: 'Doug R.' }, { id: 3, calId: 3, name: 'Jonny B.' }, { id: 4, calId: 4, name: 'Tommy R.' }, { id: 5, calId: 5, name: 'Mark S.' }, { id: 6, calId: 6, name:
               'Sam T.' }, { id: 7, calId: 7, name: 'Jack N.' }, { id: 8, calId: 8, name: 'Rodney T.' }, { id: 9, calId: 9, name: 'Paul R.' }, { id: 10, calId: 10, name: 'Chris V.' }, { id: 11, calId: 11, name: 'Peter D.' }];

var googleEvents = gEvents.map((x) => {
  return {
    start: new Date(x.start),
    end: new Date(x.end),
    player: parseInt(x.player)
  }
});

export default class App extends React.Component {
  constructor(props) {
    super(props)
      this.state = {activePlayer: null};
  }
  render () {
    var visibleEvents =
      this.state.activePlayer === null
      // All player schedules displayed when activePlayer is null
      ? googleEvents
      // Otherwise it shows the activePlayer's schedule
      : googleEvents.filter((x) => x.player === this.state.activePlayer);
    return(
      <div>
        <PlayerBox updateId={this.setState.bind(this)} data={players} />
        <Calendar events={visibleEvents} />
      </div>
    );
  }
}
