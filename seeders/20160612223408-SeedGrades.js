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
      queryInterface.bulkInsert('Grades', [
        { player_id: 1, course: "Math" , type: "Assignment", mark: 78, createdAt: new Date(), updatedAt: new Date() },
        { player_id: 6, course: "Physics", type: "Midterm", mark: 81, createdAt: new Date(), updatedAt: new Date() },
        { player_id: 5, course: "Science", type: "Final", mark: 56, createdAt: new Date(), updatedAt: new Date() },
        { player_id: 4, course: "French", type: "Assignment", mark: 43, createdAt: new Date(), updatedAt: new Date() },
        { player_id: 3, course: "Geography", type: "Final", mark: 99, createdAt: new Date(), updatedAt: new Date() },
        { player_id: 2, course: "Music", type: "Final", mark: 33, createdAt: new Date(), updatedAt: new Date() },
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
