const usernameschema=require("../models/usernameSchema")
const snippetschema=require("../models/snippetSchema")


const addSnippet=async(req,res,next)=>{
    const username=req.user.username
    const {categories,keyword,code,scope,description}=req.body;
    try {
        const user=await usernameschema.findOne({username})
        if(user==null){
            return res.json({msg:"Please first create user"})
        }
        const task=await snippetschema.create({username,categories,keyword,code,scope,description})
        await usernameschema.findOneAndUpdate(
            { username },
            {
                $push: {
                    snippets: { id: task.id },
                },
            }
            );
        
        // console.log()
        res.json({task})
            
    } catch (error) {
        next(error)
    }   
}


module.exports={addSnippet}