const {Users} = require('../models');

class UserRepository {
    // User 정보 생성.
    createUser = async (loginId, hash) => {
        try {
            // 유저 정보 생성.
            const userData = await Users.create({loginId, password: hash});
            return userData;
        } catch (err) {
            console.log(err);
            err.message = `User DB 오류`;
            err.statusCode = 500;
            throw err;
        }
    };
    // loginId로 User 정보 찾기
    findUser = async (loginId) => {
        try {
            // loginId 와 일치하는 회원 정보 서칭.
            const userData = await Users.findOne({
                where: {loginId},
            });
            return userData;
        } catch (err) {
            err.message = (`찾는 정보가 없습니다.`);
            err.statusCode = 500;
            throw err;
        }
    };
}

module.exports = UserRepository;