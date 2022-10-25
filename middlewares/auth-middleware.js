
require('dotenv').config();
const jwt = require("jsonwebtoken");
const {Users} = require("../models");

module.exports = (req, res, next) => {
    try {
        const [tokenType, tokenValue] = req.headers['authorization'].split(" ");
        console.log(tokenType)
        console.log(tokenValue)
        if (tokenType !== "Bearer") {
            return res.status(403).send({
                errorMessage: '로그인이 필요한 기능입니다.',
            });
        }

        const {userId} = jwt.verify(tokenValue, process.env.SECRETKEY);
        console.log(userId)

        const user = Users.findByPk(userId).then(user=>{
            res.locals.user = user;
            console.log(user)
            next();
        })



    } catch (err) {
        res.status(401).json({
            errorMessage: "로그인 후 이용이 가능합니다.",
        });
    }
}
