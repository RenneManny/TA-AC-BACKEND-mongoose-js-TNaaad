const express = require('express');
const mongoose = require('mongoose');
// connecting to database
mongoose.connect("mongodb://127.0.0.1:27017/").then(()=>{
    console.log("OK!");
}).catch((err)=>{
    console.log("Error occured",err);
});
const app=express();
// defining routes
app.get("/",(req,res)=>{
    res.send("<h1>App connected Successfully!</h1>");
})

app.listen(3000,()=>{
    console.log("App is listening at port 3k");
})