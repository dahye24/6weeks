const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller')
const AuthMiddleware = require('../middlewares/auth-middleware')
const userController = new UserController();

// 회원 가입 controller
router.post('/signup', userController.createUser)

// 로그인 controller
router.post('/login', AuthMiddleware, userController.loginUser);

module.exports = router;