const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//User Schema
const ObjectId = Schema.ObjectId;

const TransportSchema = new Schema({
  id: ObjectId,
  userId: ObjectId,
  title: String,
  text: String,
  price: Number
});

module.exports = mongoose.model('Transports', TransportSchema);
