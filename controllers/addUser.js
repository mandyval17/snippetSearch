const usernameschema=require("../models/usernameSchema")
const snippetschema=require("../models/snippetSchema")


const addUser=async(req,res,next)=>{
    const {username}=req.body;
    try {
        const task=await usernameschema.create({username})
        res.json({task})
    } catch (error) {
        next(error)
    }   
}


module.exports={addUser}