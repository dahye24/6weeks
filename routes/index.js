const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');
const User = require('./user.route');
const Post = require('./post.route');
const Likes = require('./likes.route');



router.use(cookieParser());
router.use(express.json());


router.use(User);
router.use(Post);
router.use(Likes);



module.exports = router;



