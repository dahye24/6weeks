const { Comments } = require('../models');

class CommentsRepository {

    createComment = async ( postId,loginId,comment) => {  //댓글작성 
        const createCommentData = await Comments.create({
            postId,
            loginId,
            comment 
        });
        
        return createCommentData;
    };

    getAllComments = async (postId) => {  //  메인 게시물에서 댓글 갯수 *******************여기도 물어보기******************************** */
        const comments = await Comments.findAll({where : {postId}});
        
        return comments;
    };

    getPostComments = async (postId) => {  //게시물 댓글 조회
        const comments = await Comments.findAll({where : {postId}});
        
        return comments;
    }

    updateComment = async (commentId,loginId,comment) => {  // 댓글 수정
        const updateComment = await Comments.update(
            {comment},{ where: { commentId,loginId}}
        );    
        return updateComment;
    };

    deleteComment = async (commentId,loginId) => {  // 댓글 삭제
        const deleteComment = await Comments.destroy({where: { commentId,loginId }});
        return deleteComment;
    };    

}

module.exports = CommentsRepository;