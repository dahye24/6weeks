const LikesRepository = require('../repositories/likes.repository');

class LikesService {
  likesRepository = new LikesRepository();
  
  updateLikes = async (postId, youlikes, loginId) => {
    //try{
    const uselikes = await this.likesRepository.uselikes(postId, youlikes, loginId);

    if (youlikes===true && uselikes === null) {
        await this.likesRepository.updateLikes(postId, youlikes, loginId);
        return "message : 게시글의 좋아요를 등록하였습니다."
      }
    else{
        await this.likesRepository.deletelikes(postId, youlikes, loginId);
        return "message : 게시글의 좋아요를 취소하였습니다."
      }
    // }catch{
    // const error = new Error(`잘못된 정보 입니다.`);
    //   error.statusCode = 500;
    //   throw error;
    // }
}
}
module.exports = LikesService;