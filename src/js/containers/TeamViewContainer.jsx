import React from 'react';
import BigCalendarContainer from '../containers/BigCalendarContainer.jsx';
import PlayerListContainer from '../containers/PlayerListContainer.jsx';
import CalendarControlPanelContainer from '../containers/CalendarControlPanelContainer.jsx';
import NavBarContainer from '../containers/NavBarContainer.jsx';

export default class TeamViewContainer extends React.Component {
  render () {
    return(
      <div>
        <NavBarContainer />
        <PlayerListContainer />
        <BigCalendarContainer />
        <CalendarControlPanelContainer />
      </div>
    );
  }
}
