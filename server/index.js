const express = require('express');
const ConnectToMongo = require('./db');
const app = express();

app.use(express.json);

app.use('/api/adminreg',require('./router/adminRegRouter'))
app.use('/api/userreg',require('./router/userRegRouter'))
app.use('/api/item',require('./router/itemRouter'))
app.use('/api/request',require('./router/requestRouter'))

port =7000;
app.listen(port,()=>{
    console.log("app is listening to port "+ port)
})

ConnectToMongo()