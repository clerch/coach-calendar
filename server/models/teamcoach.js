'use strict';
module.exports = function(sequelize, DataTypes) {
  var TeamCoach = sequelize.define('TeamCoach', {
    team_id: DataTypes.INTEGER,
    coach_id: DataTypes.INTEGER,
    coach_role_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        // models.Team.belongsToMany(models.Coach,{as:'Coaches', through:{model:TeamCoach, unique: false},foreignKey:'team_id', otherKey:'coach_id'});
        // models.Coach.belongsToMany(models.Team,{as:'Teams', through:{model:TeamCoach, unique: false},foreignKey:'coach_id', otherKey:'team_id'});

        //models.CoachRoles.belongsToMany(models.Team,{as:'Teams', through:{model:TeamCoach, unique: false},foreignKey:'coach_id', otherKey:'team_id'});

        //TeamCoach.belongsTo(models.CoachRoles);
      }
    }
  });
  return TeamCoach;
};