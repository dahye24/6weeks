const CommentsRepository = require('../repositories/comments.repository');

class CommentsService {
    commentsRepository = new CommentsRepository();

    createComment = async ( postId,userId,loginId,comment  ) => {  // 댓글 작성
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

    getAllComments = async () => {  // 메인에서 게시글 댓글 갯수
       
        const allComment = await this.commentsRepository.getAllComments(postId).length; //********************************
  
        return allComment
        
    };

    getPostComments = async ({postId}) => {   //게시글의 댓글 보여주기
      const findComments = await this.commentsRepository.getPostComments({postId});
      return {
        commentId : findComments.commentId,
        postId : findComments.postId,
        userId : findComments.userId,
        loginId : findComments.loginId, //*************물어볼것 이게 필요한가*****************
        comment : findComments.comment
      }
    };

    updateComment = async ( {userId,commentId,comment} ) => {  //댓글 수정
      try {
        const findComment = await this.commentsRepository.updateComment({commentId,userId,comment});
        
        //수정할 댓글이 없을때
        if(!findComment.commentId) {
          res.status(400).json({"errorMessage" : "수정할 댓글이 없습니다."})
        }  
  
        //댓글을 적었던 유저 아이디와 지금 댓글을 바꾸려는 유저 아이디가 다른사람일때
        if(userId !== findComment.userId) {
          res.status(400).json({"errorMessage" : "댓글을 수정할 권한이 없습니다."})
          
        }
        return {
          commentId : findComments.commentId,
          postId : findComments.postId,
          userId : findComments.userId,
          comment : findComments.comment
        }

      } catch (error) {
        console.error(error)
        return (error.status ||400)
      }
      
      
    };

    deleteComment = async ( {commentId,userId} ) => {  //삭제하기
      try {
        const findComment = await this.commentsRepository.deleteComment({commentId,userId});

      
        if(!findComment.commentId) {
          res.status(400).json({"errorMessage" : "삭제할 댓글이 없습니다."})
        }

        //댓글을 삭제하려는 userId와 댓글을 작성한 userId가 다를때
        if(userId !== findComment.userId) {
          res.status(400).json({"errorMessage" : "댓글을 삭제할 권한이 없습니다."})
        }
        return{
          commentId : findComment.commentId,
          userId : findComment.userId
        }
      } catch (error) {
          console.error(error)
          return(error.status ||400 )
      }
      
    };
}

module.exports = CommentsService;