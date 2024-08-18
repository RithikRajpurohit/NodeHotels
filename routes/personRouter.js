const express =require('express')
const router = express.Router()
const person = require("./../modules/Person")

router.post('/data', async (req,res)=>{

    try {
      
      const data = req.body
       // every time whwn we enter the new data is stored 
      const newperson = new person(data)
  
      // now save the new data in the db 
      const resonse = await newperson.save()
      
  
      console.log("data is saved in the db ")
      res.status(200).json(resonse)
    }
    catch(err){
  
      console.log(err)
      res.status(500).json({error:"internal server error "})
  
    }
  
  
  })
  
  
  router.get("/data", async (req,res)=>{
      try{
          const data= await person.find()
          console.log("data id fected ");
          res.status(200).json(data)
  
      }catch(err){
          console.log(err)
          res.status(500).json({error:"internal server error "})
      
      }
     
      
  })

  
router.get("/data/:worktype", async (req,res)=>{


    const worktype = req.params.worktype;  // extra the worktype from the url 

    
        try{
            if(worktype=="chef" || worktype=="manager" || worktype=="waiter")
                {
                    const response = await person.find({work:worktype})
                    console.log("response is fetched");
        
                    res.status(200).json(response)
                    
                }
                else{
                    console.log("the data is not fetched ");
                    res.status(404).json({error:"enter the correct value"})
                    
                }

        }catch(err){
            console.log(err);
            res.status(500).json({error:"internal server error"})
            
        }

})

router.put("/data/:id", async (req, res) => {
    try {
        const personid = req.params.id;
        const persondata = req.body;
        const response = await person.findByIdAndUpdate(personid, persondata, {
            new: true,
            runValidators: true,
        });

        if (!response) {
            console.log("The data is not available for the required ID.");
            return res.status(404).json({ error: "Not found by the ID" });
        }

        console.log("The data is updated.");
        return res.status(200).json(response);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: "Internal server error" });
    }
});

module.exports= router

router.delete("/data/:id", async (req,res)=>{
    try{

        const dataid = req.params.id

        const resonse = await person.findByIdAndDelete(dataid)
        if(!resonse)
        {
            res.status(404).json({error:"the person is not found"})
        }

        res.status(200).json({message:"the person is successfully deleted"})

    }catch(err){
        res.status(500).json({error:"not founded"})
    }

    // second commit 
})

