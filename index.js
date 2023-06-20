require("dotenv").config()
const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const ErrorHandler  = require("./middlewares/error-handler");
const router = require("./routers/routers");
const port = 5000 ;

//middlewares
app.use(express.json());
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