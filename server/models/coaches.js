'use strict';
module.exports = function(sequelize, DataTypes) {
  var Coaches = sequelize.define('Coaches', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    published: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Coaches;
};