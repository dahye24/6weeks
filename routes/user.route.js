const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller');

// 회원 가입 controller
router.post('/signup', UserController.createUser);

// 로그인 controller
router.post('/login');

module.exports = router;