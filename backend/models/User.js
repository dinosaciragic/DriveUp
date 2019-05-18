const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//User Schema
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
  id: ObjectId,
  email: String,
  username: String,
  password: String,
  bio: String,
  phoneNumber: String,
  location: String,
  price: Number,
  carBrand: String,
  numOfCarSeats: Number,
  fromDateAvailable: String,
  toDateAvailable: String
});

module.exports = mongoose.model('Users', UserSchema);
