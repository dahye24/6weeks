const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');
const User = require('./user.route');

const commentsRouter = require('./comments.routes');  //댓글

router.use(cookieParser());
router.use(express.json());

<<<<<<< HEAD
router.use('/comments', commentsRouter) //댓글

// 각자 router 파일 연결.
// 각 router 파일에서 url 설정하기.
=======
router.use(User);
>>>>>>> e07761eed8cb8dff143248fdf8284e271066959c

module.exports = router;