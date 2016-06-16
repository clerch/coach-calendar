'use strict';
module.exports = function(sequelize, DataTypes) {
  var Coach = sequelize.define('Coaches', {
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
        Coach.belongsToMany(models.Teams, { through: 'TeamCoach', foreignKey: 'coach_id', otherKey: 'team_id'} );
      }
    }
  });
  return Coach;
};