const UserService = require('../services/user.service');
const Joi = require('joi');

const schema = Joi.object().keys({
  loginId: Joi.string().alphanum().min(8).max(12).required(),
  nickname: Joi.string().min(2).max(30).required(),
  password: Joi.string().disallow("loginId").required(),
  confirmPassword: Joi.ref("password"),
})

class UserController {
  userService = new UserService();

  createUser = async (req, res) => {
    try {
      const {loginId, nickname, password, confirmPassword} = req.body;
      if (password !== confirmPassword) {
        return res.json({message: "비밀번호가 일치하지 않습니다."})
      }

      const userData = await this.userService.createUser(loginId, nickname, password);
      res.status(200).json(userData);
    } catch (err) {
      res.status(400).json({errorMessage: "입력 정보를 조건에 맞게 입력해주세요."})
    }

  };

  loginUser = async (req, res) => {

  };
}

module.exports = UserController;