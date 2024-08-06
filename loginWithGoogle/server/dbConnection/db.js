const mongoose = require('mongoose');

// const require = 
const url ="mongodb://127.0.0.1:27017/Login" 

const dbConnect = async ()=>{
    try {
        mongoose.connect(url ,{
            // useNewUrlParser: true, 
            // useUnifiedTopology: true
        });
        console.log("Db connected");
    } catch (error) {
        console.log('error: ', error);  
    }
}


module.exports = dbConnect();