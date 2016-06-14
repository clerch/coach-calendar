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
      queryInterface.bulkInsert('Coaches', [
        { name: "coach1", email: "coach1@example.com", password: "12345", createdAt: new Date(), updatedAt: new Date() },
        { name: "coach2", email: "coach2@example.com", password: "12345", createdAt: new Date(), updatedAt: new Date() },
        { name: "coach3", email: "coach3@example.com", password: "12345", createdAt: new Date(), updatedAt: new Date() },
        { name: "coach4", email: "coach4@example.com", password: "12345", createdAt: new Date(), updatedAt: new Date() },
        { name: "coach5", email: "coach5@example.com", password: "12345", createdAt: new Date(), updatedAt: new Date() },
        { name: "coach6", email: "coach6@example.com", password: "12345", createdAt: new Date(), updatedAt: new Date() },
        { name: "coach7", email: "coach7@example.com", password: "12345", createdAt: new Date(), updatedAt: new Date() },
        { name: "coach8", email: "coach8@example.com", password: "12345", createdAt: new Date(), updatedAt: new Date() },
        { name: "coach9", email: "coach9@example.com", password: "12345", createdAt: new Date(), updatedAt: new Date() },
        { name: "coach10", email: "coach10@example.com", password: "12345", createdAt: new Date(), updatedAt: new Date() },
        { name: "coach11", email: "coach11@example.com", password: "12345", createdAt: new Date(), updatedAt: new Date() },
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
