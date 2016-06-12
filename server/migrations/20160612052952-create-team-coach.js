'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('TeamCoaches', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      team_id: {
        type: Sequelize.INTEGER,
        references: 'teams',
        referencesKey: 'id'
      },
      coach_id: {
        type: Sequelize.INTEGER,
        references: 'coaches',
        referencesKey: 'id'
      },
      coach_role_id: {
        type: Sequelize.INTEGER,
        references: 'coachroles',
        referencesKey: 'id'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('TeamCoaches');
  }
};