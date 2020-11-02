const express = require('express');
const app = express();
const DB_KEY = process.env.DB_KEY
require('dotenv').config();


app.get('/', (req, res) => {
  res.send("Hello from the root")
});

app.listen(3000, () => {
  console.log("Listening on port 3000")
})