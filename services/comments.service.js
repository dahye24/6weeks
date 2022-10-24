const CommentsRepository = require('../repositories/comments.repository');

class CommentsService {
    commentsRepository = new CommentsRepository();

    createComment = async ( postId,loginId,comment  ) => {  // 댓글 작성
        const createCommentData = await this.commentsRepository.createComment(
            postId,
            loginId,
            comment 
        );
       
         return {
            commentId: createCommentData.null,
            postId: createCommentData.postId,
            loginId: createCommentData.loginId,
            comment: createCommentData.comment,
            createdAt: createCommentData.createdAt,
            updatedAt: createCommentData.updatedAt,
        }
    };

    getAllComments = async (postId) => {  // 메인에서 각각의 게시글에 달린 댓글 총 갯수
       
      const findComments = await this.commentsRepository.getAllComments(postId);
    
      return findComments
        
    };

    getPostComments = async (postId) => {   //게시글의 댓글 보여주기
     
     const findComments = await this.commentsRepository.getPostComments(postId);
    
      return findComments
      // {
      //   commentId : findComments.commentId,  //댓글 전체를 불러와야 하는데 이렇게 쓰면 하나만 불러올수 있으므로 이걸로 쓰고 싶다면 for문을 돌려야한다.
      //   postId : findComments.postId,
      //   loginId : findComments.loginId, 
      //   comment : findComments.comment   
      // }
    };

    updateComment = async ( commentId,loginId,comment ) => {  //댓글 수정
      const updateComment = await this.commentsRepository.updateComment(commentId,loginId,comment);
      try {
       
        //수정할 댓글이 없을때
        if(!updateComment) {
          return {"errorMessage" : "수정할 댓글이 없습니다."}
        }  
  
        //댓글을 적었던 유저 아이디와 지금 댓글을 바꾸려는 유저 아이디가 다른사람일때
        if(loginId !== updateComment) {
          return {"errorMessage" : "댓글을 수정할 권한이 없습니다."}
          
        }
        
        return updateComment;

      } catch (error) {
        console.error(error)
        return (error.status ||400)
      }
      
      
    };

    deleteComment = async ( commentId,loginId ) => {  //삭제하기
      try {
        const deleteComment = await this.commentsRepository.deleteComment(commentId,loginId);

      
        if(!deleteComment) {
          return {"errorMessage" : "삭제할 댓글이 없습니다."}
        }

        //댓글을 삭제하려는 userId와 댓글을 작성한 userId가 다를때
        if(loginId !== deleteComment) {
          return {"errorMessage" : "댓글을 삭제할 권한이 없습니다."}
        }
        
        return deleteComment;
        // {
        //   commentId : deleteComment.commentId,
        //   loginId : deleteComment.loginId
        // }
      } catch (error) {
          console.error(error)
          return(error.status ||400 )
      }
      
    };
}

module.exports = CommentsService;