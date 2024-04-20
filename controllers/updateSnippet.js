const usernameschema=require("../models/usernameSchema")
const snippetschema=require("../models/snippetSchema")


const updateSnippet=async(req,res,next)=>{
    const username=req.user.username
    const {id,public,categories,keyword,code,scope,description}=req.body;
    try {
        
        
        const task=await usernameschema.findOne({username})
        if(task==null){
            return res.json({msg:"Username not found"});
        }
        for(let i=0;i<task.snippets.length;i++){
            if(task.snippets[i].id==id){
                const data=await snippetschema.findOneAndUpdate(
                    {_id:id},
                    {public,categories,keyword,code,scope,description},
                    {new:true}
                )
                return res.json({data})
            }
        }
    } catch (error) {
        next(error)
    }   
}


module.exports={updateSnippet}