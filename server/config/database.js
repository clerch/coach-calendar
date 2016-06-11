var Sequelize = require('sequelize');

// Initializes the databases
module.exports = new Sequelize('coach_development', 'coach', 'password', {
  host: 'localhost',
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }

});

