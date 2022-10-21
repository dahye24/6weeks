const UserRepository = require('../repositories/user.repository');

class UserController {
  userRepository = new UserRepository();

  createUser = async (loginId, nickname, password) => {
    const userData = await this.userRepository.createUser(loginId, nickname, password);

    return {
      userId: userData.userId,
      loginId: userData.loginId,
      nickname: userData.nickname,
      createdAt: userData.createdAt,
    }
  }
}

module.exports = UserController;