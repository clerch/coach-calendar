import React from 'react';
import Player from './Player.jsx';

export default class PlayerList extends React.Component {
  render () {
    var playerNodes = this.props.data.map(function(player) {
      return (
        <Player key={player.key}>
          {player.name}
        </Player>
      );
    });
    return(
      <ul className="playerList">
      {playerNodes}
      </ul>
    );
  }
}
