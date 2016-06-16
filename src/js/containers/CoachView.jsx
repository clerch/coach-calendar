import React from 'react';
import Calendar from '../containers/Calendar.jsx';
import PlayerBox from '../containers/PlayerBox.jsx';

export default class CoachView extends React.Component {
  render () {
    return(
      <div>
        <PlayerBox />
        <Calendar />
      </div>
    );
  }
}
