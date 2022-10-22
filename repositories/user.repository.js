const {Users} = require('../models');

class UserRepository {
  createUser = async (loginId, nickname, password) => {
    const userData = await Users.create({loginId, nickname, password})
    return userData;
  }
}

module.exports = UserRepository;