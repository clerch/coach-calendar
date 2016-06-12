'use strict';
module.exports = function(sequelize, DataTypes) {
  var PlayerRole = sequelize.define('PlayerRoles', {
    player_role_id: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        PlayerRole.hasMany(models.TeamPlayer, {foreignKey: player_role_id});

      }
    }
  });
  return PlayerRole;
};