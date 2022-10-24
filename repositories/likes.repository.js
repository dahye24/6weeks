const { Likes } = require('../models');
const { Posts } = require('../models');

class LikesRepository {

//좋아요 목록 불러오기
getLikes = async (loginId) => {
    const findgetLikes = await Likes.findAll({where: {loginId}, order: [['likes', 'DESC']]})
  
    return findgetLikes;
    };

//게시글 좋아요 누르기
deletelikes = async (postId, youlikes, loginId) => {
    const likespost = await Posts.findOne({where: {postId, loginId}})
    let cnt = likespost.dataValues.likes
    cnt -= 1
    await Posts.update({likes:cnt}, {where: {postId, loginId}})
    await Likes.destroy({where: {postId, loginId}})
    }    
}
  
  module.exports = LikesRepository;