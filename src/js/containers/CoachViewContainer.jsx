import React from 'react';
import BigCalendarContainer from '../containers/BigCalendarContainer.jsx';
import PlayerListContainer from '../containers/PlayerListContainer.jsx';
import CalendarControlPanelContainer from '../containers/CalendarControlPanelContainer.jsx';

export default class CoachViewContainer extends React.Component {
  render () {
    return(
      <div>
        <PlayerListContainer />
        <BigCalendarContainer />
        <CalendarControlPanelContainer />
      </div>
    );
  }
}
