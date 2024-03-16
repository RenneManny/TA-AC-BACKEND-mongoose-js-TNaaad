const mongoose = require('mongoose');
const express=require('express');
const address = require('./models/user');
//connecting to database
mongoose.connect("mongodb://127.0.0.1:27017/address")
const app=express();

app.get("/",(req,res)=>{
    res.send("<h1>Check your console.");
    const user1=new address({
        village:"Jadrangal",
        city:"Dharamshala",
        state:"Himachal Pradesh",
        pin:176052,
    });
    user1.save();
});

app.listen(3000,()=>{
    console.log("I am listenong at port 3K");
})