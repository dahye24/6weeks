const express = require('express');
const app = express();
<<<<<<< HEAD

const router = express.Router();
//const router = require('./routes/index')

=======
const router = require('./routes/index')

>>>>>>> e07761eed8cb8dff143248fdf8284e271066959c
app.use(router);

app.listen(3000, () => {
    console.log("listening on port 3000")
})