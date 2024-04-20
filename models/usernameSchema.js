const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  snippets:{
    type: Array,
    default:[]
  }

});


const User = mongoose.model("users", userSchema);
module.exports = User;