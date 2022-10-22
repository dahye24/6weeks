const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');
const User = require('./user.route');
<<<<<<< HEAD
const Post = require('./post.route');
const Likes = require("./likes.routes");
const Comment = require('./comment.route');
=======
>>>>>>> e07761eed8cb8dff143248fdf8284e271066959c

router.use(cookieParser());
router.use(express.json());

<<<<<<< HEAD
router.use('/', User);
router.use('/posts', Post);
router.use('/likes', Likes);
router.use('/comments', Comment)
=======
router.use(User);
>>>>>>> e07761eed8cb8dff143248fdf8284e271066959c

module.exports = router;



