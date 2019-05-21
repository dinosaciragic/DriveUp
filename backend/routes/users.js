const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passport = require('passport');
const flash = require('connect-flash');
const bodyParser = require('body-parser');

require('../models/User');
const User = mongoose.model('Users');
const ObjectId = Schema.ObjectId;
require('../models/Transport');
const Transport = mongoose.model('Transports');

const user = require('../config/passport')(passport);

const logedUser = require('../config/passport');

//REGISTER (POST) http://localhost:3000/users/register
router.route('/register').post(function(req, res) {
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(500).end('User already exists.');
    } else if (req.body.email == '' || req.body.username == '' || req.body.password == '') {
      return res.status(500).end('Fill in the form.');
    } else {
      var newUser = new User({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
      });
      newUser
        .save()
        .then(user => {
          res.status(200).json({ user: 'added successfully' });
        })
        .catch(err => {
          console.log(err);
        });
    }
  });
});
/*
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
*/
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

var logedUserID = '';

router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/users/profile',
    failureRedirect: '/users/login',
    failureFlash: true
  })(req, res, next);
});

router.get('/profile', isValidUser, (req, res) => {
  logedUserID = req.user._id;
  console.log('LOGED USER ID: ' + logedUserID);
  return res.status(200).json(req.user);
});

router.post('/posttransport', function(req, res) {
  if ('username') {
    const newTransport = new Transport({
      username: req.body.username,
      title: req.body.title,
      text: req.body.text,
      workingHours: req.body.workingHours,
      workingDays: req.body.workingDays,
      car: req.body.car,
      seats: req.body.seats,
      price: req.body.price,
      user: logedUserID
    });

    newTransport.save((err, user) => {
      if (err) {
        console.log(err);
      } else console.log(newTransport + '\nSAVED TO TRANSPORTS');
      return res.json(newTransport);
    });
  }
  //cnsole.log(req.body);
  //console.log(req.user);
});

//get Transport service for particular user

router.get('/login/profile/gettransportsbyuser', (req, res) => {
  Transport.find({ user: [logedUserID] })
    .sort({ date: 'desc' })
    .then(transports => {
      console.log(transports);
      return res.json(transports);
    });
});

router.delete('/login/profile/gettransportsbyuser/:id', (req, res) => {
  Transport.deleteOne({ _id: req.params.id }, (err, transport) => {
    console.log(req.params.id);
    if (err) {
      console.log(err);
    } else return res.status(200).json({ transport: 'removed successfully' });
  });
});

router.get('/profile/logedUserID', isValidUser, (req, res) => {
  return res.status(200).json(logedUserID);
});

router.get('/logout', isValidUser, (req, res) => {
  req.logout();
  //res.redirect('/users/login');
  return res.status(200).json('User loged out successfully');
});

function isValidUser(req, res, next) {
  if (req.isAuthenticated()) next();
  else return res.status(401).json({ message: 'Unauthorized Request' });
}

module.exports = router;
