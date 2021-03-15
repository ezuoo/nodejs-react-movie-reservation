const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const { Reservation } = require("../models/Reservation");
const moment = require("moment");

router.post('/', (req, res) => {
    Reservation.saveReservation(req.body, (data) => {
        data.save((err, row) => {
            if (err) return res.json({ success: false, msg: "데이터 입력 실패", error: err });
            return res.json({ success: true, msg: "데이터 입력 완료", row: row });
        })
    });
})
