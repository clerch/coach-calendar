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
      queryInterface.bulkInsert('CoachRoles', [
        { role: "Coach", createdAt: new Date(), updatedAt: new Date() },
        { role: "Assistant Coach", createdAt: new Date(), updatedAt: new Date() },
        { role: "Trainer", createdAt: new Date(), updatedAt: new Date() },
        { role: "Water Boy", createdAt: new Date(), updatedAt: new Date() },
        { role: "Mascot", createdAt: new Date(), updatedAt: new Date() },
        { role: "Masseuse", createdAt: new Date(), updatedAt: new Date() },
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
