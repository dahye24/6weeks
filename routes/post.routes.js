const express = require("express");
const authMiddleware = require("../middlewares/auth-middleware")
const router = express.Router();

const PostsController = require('../controllers/posts.controller');
const postsController = new PostsController();

router.get('/', postsController.getPosts);
router.get('/posts/:postId', authMiddleware, postsController.getPostById);
router.post('/posts', authMiddleware, postsController.createPost);
router.put('/posts/:postId', authMiddleware, postsController.updatePost);
router.delete('/posts/:postId', authMiddleware, postsController.deletePost);

module.exports = router;