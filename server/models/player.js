'use strict';
module.exports = function(sequelize, DataTypes) {
  var Player = sequelize.define('Players', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    access_token: DataTypes.STRING,
    refresh_token: DataTypes.STRING,
    token_expiry_date: DataTypes.DATEONLY
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Player.belongsToMany(models.Teams, { through: 'TeamPlayer', foreignKey: 'player_id', otherKey: 'team_id'} );
        Player.belongsToMany(models.PlayerRoles, { through: 'TeamPlayer', foreignKey: 'player_id', otherKey: 'player_role_id'} );

        Player.hasMany(models.Grades);
      }
    }
  });
  return Player;  
};