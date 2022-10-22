const UserService = require('../services/user.service');
const Joi = require('joi');

const schema = Joi.object().keys({
    loginId        : Joi.string().alphanum().min(6).max(12).required(),
    password       : Joi.string().disallow('loginId').required(),
    confirmPassword: Joi.ref('password'),
});

class UserController {
    userService = new UserService();

    createUser = async (req, res) => {
        try {
            // joi 로 validate. Error 발생 시 catch.
            await schema.validateAsync(req.body);

            const {loginId, password} = req.body;
            console.log(password)

            // 회원가입 된 유저의 정보 response.
            const userData = await this.userService.createUser(loginId, password);
            res.status(200).json(userData);
            console.log(res)
        } catch (err) {
            console.log(err);
            return res.status(err.statusCode || 500).json({message: err.message});
        }

    };

    loginUser = async (req, res) => {
        try {
            const {loginId, password} = req.body;
            // UserService 에서 검증 후 매치되면 token 생성 후 return.
            const token = await this.userService.loginUser(loginId, password);
            res.cookie('token', token);
            res.status(200).json({message: '로그인이 되었습니다.'});
        } catch (err) {
            console.log(err);
            return res.status(err.statusCode || 500).json({message: err.message});
        }
    };
};

module.exports = UserController;