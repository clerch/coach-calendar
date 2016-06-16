var express = require('express');
var router = express.Router();

//this is where you will add more controllers
var homeController = require('./controllers/homeController');
var playerController = require('./controllers/playerController');

router.get('/', homeController.index);
router.get('/player', playerController.index);
router.get('/player/:id', playerController.read);

module.exports = router;


// Notes:

// app.route('/login')

//     // show the form (GET http://localhost:8080/login)
//     .get(function(req, res) {
//         res.send('this is the login form');
//     })

//     // process the form (POST http://localhost:8080/login)
//     .post(function(req, res) {
//         console.log('processing');
//         res.send('processing the login form!');
//     });



// router.post('/', auth, function(req, res) {
//   user = req.user.id
//   text = req.body.text

//   Comment.create(user, text, function (err, comment) {
//     res.redirect('/')
//   })
// })



