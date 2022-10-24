const PostService = require("../services/post.service");
// const Joi = require('joi');
// const re_title = /^[a-zA-Z0-9\s\S]{1,40}$/;
// const re_content = /^[\s\S]{1,3000}$/;

class PostsController {
  postService = new PostService();

//전체 게시글 목록 조회 
getPosts = async (req, res, next) => {
    try{
        const posts = await this.postService.findAllPost();    
        res.status(200).json({ data: posts });
    }catch(err){
        return res.status(err.statusCode || 500).json({message: err.message});
    }
};

//게시글 상세 조회  & 댓글 조회
getPostById = async (req, res, next) => {
  try{
    const { postId } = req.params;
    const post = await this.postService.findPostById(postId);
    res.status(200).json({ data: post }); 
  }catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({message: err.message});
  }
}  

//게시글 작성
createPost = async (req, res, next) => {
  try{
    // const postSchema = Joi.object({
    //   title: Joi.string().pattern(re_title).required(),
    //   content: Joi.string().pattern(re_content).required(),
    // });
    const {loginId} = res.locals.user;
    const {typeofpet, category, subcategory, title, maker, product, content, photo } = req.body

    const createPostData = await this.postService.createPost(
        loginId,
        typeofpet,
        category,
        subcategory,
        title,
        maker,
        product,
        content,
        photo
    );
    res.status(200).json({ data: createPostData });
  }catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({message: err.message});
  }
};

//게시글 수정
updatePost = async (req, res, next) => {
  try{
    const { postId } = req.params;
    const { content } = req.body;
    const { user } = res.locals;

    const updatePost = await this.postService.updatePost(
      postId,
      content,
      user.loginId,
    );
    res.status(200).json({ message: updatePost });
  }catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({message: err.message});
  }
};
 
//게시글 삭제
deletePost = async (req, res, next) => {
  try{
    const { postId } = req.params;
    const { user } = res.locals;
    
    const deletePost = await this.postService.deletePost(postId, user.loginId);
    res.status(200).json({ message: deletePost});
    }catch (err) {
      console.log(err);
      return res.status(err.statusCode || 500).json({message: err.message});
  }
}; 

}
module.exports = PostsController;