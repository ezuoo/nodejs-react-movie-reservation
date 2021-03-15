const mongoose = require('mongoose');
const moment = require("moment");

const ReservationSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  movieCord: String,
  sit: String,
  name: String,
  t_count: Number,
  contact: String,
  date: String
});


const Reservation = mongoose.model('Reservation', ReservationSchema);

module.exports = { Reservation }