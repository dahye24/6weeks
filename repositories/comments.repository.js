const { Comments } = require('../models');

class CommentsRepository {

    createComment = async ( postId,userId,loginId,comment) => {
        const createCommentData = await Comments.create({
            postId,
            userId,
            loginId,
            comment 
        });
        return createCommentData;
    };

    findtAllComments = async (postId) => {  //*******************여기도 물어보기******************************** */
        const comments = await Comments.findAll(postId).length;
        return comments;
    };

    getPostComments = async (postId) => {
        const comments = await Comments.findAll(postId);
        return comments;
    }

    updateComment = async (commentId,comment) => {
        const updateCommentData = await Comments.update(
            {comment},{ where: { commentId}}
        );    
        return updateComment;
    };

    deleteComment = async (commentId) => {
        const deleteCommentData = await Comments.destroy({where: { commentId }});
        return deleteCommentData;
    };    

}

module.exports = CommentsRepository;