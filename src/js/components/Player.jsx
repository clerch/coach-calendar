import React from 'react'
import { connect } from 'react-redux'
import { showPlayerSchedule } from '../actions/index'
import { Link } from 'react-router'

class Player extends React.Component {
  render () {
    return(
      <li
        className="playerName"
        onMouseEnter={
          function() {
            this.props.dispatch(showPlayerSchedule(this.props.calId))
          }.bind(this)
        }
        onMouseLeave={
          function() {
            this.props.dispatch(showPlayerSchedule(null))
          }.bind(this)
        }
      >
        <Link to={`/players`}>{this.props.children}
      </Link></li>
    );
  }
}
export default connect()(Player)
