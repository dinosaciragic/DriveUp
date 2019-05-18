const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passport = require('passport');
const flash = require('connect-flash');
var jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

require('../models/User');
const User = mongoose.model('Users');
const ObjectId = Schema.ObjectId;

const user = require('../config/passport')(passport);

const logedUser = require('../config/passport');
/*const newUser = new User({
    email: 'Irfan98@live.com',//req.body.email,
    username: 'Irfanduric',//req.body.username,
    password: 'Irfanduric'//req.body.password
});

newUser.save((err, user) => {
    if (err) {
        console.log(err);
    }
    else
        console.log(user);
});
*/

/*var userTest = new User({
    email: 'email',
    username: 'username',
    password: 'password'
})*/

//REGISTER (POST) http://localhost:3000/users/register
router.route('/register').post(function(req, res) {
  const newUser = new User(req.body);
  newUser
    .save()
    .then(user => {
      res.status(200).json({ user: 'added successfully' });
    })
    .catch(err => {
      console.log(err);
    });
});
//GET ALL USERS
router.route('/').get((req, res) => {
  User.find((err, users) => {
    if (err) {
      console.log(err);
    } else res.json(users);
  });
});

//GET SINGLE USER BY ID
router.route('/users/:id').get((req, res) => {
  User.findById(req.params.id, (err, user) => {
    if (err) {
      console.log(err);
    } else res.json(user);
  });
});

//DELETE USER

router.route('/delete/:id').get((req, res) => {
  User.findByIdAndRemove({ _id: req.params.id }, (err, user) => {
    if (err) {
      console.log(err);
    } else console.log('Deleted successfully');
  });
});

//LOGIN USER

/*function isValidUser(req, res, next) {
    if (req.isAuthenticated()) next();
    else console.log('invalid request');
}*/

router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/users/profile',
    failureRedirect: '/users/login',
    failureFlash: true
  })(req, res, next);
});

router.get('/profile', isValidUser, function(req, res, next) {
  return res.status(200).json(req.user);
});

function isValidUser(req, res, next) {
  if (req.isAuthenticated()) next();
  else return res.status(401).json({ message: 'Unauthorized Request' });
}

module.exports = router;
