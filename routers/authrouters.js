const router=require("express").Router();
const passport=require('passport')
const express=require('express')
const app=express()


router.get('/login',(req,res)=>{
    res.send("login")
})
router.get('/google',passport.authenticate('google',{
    scope:['profile']
}))
router.get('/logout',(req,res)=>{
    req.logout()
    res.redirect('/auth/google')
})
router.get('/google/redirect',passport.authenticate('google'),(req,res)=>{
    // app.use("/abc",routers)
    res.redirect("auth/login")
    // res.send(req.user)
})

module.exports=router
