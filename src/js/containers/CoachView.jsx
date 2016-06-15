import React from 'react';
import Calendar from '../containers/Calendar.jsx';
import PlayerBox from '../components/player-box/PlayerBox.jsx';

var players = [{ id: 0, calId: 0, name: 'Billy S.' }, { id: 1, calId: 1, name: 'Robert D.' }, { id: 2, calId: 2, name: 'Doug R.' }, { id: 3, calId: 3, name: 'Jonny B.' }, { id: 4, calId: 4, name: 'Tommy R.' }, { id: 5, calId: 5, name: 'Mark S.' }, { id: 6, calId: 6, name:
               'Sam T.' }, { id: 7, calId: 7, name: 'Jack N.' }, { id: 8, calId: 8, name: 'Rodney T.' }, { id: 9, calId: 9, name: 'Paul R.' }, { id: 10, calId: 10, name: 'Chris V.' }, { id: 11, calId: 11, name: 'Peter D.' }];

export default class CoachView extends React.Component {
  render () {
    return(
      <div>
        <PlayerBox data={players} />
        <Calendar />
      </div>
    );
  }
}
