const http = require("http");

//show res from server to browser
const server = http.createServer((req,res)=>{
   res.setHeader('Content-type','text/plain');
   res.write('Hello Coders');
   res.end();
})

//now we created server we have to make a listener which will listen 

//listen take 3 parmeter port number,host by default localhost,call back function
server.listen(3000,'localhost',()=>{
    console.log('server is listening at 3000 port');
})
