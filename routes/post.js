const express = require('express');
const router = express.Router();

router.get('/posts', (req,res) => {
    res.send('게시물을 보여주는 페이지 입니다.');
});

module.exports = router;