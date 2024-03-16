// writeCode

// Q. Update above user schema to include

// - favorites field which should store array of strings
// - marks field which is array of numbers

// Q. Add address Schema with fields

// 1. village -> String
// 2. city -> String
// 3. state -> String
// 4. pin -> number
// 5. user -> ObjectId of User


const mongoose = require('mongoose');
const userSchema=new mongoose.Schema({
    village:{type:String,required:true},
    city:{type:String},
    state:{type:String},
    pin:{type:Number},
    
    user: { type: mongoose.Schema.Types.ObjectId } 
    // user: { type: mongoose.Schema.Types.ObjectId,
});
const User=mongoose.model("USER",userSchema);
module.exports=User;

