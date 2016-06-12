'use strict';
module.exports = function(sequelize, DataTypes) {
  var Coach = sequelize.define('Coaches', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    published: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Coach.belongsToMany(models.Team, { through: 'TeamCoach', foreignKey: 'coach_id'} );

      }
    }
  });
  return Coach;
};