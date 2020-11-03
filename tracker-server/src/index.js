require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const DB_KEY = process.env.DB_KEY
const authRoutes = require('./routes/authRoutes');

app.use(authRoutes);

mongoose.connect(DB_KEY, {
   useNewUrlParser: true,
   useCreateIndex: true,
   useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB')
});

mongoose.connection.on('error', () => {
  console.error('Error connecting to mongoDB', err);
});

app.get('/', (req, res) => {
  res.send("Hello from the root")
});

app.listen(3000, () => {
  console.log("Listening on port 3000")
});