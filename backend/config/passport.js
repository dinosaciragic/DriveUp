var LocalStrategy = require('passport-local').Strategy;
//const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('../models/User');
const User = mongoose.model('Users');

module.exports = function(passport) {
  passport.use(
    new LocalStrategy({ usernameField: 'email', passwordField: 'password' }, (email, password, done) => {
      User.findOne({
        email: email
      }).then(user => {
        if (!user) {
          return done(null, false, { message: 'Dont have a match' });
        }
        if (user.password != password) {
          return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user);
      });
    })
  );

  passport.serializeUser(function(user, done) {
    console.log('Hello from serialize' + user);
    done(null, user._id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      console.log('Hello from deserialize' + user);
      done(err, user);
    });
  });
};
