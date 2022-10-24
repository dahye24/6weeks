
require('dotenv').config();
const jwt = require("jsonwebtoken");
const {Users} = require("../models");

module.exports = (req, res, next) => {
    try {
        const cookies = req.cookies['token'];
        if (!cookies) {
            return res.status(403).send({
                errorMessage: '로그인이 필요한 기능입니다.',
            });
        }

    const { token } = cookies;

    const { userId } = jwt.verify(token, process.env.SECRETKEY);
    
    const user = Users.findByPk(userId).then(user=>{
      res.locals.user = user;
      
      next();
    })
  } catch (err) {
    res.status(401).json({
      errorMessage: '로그인 후 이용이 가능합니다.',
    });
  }
};

