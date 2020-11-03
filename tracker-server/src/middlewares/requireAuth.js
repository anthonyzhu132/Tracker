const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  //Bearer _TOKEN_

  if(!authorization) {
    return res.status(401).send({ error: "Must be logged in." });
  }

  const token = authorization.replace('Bearer ', '');

  //Verifies token with secret key and runs callback
  jwt.verify(token, 'SECRET_KEY', async (err, payload) => {
    if(err) {
      return res.status(401).send({ error: "Must be logged in." });
    }

    //grabbing userId from payload
    const { userId } = payload;

    //Finding user by payload.userId
    const user = await User.findById(userId);
  });
};