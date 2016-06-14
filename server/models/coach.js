'use strict';
module.exports = function(sequelize, DataTypes) {
  var Coach = sequelize.define('Coaches', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Coach.belongsToMany(models.Teams, { through: 'TeamCoach', foreignKey: 'coach_id', otherKey: 'team_id'} );
        Coach.belongsToMany(models.CoachRoles, { through: 'TeamCoach', foreignKey: 'coach_id', otherKey: 'coach_role_id'} );
      }
    }
  });
  return Coach;
};