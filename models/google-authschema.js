const mongoose = require("mongoose");

const googleauth = new mongoose.Schema({
    username:{
        type:String,
        unique:true,
        required:true
    },
    googleid:{
        type:String,
        required: true
    },
   
});

module.exports = mongoose.model("googleauth", googleauth);
