const mongoose = require('mongoose')

// define a mongose url 
const mongooseurl = 'mongodb://localhost:27017/hotels'


//set up mongodb connection 

mongoose.connect(mongooseurl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})


// get the default connection 
// mongodb have a default connection object called as MongoDB connection 

const db = mongoose.connection

db.on("connected", ()=>{
    console.log("mongodb server is connected ")
    
})
db.on("disconnected", ()=>{
    console.log("mongodb server is now disconnected ")
    
})

module.exports=db