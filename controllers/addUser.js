const usernameschema=require("../models/usernameSchema")
const snippetschema=require("../models/snippetSchema")


const addUser=async(req,res,next)=>{
    // const {username}=req.body;
    const username=req.user.username
    // console.log(req.user)
    try {
        const task=await usernameschema.create({username})
        res.json({task})
    } catch (error) {
        next(error)
    }   
}


module.exports={addUser}