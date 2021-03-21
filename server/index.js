const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const validateRouter = require('./routes/reservationRouter');

const key = 'mongodb+srv://root:1234@node-react.njajl.mongodb.net/movie-reservation?retryWrites=true&w=majority'
const app = express();
const connect = mongoose.connect(key,
  {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false})
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', require('./routes/reservationRouter'));
app.use('/', require('./routes/testUtilRouter'));

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`서버 ${port}번 포트로 시작됨`);
});
