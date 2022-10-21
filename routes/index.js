const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');

router.use(cookieParser());
router.use(express.json());

// 각자 router 파일 연결.
// 각 router 파일에서 url 설정하기.

module.exports = router;