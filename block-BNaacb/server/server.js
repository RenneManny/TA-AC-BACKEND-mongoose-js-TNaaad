// writeCode

// Create a simple express app(app.js)

// - connect to local mongodb database using `mongoose.connect`
// - add article schema(article.js) using mongoose inside models directory.

const express = require('express');
const mongoose = require('mongoose');
const Articles = require('./model/articles');
// connecting to the database
mongoose.connect("mongodb://127.0.0.1:27017/articles")
const app=express();
// defining routes
app.get("/",(req,res)=>{
    const newArticle= new Articles({
        name:"Abhay",
        desc:"This is Mongoose",
        comment:"No comments please!"
        });
        newArticle.save();
    res.send("<h1>Connected Successfully!");
})
app.listen(3000,()=>{
    console.log("Server is listenong at port 3k!");
})
