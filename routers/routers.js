const router=require("express").Router()

const { addSnippet } = require("../controllers/addSnippet")
const { addUser } = require("../controllers/addUser")


router.route("/addusername").post(addUser)
router.route("/addsnippets").post(addSnippet)

module.exports=router