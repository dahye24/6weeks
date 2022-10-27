const UserRepository = require('../repositories/user.repository');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const {Users} = require('../models');
// 암호화 연산 10회 설정
const saltRounds = 12;

require('dotenv').config();

class UserService {
    userRepository = new UserRepository();

    createUser = async (loginId, password) => {
        try {
            // loginId가 unique 인지 확인.
            const dupCheck = await Users.findOne({
                where: {loginId}
            });

            // loginId exist 확인.
            if (dupCheck !== null) {
                const err = new Error(`UserService Error`);
                err.message = `이미 존재하는 아이디입니다.`;
                err.statusCode = 400;
                throw err;
            }

            // password 암호화.
            const hash = bcrypt.hashSync(password, saltRounds);

            // hash 된 비밀번호로 회원정보 저장.
            const userData = await this.userRepository.createUser(loginId, hash);
            return {
                userId   : userData.null,
                loginId  : userData.loginId,
                createdAt: userData.createdAt,
            };
        } catch (err) {
            throw err;
        }

    };

    loginUser = async (loginId, password) => {
        try {

            // loginId로 DB에 있는 회원 정보 가져오기.
            const userData = await this.userRepository.findUser(loginId);  //없는 아이디로 로그인 할때 에러내용이 패스워드가 null로 나와서 아예 에러 뜨게 해버림

            if (userData === null) {
                const err = new Error(`UserService Error`);
                err.message = `가입 되어있는 정보가 아닙니다.`;
                err.statusCode = 400;
                throw err;
            }

            // 가져온 회원 정보에 있는 hash 된 비밀번호와 위에서 hash 한 비밀번호가 일치하는지 확인.
            const match = bcrypt.compareSync(password, userData.password);

            if (!match) {
                const err = new Error(`UserService Error`);
                err.message = `비밀번호가 일치하지 않습니다.`;
                err.statusCode = 400;
                throw err;
            }
            // 유효시간이 24시간인 token 발급.
            return {
                token: jwt.sign(
                    {userId: userData.userId},
                    process.env.SECRETKEY,
                    {expiresIn: '24h'})
            };
        } catch (err) {
            throw err;
        }
    };
}

module.exports = UserService;
