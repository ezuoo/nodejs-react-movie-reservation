const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const key = 'mongodb+srv://root:1234@node-react.njajl.mongodb.net/movie-reservation?retryWrites=true&w=majority'
const app = express();
const connect = mongoose.connect(key,
  {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false})
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* 
app.use('/api/users', require('./routes/users'));
app.use('/api/elements', require('./routes/elements'));
app.use('/api/users', require('./routes/users'));
app.use('/api/images', require('./routes/images'))
app.use('/api/slides', require('./routes/slides'))
app.use('/api/notices', require('./routes/notices'))
app.use('/api/orders', require('./routes/orders')) */
app.get('/', (req, res) => {
    return res.json({success: true, msg: 'index page'});
})
const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Server Listening on ${port}`)
});