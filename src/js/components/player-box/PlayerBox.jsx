import React from 'react';
import PlayerList from './PlayerList.jsx';

export default class Player extends React.Component {
  render () {
    return(
      <div className="playerBox">
        <PlayerList
          data={this.props.data}
        />
      </div>
    );
  }
}
