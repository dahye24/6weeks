const CommentsService = require('../services/comments.service');

class CommentsController {                   //controller는 요청보내기,받기  
    commentsService = new CommentsService();

    createComment = async (req, res, next) => {   //댓글 생성
        try{
            const { postId } = req.params;  //어느 게시글인지
            const { userId,loginId } = res.locals.user;  //누가 적었는지
            const { comment } = req.body;
            
            const createCommentData = await this.commentsService.createComment(
                postId,
                userId,
                loginId,
                comment              
            );

            res.json({ data: createCommentData });
        } catch (error) {
            res.status(400).json({ errorMessage: error.message });
        }
    };

    getAllComments = async (req, res, next) => { // 메인에서 특정 게시물의 댓글 갯수??
        try {
            const {postId} = req.params;
            const comments = await this.commentsService.getAllComments(postId);

            res.json({ data: int(comments.length)});  // **********************물어보기************!!!!!!!!!!!!!!!!!!!!
        } catch (error) {
            res.status(400).json({ errorMessage: error.message });
        }
    }; 
    
    getPostComments = async (req, res, next) => {  //특정 게시물에 단 댓글 다 보이게하기
        try{
            const { postId } = req.params;
            const comments = await this.commentsService.getPostComments(postId);

            res.json({ data: comments })
        } catch (error) {
            res.status(400).json({ errorMessage: error.message });
        }
    };

    updateComment = async (req, res, next) => {   //댓글수정
        try {
            const {commentId} = req.params;
            const {userId} = res.locals.user;
            const { comment } = req.body;

            const comments = await this.commentsService.updateComment(commentId);

            if (comments.userId !== userId) {
                return res.status(400).json({ message : "수정 권한이 없습니다."})
            }
            const updateComment = await this.commentsService.updateComment(
                commentId,
                userId,
                comment
            );
            res.json({ data : updateComment});
        } catch (error) {
            res.status(400).json({ errorMessage: error.message });
        }
    };

    deleteComment = async (req, res, next) => {   //댓글삭제
        try {
            const {commentId} = req.params;
            const {userId} = res.locals.user;

            const comments = await this.commentsService.deleteComment(commentId);

            if (comments.userId !== userId) {
                return res.status(400).json({ message : "삭제 권한이 없습니다."})
            }

            await this.commentsService.deleteComment(commentId);

            res.json({ message : "댓글이 삭제되었습니다"});

        } catch (error) {
            res.status(error.status || 400).json({ errorMessage: error.message });
        }
    };            



}

module.exports = CommentsController;