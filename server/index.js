const express = require('express');
const ConnectToMongo = require('./db');
const app = express();

app.use(express.json);

port =7000;
app.listen(port,()=>{
    console.log("app is listening to port "+ port)
})

ConnectToMongo()