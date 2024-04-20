const usernameschema=require("../models/usernameSchema")
const snippetschema=require("../models/snippetSchema")




const getSnippetByKeyword=async(req,res,next)=>{
    const username=req.user.username
    const {input}=req.body;
    try {
        const data=await usernameschema.findOne({username})
        let ans=[]
        for(let i=0;i<data.snippets.length;i++){
            const task=await snippetschema.findOne({_id:data.snippets[i].id})
            const contains=task.keyword.startsWith(input)
            if(contains){
                ans.push(task)
            }
        }
        if(ans.length)  return res.json({ans})
        else return res.json({msg:"invalid keyword"})
    } catch (error) {
        next(error)
    }   
}


module.exports={getSnippetByKeyword}