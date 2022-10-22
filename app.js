const express = require('express');
const app = express();
const router = require('./routes/index')

<<<<<<< HEAD
app.use(express.json())  //bodyparser 역할 

app.use('/api',Router);
=======
app.use(router);
>>>>>>> e07761eed8cb8dff143248fdf8284e271066959c

app.listen(3000, () => {
    console.log("listening on port 3000")
})