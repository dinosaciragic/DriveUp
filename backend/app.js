//server setup
const http = require('http')
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

const User = new Schema({
  id: ObjectId,
  username: String,
  password: String
});

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('Some error occured!', err)
  }

  console.log('Backend is running on port: ' + port);
})
