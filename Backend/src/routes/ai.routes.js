const express = require('express');
const aiController = require('../controllers/ai.controller');
const isLoggedIn = require('../middleware/Islogged.js');

const router = express.Router();

router.post('/get-review',  isLoggedIn, aiController.getReview);

module.exports = router;