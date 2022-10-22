const { Comments } = require('../models');

class CommentsRepository {

    createComment = async ( postId,userId,loginId,comment) => {  //댓글작성 
        const createCommentData = await Comments.create({
            postId,
            userId,
            loginId,
            comment 
        });
        return createCommentData;
    };

    getAllComments = async (postId) => {  //  메인 게시물에서 댓글 갯수 *******************여기도 물어보기******************************** */
        const comments = await Comments.findAll(postId).length;
        return comments;
    };

    getPostComments = async ({postId}) => {  //게시물 댓글 조회
        const comments = await Comments.findAll({postId,});
        return comments;
    }

    updateComment = async (commentId,comment) => {  // 댓글 수정
        const updateCommentData = await Comments.update(
            {comment},{ where: { commentId}}
        );    
        return updateCommentData;
    };

    deleteComment = async (commentId) => {  // 댓글 삭제
        const deleteCommentData = await Comments.destroy({where: { commentId }});
        return deleteCommentData;
    };    

}

module.exports = CommentsRepository;