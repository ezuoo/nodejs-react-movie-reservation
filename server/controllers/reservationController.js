const dateUtils = require('date-utils');
const mongoose = require('mongoose');
const validateSchema = require('../models/Validate');
const reservationSchema = require('../models/Reservation');

async function create(req, res) {
    let movieCode = req.body.movieCode;
    let sit = req.body.sit;
    let name = req.body.name;
    let contact = req.body.contact;
   /*
    let movieCode = req.query.movieCode;
    let sit = req.query.sit;
    let name = req.query.name;
    let contact = req.query.contact;
    */
    try {
        let validateInfo = await validateSchema.find({
            movieCode: movieCode,
            sit: sit,
            name: name
        });
        if(validateInfo.length != 0) {
            let now = new Date().toFormat('YYYY-MM-DD HH24:MI:SS');
            await validateSchema.remove({
                movieCode: movieCode,
                sit: sit
            });
            await reservationSchema.create({
                movieCode: movieCode,
                sit: sit,
                name: name,
                contact: contact,
                date: now
            });
            return res.json({success: true, code: 0}); // 정상적으로 완료
        }
        return res.json({success: false, code: 2}); // 15분이 지나 만료된 예매이거나, 잘못된 URL접근
    } catch(error) {
        console.log(error);
        return res.json({success: false, code: 3}); // 알 수 없는 오류 콘솔 오류메시지 확인
    }
}

module.exports = {
    create: create
}