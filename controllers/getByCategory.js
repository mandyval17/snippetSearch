const usernameschema=require("../models/usernameSchema")
const snippetschema=require("../models/snippetSchema")


const getSnippetByCategoryPublic=async(req,res,next)=>{
    const {categories}=req.body;
    console.log(categories)
    try {
        const data=await snippetschema.find({public:true})
        const ans=[];
        for(let i=0;i<data.length;i++){
            for(let j=0;j<data[i].categories.length;j++){
                if((data[i].categories)[j]==categories){
                    ans.push(data[i])
                }
            }
        }
        res.json({ans})
    } catch (error) {
        next(error)
    }   
}


const getSnippetByCategoryPrivate=async(req,res,next)=>{
    const username=req.user.username
    const {categories}=req.body;
    console.log(username)
    try {
        const data=await usernameschema.findOne({username})
        const ans=[];
        for(let i=0;i<data.snippets.length;i++){
            const task=await snippetschema.findOne({_id:data.snippets[i].id})
            for(j=0;j<task.categories.length;j++){
                if(task.categories[j]==categories && task.public==false){
                    ans.push(task)
                }
            }
        }
        res.json({ans})
    } catch (error) {
        next(error)
    }   
}


module.exports={getSnippetByCategoryPublic,getSnippetByCategoryPrivate}