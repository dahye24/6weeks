const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth-middleware');

const CommentsController = require('../controllers/comments.controller');
const commentsController = new CommentsController();

router.post('/', authMiddleware, commentsController.createComment); // 댓글 작성
router.get('/:postId',)
router.put('/:commentId', authMiddleware, commentsController.updateComment)


module.exports = router;
