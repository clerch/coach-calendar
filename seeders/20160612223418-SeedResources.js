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
      queryInterface.bulkInsert('Resources', [
        { team_id: 1, resource_type: "training schedule", content: "lunges", createdAt: new Date(), updatedAt: new Date() },
        { team_id: 1, resource_type: "workout schedule", content: "swim 1000m", createdAt: new Date(), updatedAt: new Date() },
        { team_id: 2, resource_type: "workout schedule", content: "early morning run", createdAt: new Date(), updatedAt: new Date() },
        { team_id: 2, resource_type: "workout schedule", content: "100 pushups", createdAt: new Date(), updatedAt: new Date() },
        { team_id: 3, resource_type: "workout schedule", content: "100 situps", createdAt: new Date(), updatedAt: new Date() },
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
