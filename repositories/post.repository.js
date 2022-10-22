const {Posts} = require('../models');

class PostRepository {

//전체 게시글 목록 조회  
findAllPost = async () => {
    const post = await Posts.findAll(
      {attributes : {exclude: ['content']},
      order: [['createdAt', 'DESC']],
    });

    return post;
  };

//게시글 상세 조회  & 댓글 조회
findPostById = async (postId) => {
    const post = await Posts.findByPk(postId);
    //console.log(postId)
    return post;
  };


//게시글 작성
createPost = async(loginId, typeofpet, category, subcategory, title, maker, product, content, photo) => {
    const createPostData = await Posts.create({
      loginId,
      typeofpet,
      category,
      subcategory,
      title,
      maker,
      product,
      content,
      photo,
    });
    console.log(createPostData);

    return createPostData;
  };

//게시글 수정
updatePost = async (postId, content) => {
    const updatePostData = await Posts.update(
      {content },
      { where: { postId} }
    );
    return updatePostData;
  };  

//loginId와 postId가 같을때 수정해라
findloginId = async (postId) => {
    const findloginId = await Posts.findAll( { where : {postId} });
    console.log(findloginId[0].dataValues.postId)
    return findloginId;
  };


  //게시글 삭제
deletePost = async (postId) => {
    const updatePostData = await Posts.destroy({ where: { postId } });

    return updatePostData;
};
}



module.exports = PostRepository;