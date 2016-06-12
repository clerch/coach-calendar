'use strict';
module.exports = function(sequelize, DataTypes) {
  var Resource = sequelize.define('Resources', {
    team_id: DataTypes.INTEGER,
    resource_type: DataTypes.STRING,
    content: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Resource;
};