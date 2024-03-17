const mongoose = require('mongoose');
const express = require('express');
const UserSchema = require("./model/user");
mongoose.connect("mongodb://127.0.0.1:27017/validation")
const app=express();
app.get("/",(req,res)=>{
    const newUser=new UserSchema({
        name:"Akhil",
        email:"abhikapoor661@gmail.com",
        password:"abhikapoo3hubcduibb",
        
    })
    newUser.save();
    res.send("Hello World!");
})
app.listen(8080,()=>{
    console.log("Am listening at port 8080");
})