const initialState = {
  playerSchedule: null,
  teamEvents: []
}

export default function appReducer(state = initialState, action) {
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
      default:
        return state
  }
}
