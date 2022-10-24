const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');
const User = require('./user.route');
const Post = require('./post.route');
const Likes = require('./likes.route');
const Comments = require('./comments.route');


// const commentsRouter = require('./comments.route');  //댓글

router.use(cookieParser());
router.use(express.json());


router.use(User);
router.use(Post);
router.use(Likes);
router.use(Comments);



module.exports = router;



