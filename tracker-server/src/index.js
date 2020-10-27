const express = require('express');

const app = express();

const URI = 'mongodb+srv://anthonyzhu132:<password>@cluster0.m29e0.mongodb.net/<dbname>?retryWrites=true&w=majority'

app.get('/', (req, res) => {
  res.send('Hi there from root')
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});