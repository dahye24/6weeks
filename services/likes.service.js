const LikesRepository = require('../repositories/likes.repository');

class LikesService {
  likesRepository = new LikesRepository();

  //좋아요 목록 불러오기
getLikes = async (loginId) => {
    const findgetLikes = await this.likesRepository.getLikes(loginId);
    const findgetlikes = findgetLikes.map((likeData)=> {
      return {
              postId: likeData.postId,
              likeId: likeData.likeId,
              createdAt: likeData.createdAt,
              updatedAt: likeData.updatedAt,
              likes: likeData.likes
            }
    })
    return findgetlikes
  };

//게시글 좋아요 누르기  
updateLikes = async (postId, youlikes, loginId) => {
    const uselikes = await this.likesRepository.uselikes(postId, loginId);

    if (youlikes===true && uselikes === null) {
        const updatelikes = await this.likesRepository.updateLikes(postId, youlikes, loginId);
        return "message : 게시글의 좋아요를 등록하였습니다."
    }else if (youlikes===false && uselikes !== null) {
        const deletelikes = await this.likesRepository.deletelikes(postId, youlikes, loginId);
        return "message : 게시글의 좋아요를 취소하였습니다."
    }else if (youlikes === true && uselikes !== null) {
        return "message : 이미 게시글에 좋아요을 누르셨습니다."
    }else {
        return "message : 이미 싫어요를 누르셨습니다."
    }
  }
}
module.exports = LikesService;