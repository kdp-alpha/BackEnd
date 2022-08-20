//This is how you can show entire html page
const http = require("http");
const fs = require("fs");

const server = http.createServer((req,res)=>{
    console.log('req is made');
   res.setHeader('Content-type','text/html');
    fs.readFile('./Views/index.html',(err,fileData)=>{
        if(err){
            console.log(err);
        }
        else{
            res.write(fileData);
            res.end();
        }
    })
   
})


server.listen(3000,'localhost',()=>{
    console.log('server is listening at 3000 port');
})
