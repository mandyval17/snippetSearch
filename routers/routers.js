const router=require("express").Router()

const { addSnippet } = require("../controllers/addSnippet")
const { addUser } = require("../controllers/addUser")
const { getSnippetByCategoryPublic,getSnippetByCategoryPrivate } = require("../controllers/getByCategory")
const { updateSnippet } = require("../controllers/updateSnippet")
const { getSnippetId,getSnippetById } = require("../controllers/getSnippetsById")
const { getSnippetByKeyword } = require("../controllers/getSnippetByKeyword")


router.route("/add/username").post(addUser)
router.route("/add/snippet").post(addSnippet)
router.route("/update/snippet").post(updateSnippet)
router.route("/get/public").post(getSnippetByCategoryPublic)
router.route("/get/private").post(getSnippetByCategoryPrivate)
router.route("/get/Id").post(getSnippetId)
router.route("/get/byId").post(getSnippetById)
router.route("/get/byKeyword").post(getSnippetByKeyword)

module.exports=router