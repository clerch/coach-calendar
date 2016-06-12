'use strict';
module.exports = function(sequelize, DataTypes) {
  var Player = sequelize.define('Players', {
    team_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Player.belongsToMany(models.Team, { through: 'TeamPlayer', foreignKey: 'player_id', otherKey: 'team_id'} );
        Player.hasMany(models.Grade);
      }
    }
  });
  return Player;
};