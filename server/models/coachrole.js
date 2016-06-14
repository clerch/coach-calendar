'use strict';
module.exports = function(sequelize, DataTypes) {
  var CoachRole = sequelize.define('CoachRoles', {
    role: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        CoachRole.hasMany(models.TeamCoach, {foreignKey: 'coach_role_id'});
      }
    }
  });
  return CoachRole;
};