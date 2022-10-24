const CommentsRepository = require('../repositories/comments.repository');

class CommentsService {
    commentsRepository = new CommentsRepository();

    createComment = async ( postId,loginId,comment  ) => {  // 댓글 작성

      const findpostId = await this.commentsRepository.findpostId(postId); 
      
      try{

        if(!findpostId){
          return {"message" : "댓글을 등록할 게시물이 없습니다."}
        }

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
      } catch (error) {
        console.error(error)
        return (error.status ||400)
      }       
        
    };

    getAllComments = async (postId) => {  // 메인에서 각각의 게시글에 달린 댓글 총 갯수
       
      const findComments = await this.commentsRepository.getAllComments(postId);
    
      return findComments
        
    };

    getPostComments = async (postId) => {   //게시글의 댓글 보여주기
     
      try{
        const findComments = await this.commentsRepository.getPostComments(postId);
       
         return findComments
      } catch (error) {
        console.error(error)
        return (error.status ||400)
      }       
    };

    updateComment = async ( commentId,loginId,comment ) => {  //댓글 수정
      const findcommentId = await this.commentsRepository.findcommentId(commentId);
     
      
      try {

        //수정할 댓글이 없을때
        if(findcommentId === null) {
          return {"message" : "수정할 댓글이 없습니다."}
        } 

        //댓글을 적었던 유저 아이디와 지금 댓글을 바꾸려는 유저 아이디가 다른사람일때
        if(loginId !== findcommentId.dataValues.loginId) {
          return {"message" : "댓글을 수정할 권한이 없습니다."}         
        }
        

        await this.commentsRepository.updateComment(commentId,loginId,comment);
        
        return {"message":"댓글 수정이 완료 되었습니다"};

      } catch (error) {
        console.error(error)
        return (error.status ||400)
      }
      
      
    };

    deleteComment = async ( commentId,loginId ) => {  //삭제하기

      const findcommentId = await this.commentsRepository.findcommentId(commentId); //repository에서 commentId 불러오기

      try {

        //해당하는 데이터가 없으면
        if(findcommentId === null) {
          return {"message" : "삭제할 댓글이 없습니다."}
        }

        //댓글을 삭제하려는 userId와 댓글을 작성한 userId가 다를때
        if(loginId !== findcommentId.dataValues.loginId) {
          return {"message" : "댓글을 삭제할 권한이 없습니다."}
        }

        await this.commentsRepository.deleteComment(commentId,loginId);

        return {"message":"댓글 삭제가 완료 되었습니다"};
        
      } catch (error) {
          console.error(error)
          return(error.status ||400 )
      }
      
    };
}

module.exports = CommentsService;