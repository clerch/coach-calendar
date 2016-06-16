var db = require('../models/');


module.exports = {
  index: function(req, res, next) {
    res.send('respond with a resource');
  },
  read: function(req, res, next){
    db.Teams.findById(parseInt(req.params.id,10)).then(function(team) {
      team.getPlayers().then(function(players) {
          var team_players = [];
          


            res.render('player', { 'player': player, 'team': team, 'coach': coach});  
          });
      });
    });
  }
};