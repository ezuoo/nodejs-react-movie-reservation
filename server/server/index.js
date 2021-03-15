const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const axios = require('axios');
const key = 'mongodb+srv://root:1234@node-react.njajl.mongodb.net/movie-reservation?retryWrites=true&w=majority'
const app = express();
const connect = mongoose.connect(key,
  {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false})
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//app.use('/api/users', require('./routes/users'));


app.get('/', async(req, res) => {
    try {
      const URL = "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json";
      const key = "6b79d535cffb5613aaf19f53da80205f";
      const targetDt = "20120101";

      let testVar = await axios.get(URL + "?key=" + key + "&targetDt=" + targetDt);
      let list = testVar.data.boxOfficeResult;

      console.log(list.dailyBoxOfficeList[2]);
    } catch(error) {
      console.err(error);
    }

    return res.json({success: true, msg: 'index page'});
});






const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`서버 ${port}번 포트로 시작됨`);
});
