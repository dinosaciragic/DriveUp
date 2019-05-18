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

const Schema = mongoose.Schema;
const Transport = mongoose.model('Transports');
var transportSchema = new Schema({
  username: String,
  title: String,
  text: String,
  workingHours: String,
  workingDays: String,
  car: String,
  seats: Number,
  price: Number
});

app.post('/posttransport', function(req, res) {
  if ('username') {
    const newTransport = new Transport({
      username: req.body.username,
      title: req.body.title,
      text: req.body.text,
      workingHours: req.body.workingHours,
      workingDays: req.body.workingDays,
      car: req.body.car,
      seats: req.body.seats,
      price: req.body.price
    });

    newTransport.save((err, user) => {
      if (err) {
        console.log(err);
      } else console.log(newTransport + '\nSAVED TO TRANSPORTS');
    });
  }
  //cnsole.log(req.body);
  //console.log(req.user);
});

app.get('/posttransport', function(req, res) {
  //return 'get posttransport works';
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
