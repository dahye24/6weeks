const LikesRepository = require('../repositories/likes.repository');

class LikesService {
  likesRepository = new LikesRepository();
  
updateLikes = async (postId, loginId) => {
  try{
      const uselikes = await this.likesRepository.uselikes(postId, loginId);
  if(!uselikes){
      await this.likesRepository.updateLikes(postId, loginId)
      return "좋아요를 등록하였습니다."
  }else{
      await this.likesRepository.deletelikes(postId, loginId)
      return "좋아요를 취소하였습니다."
  }
  }catch{
      const error = new Error(`잘못된 정보 입니다.`);
        error.statusCode = 500;
        throw error;
      } 
}
}
module.exports = LikesService;