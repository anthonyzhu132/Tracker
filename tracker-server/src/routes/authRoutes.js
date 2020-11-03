const express = require('express');
const router = express.Router();

router.post('/signup', (req, res) => {
  console.log(req.body);
  res.send('Post request to /signup');
});

module.exports = router; 