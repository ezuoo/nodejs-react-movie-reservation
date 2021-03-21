const dateUtils = require('date-utils');
const mongoose = require('mongoose');
const validateSchema = require('../models/Validate');
const reservationSchema = require('../models/Reservation');

async function validate(req, res) {
    let movieCode = req.body.movieCode;
    let sit = req.body.sit;
    let name = req.body.name;
    
   /*
    let movieCode = req.query.movieCode;
    let sit = req.query.sit;
    let name = req.query.name;
    */
    try {
        let validateList = await validateSchema.find({
            movieCode: movieCode,
            sit: sit
        });
        if(validateList.length == 0) {
            let reservationList = await reservationSchema.find({
                movieCode: movieCode,
                sit: sit
            });
            if(reservationList.length == 0) {
                let now = new Date().toFormat('YYYY-MM-DD HH24:MI:SS');
                await validateSchema.create({
                    movieCode: movieCode,
                    sit: sit,
                    name: name,
                    date: now
                });
                return res.json({pass: true, code: 0}); //성공적으로 완료
            }
        }
        return res.json({pass: false, code: 1}); // 이미 다른사람이 예매 페이지 진입하여 진행중
    } catch(error) {
        console.log(error);
        return res.json({success: false, code: 3}); // 알 수 없는 오류 콘솔 오류메시지 확인
    }
}

module.exports = {
    validate: validate
}