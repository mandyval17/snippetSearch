const router=require("express").Router()

const { addSnippet } = require("../controllers/addSnippet")
const { addUser } = require("../controllers/addUser")
const { getSnippetByCategoryPublic,getSnippetByCategoryPrivate } = require("../controllers/getByCategory")
const { updateSnippet } = require("../controllers/updateSnippet")
const { getSnippetId,getSnippetById } = require("../controllers/getSnippetsById")
const { getSnippetByKeyword } = require("../controllers/getSnippetByKeyword")


const authCheck=(req,res,next)=>{
    if(!(req.user)) return res.redirect("/auth/login")
    else next()
}


router.route("/add/username").get(addUser)
router.route("/add/snippet").post(authCheck,addSnippet)
router.route("/update/snippet").post(authCheck,updateSnippet)
router.route("/get/public").post(authCheck,getSnippetByCategoryPublic)
router.route("/get/private").post(authCheck,getSnippetByCategoryPrivate)
router.route("/get/Id").post(authCheck,getSnippetId)
router.route("/get/byId").post(authCheck,getSnippetById)
router.route("/get/byKeyword").post(authCheck,getSnippetByKeyword)

module.exports=router