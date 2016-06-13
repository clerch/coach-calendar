'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return [
      queryInterface.bulkInsert('TeamPlayers', [
        { team_id: 1, player_id: 1, player_role_id: 1, createdAt: new Date(), updatedAt: new Date() },
        { team_id: 1, player_id: 2, player_role_id: 2, createdAt: new Date(), updatedAt: new Date() },
        { team_id: 1, player_id: 3, player_role_id: 3, createdAt: new Date(), updatedAt: new Date() },
        { team_id: 1, player_id: 4, player_role_id: 4, createdAt: new Date(), updatedAt: new Date() },
        { team_id: 1, player_id: 5, player_role_id: 5, createdAt: new Date(), updatedAt: new Date() },
        { team_id: 1, player_id: 6, player_role_id: 6, createdAt: new Date(), updatedAt: new Date() },
        { team_id: 2, player_id: 1, player_role_id: 1, createdAt: new Date(), updatedAt: new Date() },
        { team_id: 2, player_id: 2, player_role_id: 2, createdAt: new Date(), updatedAt: new Date() },
        { team_id: 2, player_id: 3, player_role_id: 3, createdAt: new Date(), updatedAt: new Date() },
        { team_id: 2, player_id: 4, player_role_id: 4, createdAt: new Date(), updatedAt: new Date() },
        { team_id: 3, player_id: 7, player_role_id: 5, createdAt: new Date(), updatedAt: new Date() },
        { team_id: 3, player_id: 8, player_role_id: 6, createdAt: new Date(), updatedAt: new Date() },
      ])
    ];
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
