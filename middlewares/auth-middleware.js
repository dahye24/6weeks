<<<<<<< HEAD
const jwt = require("jsonwebtoken");
const { User } = require("../models");


module.exports = (req, res, next) => {
    const { authorization } = req.headers; 
    const [ tokenType, tokenValue ] = authorization.split(' '); 
    if (tokenType !== 'Bearer') { 
        res.status(401).send({ errorMessage: '로그인 후 이용 가능한 기능입니다' });
        return; 
    }
    try {
        const { userId } = jwt.verify(tokenValue, process.env.JWT_SECRET_KEY);
        User.findByPk(userId).then((user) => {
             res.locals.user = user;
             next(); 
        });
    } catch (error) {
        res.status(401).send({ errorMessage: "로그인 후 이용 가능한 기능입니다." });
        return;
    }
};
=======
require('dotenv').config();
const jwt = require("jsonwebtoken");
const {Users} = require("../models");


module.exports = (req, res, next) => {
    const authorization = req.cookies.token;

    if (!authorization) {
        res.status(401).json({
            errorMessage: "로그인 후 이용이 가능합니다.",
        });
        return;
    }

    try {
        const {userId} = jwt.verify(authorization, process.env.SECRETKEY);
        Users.findByPk(userId).then((user) => {
            res.locals.user = user;
            next();
        });
    } catch (err) {
        res.status(401).json({
            errorMessage: "로그인 후 이용이 가능합니다.",
        });
    }
};
>>>>>>> e07761eed8cb8dff143248fdf8284e271066959c
