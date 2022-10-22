const {Users} = require('../models');

class UserRepository {
    createUser = async (loginId, nickname, password) => {
        try {
            // 유저 정보 생성.
            const userData = await Users.create({loginId, nickname, password});
            return userData;
        } catch (err) {
            const error = new Error(`잘못된 정보 입니다.`);
            error.statusCode = 500;
            throw error;
        }

    };

    loginUser = async (loginId) => {
        try {
            // loginId 와 일치하는 회원 정보 서칭.
            const userData = await Users.findOne({
                where: {loginId},
            });
            return userData;
        } catch (err) {
            const error = new Error(`잘못된 정보 입니다.`);
            error.statusCode = 500;
            throw error;
        }

    };
}

module.exports = UserRepository;