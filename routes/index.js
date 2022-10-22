const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');
const User = require('./user.route');

const commentsRouter = require('./comments.routes');  //댓글

router.use(cookieParser());
router.use(express.json());


router.use('/comments', commentsRouter) //댓글


router.use(User);


module.exports = router;