const mongoose = require("mongoose");

const postsSchema = new mongoose.Schema({
    postId: {
        // type : Schema.types.ObjectId
        type: Number,
        unique: true
    },
    user : {
        type: String,
        uniqe: true
    },
    password: {
        type: Number,
    },
    title: {
        type: String,
    },
    content: {
        type: String,
    },
    createdAt: {
        type: Date,
        dafault: Date.now,
    }
});

module.exports = mongoose.model("Posts", postsSchema);

