const express = require('express');
const app = express();
const Router = require('./routes')

app.use(express.json())  //bodyparser 역할 

app.use('/api',Router);

app.listen(3000, () => {
    console.log("listening on port 3000")
})