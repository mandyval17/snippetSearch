const passport=require("passport")
const GoogleStrategy=require("passport-google-oauth20")
const googleauth=require('../models/google-authschema')
require("dotenv").config()
passport.serializeUser((user,done)=>{
    done(null,user.id)
})

passport.deserializeUser(async(id,done)=>{
    const task=await googleauth.findById(id)
    done(null,task)
})


passport.use(
    new GoogleStrategy({
        callbackURL:process.env.CALL_BACK,
        clientID:process.env.CLIENT_ID,
        clientSecret:process.env.CLIENT_SECRET
    },async(Accesstoken,refreshToken,profile,done)=>{
        const task=await googleauth.findOne({googleid:profile.id})
        if(task==null){
            const data=await googleauth.create({googleid:profile.id,username:profile.displayName})
            done(null,data)
            console.log(data)
        }else{
            console.log("already created")
            done(null,task)
        }
    })
)


