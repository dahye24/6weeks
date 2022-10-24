const LikesService = require('../services/likes.service'); 

class LikesController {
  likesService = new LikesService(); 

//게시글 좋아요 누르기

updateLikes = async (req, res, next) => {
  //try{
      const { postId } = req.params;
      //const { youlikes } = req.body;
      const { loginId } = res.locals.user;
      const updatelikes = await this.likesService.updateLikes(postId, loginId);
      console.log(postId, loginId)
      res.status(200).json({ result: updatelikes}); 
  // }catch(err){
  //     return res.status(err.statusCode || 500).json({message: err.message});
  // } 
}

// updateLikes = async (req, res, next) => {
//   //try{
//       const { postId } = req.params;
//       const { youlikes } = req.body;
//       const { loginId } = res.locals.user;
//       const updatelikes = await this.likesService.updateLikes(postId, youlikes, loginId);
//       console.log(postId, youlikes, loginId)
//       res.status(200).json({ result: updatelikes}); 
//   // }catch(err){
//   //     return res.status(err.statusCode || 500).json({message: err.message});
//   // } 
// }
}
module.exports = LikesController;