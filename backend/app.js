//server setup
const express = require('express')
const app = express()
const port = 3000

const requestHandler = (request, response) => {
  console.log(request.url)
  response.end('Node.js Server!')
}

//mongodb://<dbuser>:<dbpassword>@ds147926.mlab.com:47926/driveup
const mongoose = require('mongoose');

mongoose.connect('mongodb://ekipa:OFRaidReekKose3@ds147926.mlab.com:47926/driveup', {useNewUrlParser: true},(err)=>{
        if(err) {
            console.log('Some problem with the connection ' +err);
        } else {
            console.log('The Mongoose connection is ready');
        }
  });

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


app.get('/', (req, res) => {
  res.send('Backend!')

  //This is function for inserting the data to database
  /*
  userTest.save(function (err, book) {
      if (err) return console.error(err);
      console.log(book.name + " saved to bookstore collection.");
    });
  */
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
