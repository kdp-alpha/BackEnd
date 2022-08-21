const fs = require("fs");
const http = require("http");

const server = http.createServer((req,res)=>{
    res.setHeader('Content-type','text/html');

    let path = './Views';
    switch(req.url){
        case '/':
            path += '/index.html';
            res.statusCode = 200;
            break
        case '/about':
            path += '/About.html'
            res.statusCode = 200;
            break;
        default:
            path += '/error.html';
            res.statusCode = 404    ;
    }


    fs.readFile(path,(err,fileData)=>{
        if(err){
            console.log(err);
        }
        else{
            res.end(fileData);
        }
    })
})

server.listen(3000,'localhost',()=>{
    console.log('server is listening');
})
