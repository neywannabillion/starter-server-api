const express = require("express");
const config =  require('./config/config_env');
const apiRouter = require("./app");

const app = express()
const port = config.PORT || 8080


app.use(express.json());
app.use(apiRouter);

//Listening Port
app.listen(port, () => {
    console.log(`RUN WITH ${port}`)
})
