const http = require("http");

//call back function in which request and result
const server = http.createServer((req,res)=>{
    console.log('request is made from browser to server');
})

//now we created server we have to make a listener which will listen 

//listen take 3 parmeter port number,host by default localhost,call back function
server.listen(3000,'localhost',()=>{
    console.log('server is listening at 3000 port');
})
