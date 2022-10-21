const express = require('express');
const app = express();
const Router = require('./routes')

const {Users} = require("./models");


app.use(Router);

Router.post("/signup", async (req, res) => {
  try{
     const {nickname, password, confirm } = req.body

    const existsUsers = await Users.findAll({ 
      where: {
      [Op.or]: [{ nickname:nickname }],
      },
      })
      console.log(existsUsers.length)      

    if (existsUsers.length) {
        res.status(400).send({errorMessage: "이미 사용중인 닉네임입니다."
        })
        return
      }  

     if (password !== confirm) {
      res.status(400).send({errorMessage: "패스워드가 패스워드 확인란과 다릅니다."
    })
      return
    }

    if (nickname.includes(password)) {
         res.status(412).send({
          errorMessage: '패스워드에 닉네임이 포함되어 있습니다.',
        });
        return
        }  
    
    await User.create({nickname, password })
    res.status(201).send({ Message: "회원가입에 성공하였습니다."})

    } catch (error) {
    console.log(`${req.method} ${req.originalUrl} : ${error.message}`);
    return res.status(400).send({
      errorMessage: '요청한 데이터 형식이 일치하지 않습니다.',
    });
  }
})

  
  //로그인
  Router.post("/login", async (req, res) => {
  const { nickname, password } = req.body

  const user = await Users.findOne(
    {where: 
      {nickname}
    })
  
  if (!user || password !== user.password) {
    res.status(400).send({
      errorMessage: "닉네임 또는 패스워드가 틀렸습니다.",
    })
    return
  }

  res.send({
    token: jwt.sign({ nickname: nickname , userId:user.id}, "my-secret-key"),
  })
})


app.listen(3000, () => {
    console.log("listening on port 3000")
})