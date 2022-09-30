var nodeMailer = require('nodemailer');
var transport = nodeMailer.createTransport({
    host:'smtp.gmail.com',
    port:587,//smtp port to secure mail services
    secure:false,
    requireTLS:true,
    auth:{
        user:'sauskeu91@gmail.com',
        pass:'outhphnwlpkkvrxo'
    }
})

var mailOptions = {
    from:'sauskeu91@gmail.com',
    to:'sauskeu91@gmail.com',
    subject:'testing mail',
    text:'Hello pls check this mail'
}

transport.sendMail(mailOptions,function(err,info){
    if(err){
        console.log(err)
    }
    else{
        console.log("email has been send",info.response);
    }
})
