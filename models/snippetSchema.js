const mongoose = require("mongoose");

const snippetSchema = new mongoose.Schema({
    public: {
        type: Boolean,
        default: false,
    },
    categories: [
        {
        type: String,
        enum: ["dp", "graph", "dsa", "bitwise"],
        default:""
        },
    ],
    keyword: {
        type: String,
        required: true,
        trim: true,
    },
    code: {
        type: String,
    },
    scope: {
        type: String,
    },
    description: {
        type: String,
    },
});

const Snippet = mongoose.model("snippets", snippetSchema);
module.exports = Snippet;