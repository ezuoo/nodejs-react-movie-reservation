const mongoose = require('mongoose');
const moment = require("moment");

const ReservationSchema = mongoose.Schema({
  movieCode: String,
  sit: String,
  name: String,
  contact: String,
  date: String
});

const Reservation = mongoose.model('Reservation', ReservationSchema);

module.exports = Reservation;