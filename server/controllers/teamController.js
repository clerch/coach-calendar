var db = require('../models/');


module.exports = {
  index: function(req, res, next) {
    res.send('respond with a resource');
  },
  read: function(req, res, next){
    db.Teams.findById(parseInt(req.params.id,10)).then(function(team) {
      console.log(team);
      var team_players = team.findAll({
        include: [{
          model: Players,
          where: {'teamId': team.id },
          attributes: ['name', 'email']
        }]
      });
        console.log(team_players);
        res.render('player', {'team': team_players});
    });
  }
};




    //   team.getPlayers().then(function(players) {
    //       var team_players = [];
    //       var team_size = team_players.length;

    //       team_players = players.map(function(){
    //         var player = {
    //           name: player.name
    //           email: player.email
    //         };
    //         team_players.push(player);
    //         var data_response = {
    //           'team_name': team.name,
    //           'team_coach': team.coach.name,
    //           'players': team_players
    //         };
    //       }
    //         res.render('player', data_response);  
    //       });
    //   });
    // });



// Project.findAll({
//     include: [{
//         model: Task,
//         where: { state: Sequelize.col('project.state') }
//     }]
// })