const express = require('express');
const app = express();

const router = express.Router();
//const router = require('./routes/index')

app.use(router);

app.listen(3000, () => {
    console.log("listening on port 3000")
})