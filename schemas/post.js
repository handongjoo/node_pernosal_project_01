const mongoose = require("mongoose");
// const { Types: { ObjectId } } = Schema;

const postsSchema = new mongoose.Schema({
    postId: {
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

