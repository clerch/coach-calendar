var express = require('express');
var router = express.Router();

//this is where you will add more controllers
var homeController = require('./controllers/homeController');
var playerController = require('./controllers/playerController');
var testController = require('./controllers/testController');

router.get('/', homeController.index);
router.get('/player', playerController.index);
router.get('/player/:id', playerController.read);
router.get('/test', testController.index);

module.exports = router;
