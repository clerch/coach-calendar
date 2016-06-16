import React from 'react';
import { connect } from 'react-redux'
import { getPlayers } from '../actions/index'
import PlayerList from '../components/player-box/PlayerList.jsx';

class PlayerBox extends React.Component {
  componentWillMount() {
    fetch('http://localhost:3000/test', {method: 'GET'})
      .then(function(res) {
        return res.json();
      })
      .then(function(players) {
        this.props.dispatch(getPlayers(players))
      }.bind(this))
  }
  render () {
    return(
      <div className="playerBox">
        <PlayerList data={this.props.data}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.coach.playerList
  }
}

export default connect(
  mapStateToProps
)(PlayerBox)
