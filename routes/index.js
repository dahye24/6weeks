const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');
const User = require('./user.route');

const Post = require('./post.route');
const Likes = require("./likes.routes");



router.use(cookieParser());
router.use(express.json());


router.use('/', User);
router.use('/posts', Post);
router.use('/likes', Likes);



module.exports = router;



