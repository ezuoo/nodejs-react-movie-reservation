let express = require('express');
let router = express.Router();

const axios = require('axios');
const mongoose = require('mongoose');
const validateSchema = require('../models/Validate');
const reservationSchema = require('../models/Reservation');

router.get("/movieListInsertDB", async(req, res) => {
    try {
        const URL = "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json";
        const key = "6b79d535cffb5613aaf19f53da80205f";
        const targetDt = "20120101";
  
        let testVar = await axios.get(URL + "?key=" + key + "&targetDt=" + targetDt);
        let list = testVar.data.boxOfficeResult;
  
        console.log(list.dailyBoxOfficeList[2]);
      } catch(error) {
        console.log(error);
      }
  
      return res.json({success: true});
});

router.get("/reservationInsert", async(req, res) => {
  let newInsert = new reservationSchema({
    movieCode: "00001",
    sit: "8",
    name: "오성재",
    contact: "010-9456-9779",
    date: "2021-03-21 18:01"
  });

  newInsert.save((error, data) => {
      if(error) {
          console.log("에러 발생 : " + error);
      } else {
          console.log("성공적으로 저장됨!");
      }
  });

  return res.json({success: true});
});

module.exports = router;