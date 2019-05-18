const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//User Schema
const ObjectId = Schema.ObjectId;

const TransportSchema = new Schema({
  id: ObjectId,
  username: String,
  title: String,
  text: String,
  workingHours: String,
  workingDays: String,
  car: String,
  seats: Number,
  price: Number
});

module.exports = mongoose.model('Transports', TransportSchema);
