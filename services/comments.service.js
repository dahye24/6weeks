const CommentsRepository = require('../repositories/comments.repository');

class CommentsService {
    commentsRepository = new CommentsRepository();

    createComment = async ( postId,userId,loginId,comment  ) => {
        const createCommentData = await this.commentsRepository.createComment(
            postId,
            userId,
            loginId,
            comment 
        );
        return {
            commentId: createCommentData.null,
            postId: createCommentData.postId,
            userId: createCommentData.userd,
            loginId: createCommentData.loginId,
            comment: createCommentData.comment,
            createdAt: createCommentData.createdAt,
            updatedAt: createCommentData.updatedAt,
        }
    };

    findAllComments = async () => {  // 저장소(Repository)에게 데이터를 요청합니다.
       
        const allComment = await this.commentsRepository.findAllComment(postId).length;
  
        return allComment
        
    };

    findCommentById = async (commentId,comment) => {   //그 게시글의 댓글 전부 다 보여주기
      const findComments = await this.commentsRepository.updateComment(postId);
      return {
        commentId : findComments.commentId,
        postId : findComments.postId,
        userId : findComments.userId,
        loginId : findComments.loginId, //*************물어볼것 이게 필요한가*****************
        comment : findComments.comment
      }
    };

    updateComment = async ( commentId,comment ) => {
      const findComment = await this.commentsRepository.findOneComment(commentId);

    }
}

module.exports = CommentsService;