var db = require('../models/');


module.exports = {
  index: function(req, res, next) {
    res.send('respond with a resource');
  },
  read: function(req, res, next){
    db.Players.findById(parseInt(req.params.id,10)).then(function(player) {
      player.getTeams().then(function(teams) {
        res.render('player', { 'player': player, 'teams': teams});

        // teams.forEach(function(team) {
        //   team.getCoaches().then(function(coaches) {
        //     team.coach = coaches[0];
        //    p= team.coaches.name
        //   });
        // });

      });
    })
  }

};