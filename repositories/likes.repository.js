const {Likes} = require('../models');
const {Posts} = require('../models');

class LikesRepository {

//게시글 좋아요 누르기    
    uselikes = async (postId, loginId) => {
        try {
            const finduselikes = await Likes.findOne({where: {postId, loginId}});
            return finduselikes;
        } catch {
            const error = new Error(`서버 실행 중 오류가 발생했습니다.`);
            error.statusCode = 500;
            throw error;
        }
    };

    updateLikes = async (postId, loginId) => {
        try {
            const likespost = await Posts.findOne({where: {postId, loginId}});
            await Posts.increment({likes: 1}, {where: {postId}});
            await Likes.create({postId, loginId});
            return likespost;
        } catch {
            const error = new Error(`좋아요 요청 중 오류가 발생했습니다.`);
            error.statusCode = 500;
            throw error;
        }
    };

    deletelikes = async (postId, loginId) => {
        try {
            const likespost = await Posts.findOne({where: {postId, loginId}});

            await Posts.decrement({likes: 1}, {where: {postId}});
            await Likes.destroy({where: {postId, loginId}});
            return likespost;
        } catch {
            const error = new Error(`좋아요 취소 중 오류가 발생했습니다.`);
            error.statusCode = 500;
            throw error;
        }
    };
}

module.exports = LikesRepository;