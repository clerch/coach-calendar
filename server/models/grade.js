'use strict';
module.exports = function(sequelize, DataTypes) {
  var Grade = sequelize.define('Grades', {
    player_id: DataTypes.INTEGER,
    course: DataTypes.STRING,
    type: DataTypes.STRING,
    mark: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Grade.belongsTo(models.Players, {foreignKey: 'player_id'})
      }
    }
  });
  return Grade;
};