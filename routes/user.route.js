const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller');
const userController = new UserController();

// 회원 가입 controller
router.post('/signup', userController.createUser);

// 로그인 controller
router.post('/login', userController.loginUser);

module.exports = router;