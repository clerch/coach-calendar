'use strict';
module.exports = function(sequelize, DataTypes) {
  var TeamPlayer = sequelize.define('TeamPlayer', {
    team_id: DataTypes.INTEGER,
    player_id: DataTypes.INTEGER,
    position: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models.Team.belongsToMany(models.Player,{as:'Players', through:{model:TeamPlayer, unique: false},foreignKey:'team_id'});
        models.Player.belongsToMany(models.Teams,{as:'Teams', through:{model:TeamPlayer, unique: false},foreignKey:'player_id'});
        models.PlayerRole.hasMany(models.PlayerRole);

      }
    }
  });
  return TeamPlayer;
};