const LikesRepository = require('../repositories/likes.repository');

class LikesService {
  likesRepository = new LikesRepository();

  updateLikes = async (postId, youlikes, loginId) => {
    try{
    const uselikes = await this.likesRepository.uselikes(postId, loginId);

    if (youlikes===true && uselikes === null) {
        const updatelikes = await this.likesRepository.updateLikes(postId, youlikes, loginId);
        return "message : 게시글의 좋아요를 등록하였습니다."}
    else if (youlikes===false && uselikes !== null) {
        const deletelikes = await this.likesRepository.deletelikes(postId, youlikes, loginId);
        return "message : 게시글의 좋아요를 취소하였습니다."
    }else if (youlikes === true && uselikes !== null) {
        return "message : 이미 게시글에 좋아요을 누르셨습니다."
    }
  }catch (err) {
    err = new Error(`잘못된 정보 입니다.`);
    err.statusCode = 500;
    throw err;
  }
}
}
module.exports = LikesService;