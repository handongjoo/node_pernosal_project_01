const express = require('express');
const { createSecurePair } = require('tls');
const router = express.Router();

const Posts = require('../schemas/post.js')

//게시글 작성
router.post('/posts', async (req, res) => {
    const {user, password, title, content} = req.body;
    try {
        await Posts.create({user, password, title, content});
        res.status(200).json({Message: "게시글을 생성하였습니다."});
    } catch(err) {
        res.status(400).json({errorMessage: "데이터 형식이 올바르지 않습니다."})
    }
});

//     try {
//         await Posts.create({
//             user,
//             password,
//             title,
//             content,
//         });
//         res.status(200).json({Message: "게시글을 생성하였습니다."})
//     } catch(err) {
//         res.status(400).json({errorMessage: "데이터 형식이 올바르지 않습니다."})
//     }
// });

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



module.exports = router;