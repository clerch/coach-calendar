var db = require('../models/');


module.exports = {
  index: function(req, res, next) {
    res.send('respond with a resource');
  },
  read: function(req, res, next){
    db.Players.findById(parseInt(req.params.id,10)).then(function(player) {
      player.getTeams().then(function(teams) {
        if (teams.length === 0){
          // freak out here... shouldn't every player be on some team?
        } else {
          var team = teams[0];

          team.getCoaches().then(function(coaches) {//this is where you're going to ask for coach and roles
            console.log("got my coaches, wigga");
            var coachpromises = coaches.forEach(function(coach){
              console.log("about to get a coachRole");
              coach.getCoachRoles().then(function(coaches_roles){
                console.log("here is a coach_role");
                console.log(coaches_roles);
              });
              console.log("asked for coach roles, they're pending");
            });

            Promise.all(coachpromises).then(function(coaches_roles){
              // now we have player, player's team, list of coaches, and a list of lists of coach roles
              console.log("all them promises be resolvedededededed");
              if (coaches.length !== coaches_roles.length){
                console.log("ERROR: what in the sam hell is happening here, coaches.length = " + coaches.length +
                  " and coaches_roles.length = " + coaches_roles.length);
              }
              var pretty_coaches = [];
              coaches.forEach(function(elt, idx){
                pretty_coaches.append({'coach': elt, 'roles': coaches_roles[idx]});
              });
              console.log("pretty coaches: " + pretty_coaches);
              res.render('player', { 'player': player, 'team': team, 'coaches': coaches});

            });
          });
        }
      });
    });
  }
};


            // var coachpromises = coaches.map(function(coach){
            //   console.log(coach);
            //   coach.getCoachRoles().then(function(roles){
            //     console.log("this is where roles start");
            //     console.log(roles);
            //   });
            // });