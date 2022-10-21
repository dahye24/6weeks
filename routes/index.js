const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');
const User = require('./user.route');

router.use(cookieParser());
router.use(express.json());

router.use(User);

module.exports = router;