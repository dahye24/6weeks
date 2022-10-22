const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth-middleware');

const CommentsController = require('../controllers/comments.controller');
const commentsController = new CommentsController();

router.post('/:postId', authMiddleware, commentsController.createComment); // 댓글 작성
router.get('/:postId', authMiddleware, commentsController.getAllComments); //메인에서 게시글 댓글갯수 조회
router.get('/:postId', authMiddleware, commentsController.getPostComments); //게시글 댓글조회
router.put('/:commentId', authMiddleware, commentsController.updateComment)  //댓글 수정
router.delete('/:commentId', authMiddleware, commentsController.deleteComment)  //댓글삭제

module.exports = router;
