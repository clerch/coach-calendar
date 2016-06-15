import React from 'react';
import Player from './Player.jsx';

export default class PlayerList extends React.Component {
  render () {
    var playerNodes = this.props.data.map(function(player) {
      return (
        <Player
          key={player.id}
          calId={player.calId}
        >
          {player.name}
        </Player>
      );
    }.bind(this));
    return(
      <ul className="playerList">
        {playerNodes}
      </ul>
    );
  }
}
