export function showPlayerSchedule(id) {
  return {
    type: 'SHOW_PLAYER_SCHEDULE',
    id: id
  }
}

export function addTeamEvent(event) {
  var newEvent = {
    start: event.start,
    end: event.end,
    player: 100
  }
  return {
    type: 'ADD_TEAM_EVENT',
    event: newEvent
  }
}

export function getPlayers(players) {
  return {
    type: 'GET_PLAYERS',
    players: players
  }
}
