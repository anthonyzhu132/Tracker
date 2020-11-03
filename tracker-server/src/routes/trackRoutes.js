const express = require('express');
const mongoose = require('mongoose');
const requireAuth = require('../middlewares/requireAuth');

const Track = mongoose.model('Track');

const router = express.router();

router.use(requireAuth);

router.get('/Tracks', async (req, res) => {
  
});
