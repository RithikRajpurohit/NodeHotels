const mongoose = require('mongoose')


const menudata = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    ingrediant:{
        type:[String],
        required:[]
    }
})

const Menucard = mongoose.model('Menucard',menudata)

module.exports= Menucard