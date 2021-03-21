var express = require('express');
var router = express.Router();

const validateController = require('../controllers/validateController');
const reservationController = require('../controllers/reservationController');

router.post('/validateReservation', validateController.validate);

router.post('/createReservation', reservationController.create);

module.exports = router;