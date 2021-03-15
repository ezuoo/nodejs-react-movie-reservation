const mongoose = require('mongoose');
const moment = require("moment");

const TempSchema = mongoose.Schema({
  movieCord: String,
  sit: String,
  name: String,
  date: String
});


const Temp = mongoose.model('Temp', TempSchema);

module.exports = { Temp }