const initialState = {
  playerSchedule: null
}

export default function appReducer(state = initialState, action) {
  switch(action.type) {
    case 'SHOW_PLAYER_SCHEDULE':
      return Object.assign({}, state, {
        playerSchedule: action.id
      })
      default:
        return state
  }
}
