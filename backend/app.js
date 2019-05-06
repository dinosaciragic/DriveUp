//server setup
const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');
const flash = require('connect-flash');

//flash
app.use(flash());
//cors
app.use(cors());

//mongodb://<dbuser>:<dbpassword>@:47926/driveup
const mongoose = require('mongoose');

mongoose.connect(
  'mongodb://ekipa:OFRaidReekKose3@ds147926.mlab.com:47926/driveup',
  { useNewUrlParser: true },
  err => {
    if (err) {
      console.log('Some problem with the connection ' + err);
    } else {
      console.log('The Mongoose connection is ready');
    }
  }
);

//bodyparser
const bodyParser = require('body-parser');

//bodyparser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Load Users model
require('./models/User');
const User = mongoose.model('Users');

//Load routes
const users = require('./routes/users');

const requestHandler = (request, response) => {
  console.log(request.url);
  response.end('Node.js Server!');
};

require('./config/passport')(passport);

//express session middleware
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  })
);
//Passport Config

app.use(passport.initialize());
app.use(passport.session());

app.use(function(req, res, next) {
  res.locals.user = req.user || null;
  next();
});

/*app.post('/register', (req, res) => {
  res.send("Hiiiii")
})




/*
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
  id: ObjectId,
  username: String,
  password: String
});

var User = mongoose.model('Users', UserSchema)

//This is how you prepare data for database
/*
var userTest = new User({
  username: 'admin',
  password: 'admin'
})
*/

/*var userTest = new User({
  username: 'admin',
  password: 'admin'
})

app.get('/', (req, res) => {
  Users.find((err, users) => {
    res.json(users);
  })
});
*/

/*
app.post('/', (req, res) => {

  res.send('Backend!');

  const newUser = new User({
    email: 'Irfan98@live.com',//req.body.email,
    username: 'Irfanduric',//req.body.username,
    password: 'Irfanduric'//req.body.password
  });

  newUser.save()
  then(newUser => {
    console.log(newUser);
  })
    .catch(err => {
      console.log(err);
    });


});
*/

//use routes
app.use('/users', users);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
