const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passport = require('passport');
const flash = require('connect-flash');
var jwt = require('jsonwebtoken');

require('../models/Transport');
const Transport = mongoose.model('Transports');
const ObjectId = Schema.ObjectId;

const user = require('../config/passport')(passport);
const logedUser = require('../config/passport');

//REGISTER (POST) USER
router.route('/posttransport').post((req, res) => {
  console.log('post posttransport works');
  /*
  const newTransport = new Transport({
    /*
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
    userId: ObjectId,
    userId: 1,
    title: 'Test',
    text: 'Test',
    price: 10
  });
  newTransport
    .save()
    .then(user => {
      res.status(200).json({ user: 'added successfully' });
      console.log('post posttransport works');
    })
    .catch(err => {
      console.log(err);
    });
    */
});
