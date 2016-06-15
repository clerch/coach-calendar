import React from 'react';

export default class Player extends React.Component {
  render () {
    return(
      <li
        className="playerName"
        onMouseEnter={
          function() {
            this.props.passIdToBox(this.props.calId)
          }.bind(this)
        }
        onMouseLeave={
          function() {
            this.props.passIdToBox(null)
          }.bind(this)
        }
      >
        {this.props.children}
      </li>
    );
  }
}
