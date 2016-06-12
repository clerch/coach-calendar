'use strict';
module.exports = function(sequelize, DataTypes) {
  var Team = sequelize.define('Teams', {
    coach_id: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Team.belongsToMany(models.Coach, { through: 'TeamCoach', foreignKey: 'team_id', otherKey: 'coach_id'} );
        Team.belongsToMany(models.Player, { through: 'TeamPlayer', foreignKey: 'team_id', otherKey: 'player_id'} );
      }
    }
  }); 
  return Team;
};