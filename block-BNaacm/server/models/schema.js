const mongoose = require('mongoose');
// user schema
const userSchema=new mongoose.Schema({
    name:String,
    address:[String],
    password:{type:String,max:15,min:8},
    email:{type:String,match:/@/}
})
const user=mongoose.model("user",userSchema);

const articleSchema=new mongoose.Schema({
    title:"String",
    description:"String",
});
const articles=mongoose.model("article",articleSchema);
module.exports={user,articles}
// module.exports=articles;
// writeCode

// Q. create `User` model for the user Schema created in previous exercise and export it using `module.exports`

// Q. create a article schema with title and description

// - create a model on top of it
// - export it
