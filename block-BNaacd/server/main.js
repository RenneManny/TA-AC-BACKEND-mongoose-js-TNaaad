const mongoose = require("mongoose");
const express = require("express");
const User=require("./models/user");
const user = require("./models/user");
// creating connection
mongoose.connect("mongodb://127.0.0.1:27017/newSchema");

const app = express();
// creating routes
app.get("/", (req, res) => {
  // using schema
  const user1=new User({
    name:"JYOTI",
    email:"jyoti123@gmail.com",
    
  });
  user1.save();
  res.send("<p>Kindly check the database </p>");
});
// listen on 3K port
app.listen(3000, () => {
  console.log("listening at port 3K!");
});
