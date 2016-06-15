var db = require('../models/');


module.exports = {
  index: function(req, res, next) {
    res.send('respond with a resource');
  },
  read: function(req, res, next){
    db.Players.findById(parseInt(req.params.id,10)).then(function(player) {
      player.getTeams().then(function(teams) {
          var team = teams[0];
          team.getCoaches().then(function(coaches) {
            var coach = coaches[0];
            res.render('player', { 'player': player, 'team': team, 'coach': coach});  
          });
      });
    });
  }
};
