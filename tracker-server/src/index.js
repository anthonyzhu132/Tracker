const express = require('express');
const connectDB = require('./config/db');
const app = express();
const PORT = 3000;

//Connecting to MONGODB
connectDB();

app.get('/', (req, res) => {
  res.send('Hi there from root')
});

app.listen(PORT, () => {
  console.log('listening on port 3000');
});