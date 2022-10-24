const { Likes } = require('../models');
const { Posts } = require('../models');

class LikesRepository {

//게시글 좋아요 누르기    
uselikes = async (postId, loginId) => {
    //try{
    const finduselikes = await Likes.findOne({where: {postId, loginId}})
    return finduselikes;
    // }catch{
    //     const error = new Error(`잘못된 정보 입니다.`);
    //     error.statusCode = 500;
    //     throw error;
    // }
}

// updateLikes = async (postId, youlikes, loginId) => {
//     //try{
//     const likespost = await Posts.findOne({where: {postId, loginId}}) 
   
//     //let cnt = likespost.likes
//     //let title = likespost.title
    
//     //cnt += 1 
//     await Posts.increment({likes :1},{where:{postId}})
//     await Likes.create({postId, loginId, title, likes}) //좋아요 누름과 동시에 likes테이블 생성   
//     return likespost
//     // }catch{
//     //   const error = new Error(`잘못된 정보 입니다.`);
//     //     error.statusCode = 500;
//     //     throw error;
//     // }
// } 

updateLikes = async ( postId, loginId) => {
    const likespost = await Posts.findOne({where: {postId, loginId}}) 

    await Posts.increment({likes : 1}, {where :{postId}})
    await Likes.create({postId, loginId})
    return likespost
}

deletelikes = async ( postId, loginId) => {
    const likespost = await Posts.findOne({where: {postId, loginId}})

    await Posts.decrement({likes : 1}, {where:{postId, loginId}})
    await Likes.destroy({where:{postId, loginId}})
    return likespost
}

// deletelikes = async (postId, loginId) => {
//     //try{
//     const likespost = await Posts.findOne({where: {postId, loginId}})
    
//     // let cnt = likespost.likes

//     // cnt -= 1
//     await Posts.decrement({likes :-1},{where:{postId}})
//     //await Posts.update({likes:cnt}, {where: {postId, loginId}})
//     await Likes.destroy({where: {postId, loginId}})
//     return likespost
//     // }catch{
//     //     const error = new Error(`잘못된 정보 입니다.`);
//     //   error.statusCode = 500;
//     //   throw error;
//     // }    
// }
}

  module.exports = LikesRepository;