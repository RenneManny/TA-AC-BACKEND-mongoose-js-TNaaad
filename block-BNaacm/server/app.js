const mongoose = require('mongoose');
const express = require('express');
const {user,articles} = require('./models/schema');
mongoose.connect("mongodb://127.0.0.1:27017/Schemas");
const app=express();
app.get("/",(req,res)=>{
    // users
    const user1=new user({
        name:"Akhil",
        address:["Vill:Jadrangal","p.o:Kardiyana"],
        password:"lknljblsblbsbfkjb",
        
    })
    user1.save();
    // articles
const article1=new articles({
    title:"Vanilla Javascript",
    description:"Javascript can be used for backend also!",
})
article1.save();
    res.send("Done!");

})
app.listen(3000,()=>{
    console.log("Hello World!");
})