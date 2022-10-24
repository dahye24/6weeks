const {Posts} = require('../models');

class PostRepository {

//전체 게시글 목록 조회  
findAllPost = async () => {
  try{
    const post = await Posts.findAll(
      {attributes : {exclude: ['content']},
      order: [['createdAt', 'DESC']],
    });
    return post;
  }catch (err) {
    const error = new Error(`잘못된 정보 입니다.`);
    error.statusCode = 500;
    throw error;
  }
};

//게시글 상세 조회  & 댓글 조회
findPostById = async (postId) => {
  try{
    const post = await Posts.findByPk(postId);
    //console.log(postId)
    return post;
  }catch{
      const error = new Error(`잘못된 정보 입니다.`);
      error.statusCode = 500;
      throw error;
    }
  };


//게시글 작성
createPost = async(loginId, typeofpet, category, subcategory, title, maker, product, content, photo) => {
  try{
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
      likes : 0
    });
      console.log(createPostData);
        return createPostData;
  }catch{
      const error = new Error(`잘못된 정보 입니다.`);
      error.statusCode = 500;
      throw error;
  }
};

//게시글 수정
updatePost = async (postId, content) => {
  try{
    const updatePostData = await Posts.update(
      {content },
      { where: { postId} }
    );
    return updatePostData;
  }catch{
    const error = new Error(`잘못된 정보 입니다.`);
    error.statusCode = 500;
    throw error;
  }
}    

//loginId와 postId가 같을때 수정해라
findloginId = async (postId) => {
  try{
    const findloginId = await Posts.findAll( { where : {postId} });
    console.log(findloginId[0].dataValues.postId)
    return findloginId;
  }catch{
    const error = new Error(`잘못된 정보 입니다.`);
    error.statusCode = 500;
    throw error;
  }
}

  //게시글 삭제
deletePost = async (postId, loginId) => {
  try{
    const updatePostData = await Posts.destroy({ where: {postId, loginId} });
    console.log( (postId, loginId))
    return updatePostData;
  }catch{
    const error = new Error(`잘못된 정보 입니다.`);
    error.statusCode = 500;
    throw error;
  }
}
}

module.exports = PostRepository;