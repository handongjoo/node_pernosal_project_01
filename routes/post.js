const express = require('express');
const router = express.Router();

const Posts = require('../schemas/post.js')

//게시글 작성
//유니크값 해제 해야만 됨
//postId에 ObjectId 타입을 못 넣어서 가져옴.
router.post('/posts', async (req, res) => {
    const {postId, user, password, title, content} = req.body;

    const posts = await Posts.find({postId});
    if (posts.length) {
        return res.status(400).json({errorMessage: "이미 존재하는 postId 입니다."})
    };
    try {
        await Posts.create({postId, user, password, title, content});
        res.status(200).json({Message: "게시글을 생성하였습니다."});
    } catch(err) {
        res.status(400).json({errorMessage: "데이터 형식이 올바르지 않습니다."})
    };
});

//모든 게시글 조회
router.get('/posts', async (req,res) => {
    // const {postId, user, title, createdAt} = req.body;
    const posts = await Posts.find({});
    res.json({"data":posts});
});


//postId로 게시글 상세 조회
router.get('/posts/:postId', async (req, res) => {
    const {postId} = req.params;
    const post = await Posts.findOne({postId});

    if (!post) {
        res.status(400).json({
            success : false,
            errorMessage: "게시글을 찾을 수 없습니다."
        });
    }
    res.json({post});
})

//게시글 수정
router.put('/posts/:postId', async (req, res) => {
    const {postId} = req.params;
    const {title, content, password} = req.body;


    // findOneAndUpdate({find할 값}, {update할 값})
    // const post = await Post.findOneAndUpdate({ shortId }, {title, content});
    
    const existPosts = await Posts.find({postId, password});
    if (existPosts.length) {
        await Posts.updateOne(
            {postId},{$set: {title, content}}
        )
        res.status(200).json({Message:"수정이 완료되었습니다"})
    }
    else{
        res.status(400).json({errorMessage: "비밀번호가 틀렸습니다."})
    }
})

//게시글 삭제
router.delete('/posts/:postId', async (req, res) => {
    const {postId} = req.params;
    const {password} = req.body;

    const existPosts = await Posts.find({postId, password});
    
    if (existPosts.length) {
        await Posts.deleteOne({postId})
        res.status(200).json({Message:"삭제가 완료되었습니다"})
    }
    else{
        res.status(400).json({errorMessage: "비밀번호가 틀렸습니다."})
    }
})


module.exports = router;