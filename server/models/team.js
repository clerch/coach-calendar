'use strict';
module.exports = function(sequelize, DataTypes) {
  var Team = sequelize.define('Teams', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Team.belongsToMany(models.Coaches, { through: 'TeamCoach', foreignKey: 'team_id', otherKey: 'coach_id'} );
        Team.belongsToMany(models.Players, { through: 'TeamPlayer', foreignKey: 'team_id', otherKey: 'player_id'} );
      }
    }
  }); 
  return Team;
};