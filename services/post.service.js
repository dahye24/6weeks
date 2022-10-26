const PostRepository = require('../repositories/post.repository');

class PostService {
    postRepository = new PostRepository();

//전체 게시글 목록 조회 
    findAllPost = async () => {
        const allPost = await this.postRepository.findAllPost();
        try {
            return allPost.map((postData) => {
                return {
                    postId   : postData.postId,
                    loginId  : postData.loginId,
                    typeofpet: postData.typeofpet,
                    product  : postData.product,
                    maker    : postData.maker,
                    photo    : postData.photo,
                    title    : postData.title,
                    content  : postData.content,
                    likes    : postData.likes,
                };
            });
        } catch (err) {
            err = new Error(`게시글 목록을 조회를 실패했습니다.`);
            err.statusCode = 500;
            throw err;
        }
    };

//게시글 상세 조회  & 댓글 조회
    findPostById = async (postId) => {
        try {
            const findPost = await this.postRepository.findPostById(postId);

            return {
                postId   : findPost.postId,
                loginId  : findPost.loginId,
                typeofpet: findPost.typeofpet,
                category : findPost.category,
                subcategory : findPost.subcategory,
                product  : findPost.product,
                maker    : findPost.maker,
                photo    : findPost.photo,
                title    : findPost.title,
                content  : findPost.content,
                likes    : findPost.likes,
                createdAt: findPost.createdAt,
                updatedAt: findPost.updatedAt,
            };
        } catch (err) {
            err = new Error(`게시물이 존재하지 않습니다.`);
            err.statusCode = 500;
            throw err;
        }
    };

//게시글 작성
    createPost = async (loginId, typeofpet, category, subcategory, title, maker, product, content, photo) => {
        try {
            await this.postRepository.createPost(
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
            return '게시글 작성에 성공하였습니다.';
        } catch (err) {
            err = new Error(`잘못된 정보 입니다.`);
            err.statusCode = 500;
            throw err;
        }
    };

//게시글 수정

    updatePost = async (postId, content, loginId) => {
        try {
            const FindloginId = await this.postRepository.findloginId(postId);

            if (loginId === FindloginId[0].dataValues.loginId) {
                await this.postRepository.updatePost(postId, content);
                await this.postRepository.findPostById(postId);

                return '리뷰를 수정했습니다.';
            } else {
                return '리뷰 작성자의 loginId와 다릅니다.';
            }
        } catch (err) {
            err = new Error(`수정가능한 게시글이 없습니다.`);
            err.statusCode = 500;
            throw err;
        }
    };


//게시글 삭제
    deletePost = async (postId, loginId) => {
        try {
            const findPost = await this.postRepository.findPostById(postId);

            if (loginId === findPost.loginId) {
                await this.postRepository.deletePost(postId, loginId);

                return '리뷰를 삭제하였습니다.';
            } else {
                return '삭제 권한이 없습니다';
            }
            ;
        } catch (err) {
            err = new Error(`삭제 가능한 게시글이 없습니다.`);
            err.statusCode = 500;
            throw err;
        }
    };
}

module.exports = PostService;