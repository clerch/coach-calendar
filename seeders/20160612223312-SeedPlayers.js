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
      queryInterface.bulkInsert('Players', [
        { name: "player1", email: "player1@example.com", password: "12345", access_token: "askj35895kjadf", refresh_token: "fjdklsa384934dskfj", token_expiry_date: new Date(), createdAt: new Date(), updatedAt: new Date()},
        { name: "player2", email: "player2@example.com", password: "12345", access_token: "askj35895kjadf", refresh_token: "fjdklsa384934dskfj", token_expiry_date: new Date(), createdAt: new Date(), updatedAt: new Date()},
        { name: "player3", email: "player3@example.com", password: "12345", access_token: "askj35895kjadf", refresh_token: "fjdklsa384934dskfj", token_expiry_date: new Date(), createdAt: new Date(), updatedAt: new Date()},
        { name: "player4", email: "player4@example.com", password: "12345", access_token: "askj35895kjadf", refresh_token: "fjdklsa384934dskfj", token_expiry_date: new Date(), createdAt: new Date(), updatedAt: new Date()},
        { name: "player5", email: "player5@example.com", password: "12345", access_token: "askj35895kjadf", refresh_token: "fjdklsa384934dskfj", token_expiry_date: new Date(), createdAt: new Date(), updatedAt: new Date()},
        { name: "player6", email: "player6@example.com", password: "12345", access_token: "askj35895kjadf", refresh_token: "fjdklsa384934dskfj", token_expiry_date: new Date(), createdAt: new Date(), updatedAt: new Date()},
        { name: "player7", email: "player7@example.com", password: "12345", access_token: "askj35895kjadf", refresh_token: "fjdklsa384934dskfj", token_expiry_date: new Date(), createdAt: new Date(), updatedAt: new Date()},
        { name: "player8", email: "player8@example.com", password: "12345", access_token: "askj35895kjadf", refresh_token: "fjdklsa384934dskfj", token_expiry_date: new Date(), createdAt: new Date(), updatedAt: new Date()},
        { name: "player9", email: "player9@example.com", password: "12345", access_token: "askj35895kjadf", refresh_token: "fjdklsa384934dskfj", token_expiry_date: new Date(), createdAt: new Date(), updatedAt: new Date()},
        { name: "player10", email: "player10@example.com", password: "12345", access_token: "askj35895kjadf", refresh_token: "fjdklsa384934dskfj", token_expiry_date: new Date(), createdAt: new Date(), updatedAt: new Date()},
        { name: "player11", email: "player11@example.com", password: "12345", access_token: "askj35895kjadf", refresh_token: "fjdklsa384934dskfj", token_expiry_date: new Date(), createdAt: new Date(), updatedAt: new Date()},
        { name: "player12", email: "player12@example.com", password: "12345", access_token: "askj35895kjadf", refresh_token: "fjdklsa384934dskfj", token_expiry_date: new Date(), createdAt: new Date(), updatedAt: new Date()},
        { name: "player13", email: "player13@example.com", password: "12345", access_token: "askj35895kjadf", refresh_token: "fjdklsa384934dskfj", token_expiry_date: new Date(), createdAt: new Date(), updatedAt: new Date()},
        { name: "player14", email: "player14@example.com", password: "12345", access_token: "askj35895kjadf", refresh_token: "fjdklsa384934dskfj", token_expiry_date: new Date(), createdAt: new Date(), updatedAt: new Date()},
        { name: "player15", email: "player15@example.com", password: "12345", access_token: "askj35895kjadf", refresh_token: "fjdklsa384934dskfj", token_expiry_date: new Date(), createdAt: new Date(), updatedAt: new Date()},
        { name: "player16", email: "player16@example.com", password: "12345", access_token: "askj35895kjadf", refresh_token: "fjdklsa384934dskfj", token_expiry_date: new Date(), createdAt: new Date(), updatedAt: new Date()},
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
