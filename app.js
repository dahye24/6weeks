const express = require('express');
const app = express();
const router = require('./routes/index')
const cors = require('cors');

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}))

app.use(router);


app.listen(3000, () => {
    console.log("listening on port 3000")
})