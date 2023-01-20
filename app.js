const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('MyApp');
const morgan = require('morgan');
const app = express();
const port = 3000;

app.get("/", (req, res) =>{

    res.send("Hello Jimmy") 

})

app.listen(port, ()=>{
    console.log("Listening on port : "+ chalk.green(port));
})