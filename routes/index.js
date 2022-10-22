const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');

const commentsRouter = require('./comments.routes');  //댓글

router.use(cookieParser());
router.use(express.json());

router.use('/comments', commentsRouter) //댓글

// 각자 router 파일 연결.
// 각 router 파일에서 url 설정하기.

module.exports = router;