const express = require('express');
const app = express();
const port = 3000;
const connect = require("./schemas")
connect();

//post.js 모듈 사용
const postRouter = require('./routes/post.js');

app.use(express.json());
app.use('/api', postRouter);

app.get('/', (req, res) =>{
    res.send('메인페이지 입니다.')
})

app.listen(port, () =>{
    console.log(port, '포트로 연결');
})