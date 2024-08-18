const { uniq } = require('lodash')
const mongoose = require('mongoose')

const personschema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    age:{
        type:Number
    },
    work:{
        type:String,
        enum:["chef","manager","waiter"]
    },
    salary:{
        type:Number,
        required:true,
        default:10000
    },
    email:{
        type:String,
        required:true,
        uniq:true
    }
})

// create person model 

const person = mongoose.model("person", personschema)

module.exports=person