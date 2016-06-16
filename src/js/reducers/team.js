const initialState = {
  playerSchedule: null,
  playerEvents: [],
  teamEvents: [],
  visibleEvents: {
    team: [],
    player: []
  },
  playerList: []
}

export default function team(state = initialState, action) {
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
    case 'TOGGLE_TEAM_EVENTS':
      return Object.assign({}, state, {
        visibleEvents: {
          team: state.visibleEvents.team.length === 0
            ? state.teamEvents
            : [],
          player: state.visibleEvents.player
        }
      })
    case 'TOGGLE_PLAYER_EVENTS':
      var visiblePlayers;
      if (state.visibleEvents.player.length === 0) {
          state.playerSchedule === null
            ? visiblePlayers = state.playerEvents
              : visiblePlayers = state.playerEvents.filter((x) => x.player === state.playerSchedule)
        } else {
          visiblePlayers = []
        }
      return Object.assign({}, state, {
        visibleEvents: {
          team: state.visibleEvents.team,
          player: visiblePlayers
        }
      })
    case 'GET_PLAYERS':
      return Object.assign({}, state, {
        playerList: state.playerList.concat(action.players)
      })
    case 'CLEAR_PLAYERS':
      return Object.assign({}, state, {
        playerList: []
      })
      default:
        return state
  }
}
