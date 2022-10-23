const { Likes } = require('../models');
const { Posts } = require('../models');

class LikesRepository {

//게시글 좋아요 누르기    
uselikes = async (postId, loginId) => {
    try{
    const finduselikes = await Likes.findOne({where: {postId, loginId}})
    console.log(finduselikes)
    return finduselikes;
    }catch{
        const error = new Error(`잘못된 정보 입니다.`);
        error.statusCode = 500;
        throw error;
    }
}

updateLikes = async (postId, youlikes, loginId) => {
    try{
    const likespost = await Posts.findOne({where: {postId, loginId}}) 

    let cnt = likespost.likes
    let title = likespost.title

    cnt += 1 
    await Posts.update({likes:cnt}, {where: {postId, loginId}})
    await Likes.create({postId, loginId, title, likes: cnt}) //좋아요 누름과 동시에 likes테이블 생성   
    }catch{
        const error = new Error(`잘못된 정보 입니다.`);
      error.statusCode = 500;
      throw error;
    }
}       

deletelikes = async (postId, youlikes, loginId) => {
    try{
    const likespost = await Posts.findOne({where: {postId, loginId}})
    
    let cnt = likespost.dataValues.likes

    cnt -= 1
    await Posts.update({likes:cnt}, {where: {postId, loginId}})
    await Likes.destroy({where: {postId, loginId}})
    }catch{
        const error = new Error(`잘못된 정보 입니다.`);
      error.statusCode = 500;
      throw error;
    }    
}
}

  module.exports = LikesRepository;