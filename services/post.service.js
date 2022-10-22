const PostRepository = require('../repositories/post.repository');

class PostService {
  postRepository = new PostRepository();

//전체 게시글 목록 조회 
findAllPost = async () => {
    const allPost = await this.postRepository.findAllPost() 

    return allPost.map((postData) => {
      return {
        postId: postData.postId,
        loginId: postData.loginId,
        title: postData.title,
        likes: postData.likes,
        // typeofpet : postData.typeofpet,
        // maker : postData.maker,
        // product : productData.product,
        // photo : photoData.photo,
        // content: postData.content,
      };
    });
  };

//게시글 상세 조회  & 댓글 조회
findPostById = async (postId) => {
    const findPost = await this.postRepository.findPostById(postId);

    return {
      postId: findPost.postId,
      loginId: findPost.loginId,
      title: findPost.title,
      content: findPost.content,
      createdAt: findPost.createdAt,
      updatedAt: findPost.updatedAt,
    };
  };

  //게시글 작성
  createPost = async (loginId, typeofpet, category, subcategory, title, maker, product, content, photo) => {
    const createPostData = await this.postRepository.createPost(
      loginId,
      typeofpet,
      category,
      subcategory,
      title,
      maker,
      product,
      content,
      photo,
    );

    return  "message : 게시글 작성에 성공하였습니다."
  };

//게시글 수정

updatePost = async (postId, content, loginId) => {
  console.log(postId, content, loginId)
    const FindloginId = await this.postRepository.findloginId(postId)

    if (loginId === FindloginId[0].dataValues.loginId) {
    await this.postRepository.updatePost(postId, content);
    const updatePost = await this.postRepository.findPostById(postId);
    
      return "리뷰를 수정했습니다."
    }else {
      return "리뷰 작성자의 loginId와 다릅니다."
    }
};


//게시글 삭제
deletePost = async (postId) => {
    const findPost = await this.postRepository.findPostById(postId);
    await this.postRepository.deletePost(postId);

    return {
      postId: findPost.postId,
      loginId: findPost.loginId,
      title: findPost.title,
      content: findPost.content,
      createdAt: findPost.createdAt,
      updatedAt: findPost.updatedAt,
    };
  };

}
module.exports = PostService;