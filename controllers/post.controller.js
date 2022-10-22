const PostService = require("../services/post.service");
const Joi = require('joi');
const re_title = /^[a-zA-Z0-9\s\S]{1,40}$/;
const re_content = /^[\s\S]{1,3000}$/;

class PostsController {
  postService = new PostService();

//전체 게시글 목록 조회 
getPosts = async (req, res, next) => {
    const posts = await this.postService.findAllPost();
    res.status(200).json({ data: posts });
  };

//게시글 상세 조회  & 댓글 조회
getPostById = async (req, res, next) => {
    const { postId } = req.params;
    const post = await this.postService.findPostById(postId);

    res.status(200).json({ data: post });
  };

  //게시글 작성
createPost = async (req, res, next) => {
    const postSchema = Joi.object({
      title: Joi.string().pattern(re_title).required(),
      content: Joi.string().pattern(re_content).required(),
    });
    const { typeofpet, category, subcategory, title, maker, product, content, photo, } = await postSchema.validateAsync(req.body);

    const { loginId, likes } = res.locals.user;
    const createPostData = await this.postService.createPost(
        loginId,
        typeofpet,
        category,
        subcategory,
        title,
        maker,
        product,
        content,
        photo,
        likes
    );

    res.status(200).json({ data: createPostData });
  };  

//게시글 수정
updatePost = async (req, res, next) => {
    const { postId } = req.params;
    const { content } = req.body;
    const { loginId } = res.locals.user

    const updatePost = await this.postService.updatePost(
      postId,
      content,
      loginId
    );

    res.status(200).json({ data: updatePost });
  };
 
//게시글 삭제
deletePost = async (req, res, next) => {
    const { postId } = req.params;
    
    const deletePost = await this.postService.deletePost(postId);
    
    res.status(200).json({ data: deletePost, message: "리뷰를 삭제했습니다." });
    };  

}
module.exports = PostsController;