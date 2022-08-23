const express = require("express");

const app = express();



//params
app.get('/user/:username',(req,res)=>{
    console.log(req.params.username);
    res.send("Params recieved Succesfully");
})

app.listen(3000)
