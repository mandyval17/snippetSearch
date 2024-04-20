const usernameschema=require("../models/usernameSchema")
const snippetschema=require("../models/snippetSchema")


const getSnippetId=async(req,res,next)=>{
    const username=req.user.username
    const{id}=req.body;


    try {
        const user=await usernameschema.findOne({username})
        for(let i=0;i<user.snippets.length;i++){
            if(user.snippets[i].id==id){
                const password=username+'_'+id;
                return res.json({password})
            }
        }
        return res.json({msg:"invalid Id"});
    } catch (error) {
        next(error)
    }

  
}


const getSnippetById=async(req,res,next)=>{
    const username=req.user.username
    const {password}=req.body;
    try {
        const data=await usernameschema.findOne({username})
        const task=password.split("_")
        const sender=await usernameschema.findOne({username:task[0]})
        for(let i=0;i<sender.snippets.length;i++){
            if(sender.snippets[i].id==task[1]){
                for(let j=0;j<data.snippets.length;j++){
                    if(data.snippets[j].id==task[1]){
                        return res.json({msg:"This snippet already exists"})
                    }
                }
                const Data=data.snippets.push({id:task[1]})
                await data.save()
                return res.json({Data})
            }
        }
        return res.json({msg:"Invalid password"})

    } catch (error) {
        next(error)
    }   
}


module.exports={getSnippetId,getSnippetById}