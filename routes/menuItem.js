const express = require("express")
const router = express.Router()

const Menucard = require("./../modules/Menuitem")

router.post("/menu", async(req,res)=>{
    try{
        const data = req.body
        const menuitem = new Menucard(data)

        const response=await menuitem.save()
        console.log("the menu data is saved ");
        res.status(200).json(response)

    }catch(err){
        console.log(err);
        res.status(500).json({message:"are bhai data kuch tho order kar "})
        
    }
})

router.get("/menu", async(req,res)=>{
    try{

        const info = await Menucard.find()
        console.log("the data is fected ");
        res.status(200).json(info)
        

    }catch(err){
        console.log("the data is not able to ber fetched ");
        res.status(500).json({error:"abi kuch nahi ha for eating"})
        

    }
})


module.exports= router