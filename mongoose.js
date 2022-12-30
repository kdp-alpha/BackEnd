const mongoose = require('mongoose')
mongoose.set('strictQuery',false);

const connectionString =
"mongodb+srv://Node:pDSgt7Wtcis8aczt@cluster0.fpwvnni.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority";

mongoose.connect(connectionString,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log('db is connected');
})
