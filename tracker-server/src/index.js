require('dotenv').config();
require('./models/User');
const requireAuth = require('./middlewares/requireAuth');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const DB_KEY = process.env.DB_KEY
const authRoutes = require('./routes/authRoutes');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
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

app.get('/', requireAuth, (req, res) => {
  res.send(`Your email: ${req.user.email}`)
});

app.listen(3000, () => {
  console.log("Listening on port 3000")
});