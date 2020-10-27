const express = require('express');
const { MongoURI } = require('./config');
const app = express();
const mongoose = require('mongoose');

// mongoose.connect(URI, {
//   useNewUrlParser: true,
//   useCreateIndex: true
// });

// mongoose.connection.on('connected', () => {
//   console.log('Connected to MongoDB')
// });

// mongoose.connection.on('error', (err) => {
//   console.error('Error connecting to MongoDB', err)
// });

app.get('/', (req, res) => {
  res.send('Hi there from root')
});

app.listen(3000, () => {
  console.log('listening on port 3000' + MongoURI);
});