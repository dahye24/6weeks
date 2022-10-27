const UserService = require('../services/user.service');
const Joi = require('joi');

const schema = Joi.object().keys({
    loginId        : Joi.string().alphanum().min(6).max(12).required(),
    password       : Joi.string().min(8).max(12).disallow('loginId').required(),
    confirmPassword: Joi.ref('password'),
});

class UserController {
    userService = new UserService();

    // 회원 가입.
    createUser = async (req, res) => {
        // joi 로 validate. Error 발생 시 throw.
        try {
            const validation = await schema.validateAsync(req.body);
        } catch (err) {
            console.log(err);
            return res.status(400).json({message: '양식에 맞게 입력해주세요.'});
        }
        // joi validate 성공시 req.body 꺼내기.
        try {
            // req.body 꺼내기.
            const {loginId, password} = req.body;

            // 회원 가입 userService
            const userData = await this.userService.createUser(loginId, password);
            res.status(200).json(userData);
        } catch (err) {
            console.log(err);
            return res.status(err.statusCode || 500).json({message: err.message});
        }

    };

    loginUser = async (req, res) => {
        try {
            const {loginId, password} = req.body;

            // UserService 에서 검증 후 매치되면 token 생성 후 return.
            const {token} = await this.userService.loginUser(loginId, password);

            // res.cookie('token', token);
            res.status(200).json({
                token: token,
            });
        } catch (err) {
            console.log(err);
            return res.status(err.statusCode || 500).json({message: err.message});
        }
    };
};

module.exports = UserController;