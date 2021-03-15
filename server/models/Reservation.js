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


ReservationSchema.statics.saveReservation = function (parameter, cb) {
    let row = new Reservation(parameter);
    row['_id'] = new mongoose.Types.ObjectId();
    row.date = moment().format("YYYY-MM-DD HH:mm");
    
    return cb(row);
}


const Reservation = mongoose.model('Reservation', ReservationSchema);

module.exports = { Reservation }