const express = require('express');
const router = express.Router();

const Posts = require('../schemas/post.js')
const Comments = require('../schemas/comment.js')

router.post('/comments/:postId', async (req, res) => {
    const {postId} = req.params;
    const {user, password, content} = req.body;

    const existPosts = await Posts.find({postId});
    console.log(existPosts);
    
    if (existPosts.length) {
        res.status(400).json({errormessage :"없는 게시글 입니다."})
    }
    try {
        await Comments.create({user, password, content});
        res.status(200).json({Message: "댓글을 생성하였습니다."});
    } catch(err) {
        res.status(400).json({errorMessage: "빈칸을 모두 채워주십시오."})
    };
});


module.exports = router;