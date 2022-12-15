//몽고DB 연결
const mongoose = require("mongoose");

const connect = () => {
    mongoose
        .connect("mongodb://127.0.0.1:27017/myblog")
        .catch(err => console.log(err));
};

mongoose.connection.on("error", err => {
    console.error("mongoDB connect error");
});

module.exports = connect;