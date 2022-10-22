const LikesService = require('../services/likes.services'); 

class LikesController {
  likesService = new LikesService(); 

//좋아요 목록 불러오기
getLikes = async (req, res, next) => {
    const {loginId} = res.locals.user
    const likes = await this.likesService.getLikes(loginId);  
    res.status(200).json({ data: likes })  
  }

//게시글 좋아요 누르기
updateLikes = async (req, res, next) => {
    const { postId } = req.params;
    const { youlikes } = req.body
    const { loginId } = res.locals.user
    const updatelikes = await this.likesService.updateLikes(postId, youlikes, loginId);
    res.status(200).json({ result: updatelikes });
  };  
}

module.exports = LikesController;