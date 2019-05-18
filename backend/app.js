//server setup
const express = require('express');
const router = express.Router();
const app = express();
const port = 3000;
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');
const flash = require('connect-flash');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

//flash
app.use(flash());
//cors
app.use(
  cors({
    origin: ['http://localhost:4200', 'http://localhost:3000'],
    credentials: true
  })
);

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

//bodyparser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Load Users model
require('./models/User');
const User = mongoose.model('Users');

//Load routes
const users = require('./routes/users');
const transport = require('./routes/transport');

const requestHandler = (request, response) => {
  console.log(request.url);
  response.end('Node.js Server!');
};

//express session middleware
app.use(
  session({
    name: 'user.sid',
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 3600,
      httpOnly: false,
      secure: false
    }
  })
);
//Passport Config
require('./config/passport');
app.use(passport.initialize());
app.use(passport.session());

app.use(function(req, res, next) {
  res.locals.users = req.users || null;
  next();
});

//use routes
app.use('/users', users);
//app.use('/transport', transport);

app.post('/posttransport', function(req, res) {
  console.log('POST FINALLY WORKS');
  console.log(req.isAuthenticated());
  //console.log(req.user);
});

app.get('/posttransport', function(req, res) {
  //return 'get posttransport works';
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
