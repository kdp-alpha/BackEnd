const express = require('express');

const app = express();
let users = {}

//middleware function
app.use(express.json());

app.get('/users',(req,res)=>{
    res.send(users)
})

app.post('/users',(req,res)=>{
    console.log(req.body);  
    users = req.body;
    res.send("Data received");
    // res.json({
    //     message:'data recieved succefully',
    //     user:req.body
    // });
})


//update -> patch
app.patch('/users',(req,res) => {
    console.log(req.body);
  
    let data = req.body;
    for(key in data){
        console.log(key);
        users[key] = data[key];
    }
    res.send("Data updated");
})

app.delete('/users',(req,res)=>{
    users = {};
    res.send("data deleted");
})

app.listen(3000);
