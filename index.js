require("dotenv").config()
const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const passportSetup=require('./controllers/passport-setup')
const cookieSession=require('cookie-session')
const passport=require('passport')
const ErrorHandler  = require("./middlewares/error-handler");
const authrouters=require("./routers/authrouters")
const router = require("./routers/routers");
const port = 5000 ;

app.use(express.json());


app.use(cookieSession({
    maxAge:24*60*60*1000,
    keys:['abcdefghi']
}))

app.use(passport.initialize())
app.use(passport.session())

//middlewares
app.use("/auth",authrouters)
app.use("/",router)

app.use(ErrorHandler)

const start = async() => {
    try {
        connectDB(process.env.MONGO_URI)
        console.log(process.env.NODE_ENV)
        app.listen(port, () => {
            console.log("Server is listening on port " + port);
        });
    } catch (error) {
        console.log(error);
    }
}

start();