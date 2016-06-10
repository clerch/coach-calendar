var express = require('express');
var router = express.Router();

//this is where you will add more controllers
var homeController = require('./controllers/homeController');
var usersController = require('./controllers/usersController');

router.get('/', homeController.index);
router.get('/users', usersController.index);

module.exports = router;