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
    
    //시간은 어떻게 자동으로...
    createdAt: {
        type: Date,
        dafault: Date.now,
    }
});

module.exports = mongoose.model("Posts", postsSchema);

