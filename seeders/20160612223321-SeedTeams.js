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
      queryInterface.bulkInsert('Teams', [
        { name: "team1", college: "college1", createdAt: new Date(), updatedAt: new Date() },
        { name: "team2", college: "college1", createdAt: new Date(), updatedAt: new Date() },
        { name: "team3", college: "college1", createdAt: new Date(), updatedAt: new Date() },
        { name: "team4", college: "college1", createdAt: new Date(), updatedAt: new Date() },
        { name: "team5", college: "college2", createdAt: new Date(), updatedAt: new Date() },
        { name: "team6", college: "college2", createdAt: new Date(), updatedAt: new Date() },
        { name: "team7", college: "college2", createdAt: new Date(), updatedAt: new Date() },
        { name: "team8", college: "college2", createdAt: new Date(), updatedAt: new Date() },
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
