

const express = require('express')
const app = express()
const db = require('./db')
require("dotenv").config()

const bodyParser= require('body-parser')  // very important step to follow the body parder tp ghet the user data 
app.use(bodyParser.json()) //req.data






app.get("/",(req,res)=>{
    res.send("hi welcome to the hotel what i bring for u")
})


app.get("/kajupanner",function(req,res){
    res.send("sure sir we lovw to servies the panner")
})

app.get("/butterroti",(req,res)=>{
    res.send("yes we will bring this to you")
})


const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log("the server is hostd in our local computer");
    
})

app.get("/json" , (req,res)=>{
    const cusromorder={
        dish:"idil",
        size:"12mn diameter",
        issamber:true,
        ischutey:false
    }
    res.send(cusromorder)
   
})




const personRouter = require('./routes/personRouter')
app.use("/",personRouter)

const menurouter= require("./routes/menuItem")

app.use("/",menurouter)