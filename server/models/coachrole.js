'use strict';
module.exports = function(sequelize, DataTypes) {
  var CoachRole = sequelize.define('CoachRoles', {
    coach_role_id: DataTypes.INTEGER,
    role: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        CoachRole.belongsTo(models.TeamCoach, {foreignKey: coach_role_id});
      }
    }
  });
  return CoachRole;
};