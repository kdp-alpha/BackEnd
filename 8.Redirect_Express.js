const express = require('express');

const app = express();

app.listen(3000);

app.get('/',(req,res)=>{
    res.send('<h1>Hello</h1>')
})

app.get('/about',(req,res)=>{
    res.send('<h1>About</h1>')
})


// redirects 
app.get('/about-us',(req,res)=>{
    res.redirect('/about');
})
