const initialState = {
  playerSchedule: null,
  teamEvents: [],
  playerList: []
}

export default function coach(state = initialState, action) {
  switch(action.type) {
    case 'SHOW_PLAYER_SCHEDULE':
    console.log(state)
      return Object.assign({}, state, {
        playerSchedule: action.id
      })
    case 'ADD_TEAM_EVENT':
      return Object.assign({}, state, {
        teamEvents: state.teamEvents.concat(action.event)
      })
    case 'GET_PLAYERS':
      return Object.assign({}, state, {
        playerList: state.playerList.concat(action.players)
      })
      default:
        return state
  }
}
