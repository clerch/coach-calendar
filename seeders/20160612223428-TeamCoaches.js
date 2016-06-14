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
      queryInterface.bulkInsert('TeamCoaches', [
        { team_id: 1, coach_id: 1, coach_role_id: 1, createdAt: new Date(), updatedAt: new Date() },
        { team_id: 1, coach_id: 2, coach_role_id: 2, createdAt: new Date(), updatedAt: new Date() },
        { team_id: 2, coach_id: 3, coach_role_id: 6, createdAt: new Date(), updatedAt: new Date() },
        { team_id: 2, coach_id: 4, coach_role_id: 1, createdAt: new Date(), updatedAt: new Date() },
        { team_id: 1, coach_id: 5, coach_role_id: 5, createdAt: new Date(), updatedAt: new Date() },
        { team_id: 1, coach_id: 6, coach_role_id: 1, createdAt: new Date(), updatedAt: new Date() },
        { team_id: 1, coach_id: 7, coach_role_id: 2, createdAt: new Date(), updatedAt: new Date() },
        { team_id: 2, coach_id: 8, coach_role_id: 6, createdAt: new Date(), updatedAt: new Date() },
        { team_id: 2, coach_id: 9, coach_role_id: 4, createdAt: new Date(), updatedAt: new Date() },
        { team_id: 1, coach_id: 10, coach_role_id: 5, createdAt: new Date(), updatedAt: new Date() },
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
