var express = require('express');
var router = express.Router();

//this is where you will add more controllers
var homeController = require('./controllers/homeController');
var playerController = require('./controllers/playerController');

router.get('/', homeController.index);
router.get('/player', playerController.index);

module.exports = router;