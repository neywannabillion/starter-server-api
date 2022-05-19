const express = require("express");
const apiRouter = require("./app");

const app = express()
const port = process.env.NODE_ENV == 'prod' ? 5000 : 4000


app.use(express.json());
app.use(apiRouter);

//Listening Port
app.listen(port, () => {
    console.log(`RUN WITH ${port}`)
})
