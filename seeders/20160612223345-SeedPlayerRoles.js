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
      queryInterface.bulkInsert('PlayerRoles', [
        { name: "Center", createdAt: new Date(), updatedAt: new Date() },
        { name: "Hooker", createdAt: new Date(), updatedAt: new Date() },
        { name: "Defence", createdAt: new Date(), updatedAt: new Date() },
        { name: "Point Guard", createdAt: new Date(), updatedAt: new Date() },
        { name: "Goalie", createdAt: new Date(), updatedAt: new Date() },
        { name: "Forward", createdAt: new Date(), updatedAt: new Date() },
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
