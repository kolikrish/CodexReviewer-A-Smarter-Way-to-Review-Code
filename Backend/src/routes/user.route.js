const express = require('express');
const { userRegister, userLogin, userLogOut } = require('../controllers/user.controller.js');
const router = express.Router();


router.post('/register', userRegister);

router.post('/login', userLogin);

module.exports = router;