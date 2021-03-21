const mongoose = require('mongoose');
const moment = require("moment");

const ValidateSchema = new mongoose.Schema({
  movieCode: { type: String },
  sit: { type: String },
  name: { type: String },
  date: { type: String },
  createdAt: { type: Date, expires: '15m', default: Date.now }
});

const Validate = mongoose.model('Validate', ValidateSchema);

module.exports = Validate;