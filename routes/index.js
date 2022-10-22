const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');
const User = require('./user.route');
const Post = require('./post.route');
const Likes = require("./likes.routes");
const Comment = require('./comment.route');

router.use(cookieParser());
router.use(express.json());

router.use('/', User);
router.use('/posts', Post);
router.use('/likes', Likes);
router.use('/comments', Comment)

module.exports = router;



