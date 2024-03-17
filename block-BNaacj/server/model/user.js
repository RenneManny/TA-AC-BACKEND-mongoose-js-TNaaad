// writeCode

// Q. Update user schema to

// - contains password field with minimum 5 characters and maximim 15
// - add createdAt field of type date and default it to current date.
const mongoose = require('mongoose');
const UserSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,match:/@/},
    password:{type:String,required:true,max:15,min:5},
    createdAt:{type:Date,default:Date.now},
    });
module.exports=mongoose.model("UserData",UserSchema);
