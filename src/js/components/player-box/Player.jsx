import React from 'react';

export default class Player extends React.Component {
  render () {
    return(
      <li className="playerName">{this.props.children}</li>
    );
  }
}
