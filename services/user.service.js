const UserRepository = require('../repositories/user.repository');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
// 암호화 연산 10회 설정
<<<<<<< HEAD
const salt = 10;
=======
const saltRounds = 12;
>>>>>>> e07761eed8cb8dff143248fdf8284e271066959c

require('dotenv').config();

class UserController {
    userRepository = new UserRepository();

    createUser = async (loginId, nickname, password) => {
        try {
            // password 암호화.
<<<<<<< HEAD
            const hash = await bcrypt.hash(password, salt);
=======
            const hash = bcrypt.hashSync(password, saltRounds);
>>>>>>> e07761eed8cb8dff143248fdf8284e271066959c
            // hash 된 비밀번호로 회원정보 저장.
            const userData = await this.userRepository.createUser(loginId, nickname, hash);

            return {
                userId   : userData.null,
                loginId  : userData.loginId,
                nickname : userData.nickname,
                createdAt: userData.createdAt,
            };
        } catch (err) {
            err = new Error(`UserService Error`);
            err.statusCode = 500;
            throw err;
        }

    };

    loginUser = async (loginId, password) => {
        try {
<<<<<<< HEAD
            // 비밀번호 salt로 hash 하기.
            const hash = await bcrypt.hash(password, salt);
            // loginId로 DB에 있는 회원 정보 가져오기.
            const userData = await this.userRepository.loginUser(loginId);
            // 가져온 회원 정보에 있는 hash 된 비밀번호와 위에서 hash 한 비밀번호가 일치하는지 확인.
            const match = await bcrypt.compare(userData.password, hash);
=======
            // loginId로 DB에 있는 회원 정보 가져오기.
            const userData = await this.userRepository.loginUser(loginId);
            // 가져온 회원 정보에 있는 hash 된 비밀번호와 위에서 hash 한 비밀번호가 일치하는지 확인.
            const match = bcrypt.compareSync(password, userData.password);
>>>>>>> e07761eed8cb8dff143248fdf8284e271066959c

            if (!match) {
                const err = new Error(`비밀번호가 일치하지 않습니다.`);
                err.statusCode = 400;
                throw err;
            }
            // 유효시간이 24시간인 token 발급.
            return {
                token: jwt.sign(
                    {userId: userData.userId, loginId: userData.loginId},
                    process.env.SECRETKEY,
                    {expiresIn: '24h'})
            };
        } catch (err) {
            throw err;
        }

    };
}

module.exports = UserController;