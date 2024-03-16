const mongoose = require("mongoose");
const Schema=mongoose.Schema;
// creating userSchema
const userSchema = new Schema({
  name: String,
  email: { type: String, lowerCase: true },
  age: { type: Number, default: 0 },
  createdAt:Date,
},{timestamps:true});
// exporting schema
module.exports = mongoose.model("data", userSchema);
// writeCode

// Q.create a user schema with following fields and type
// 1.name -> string
// 2.email -> string
// 3.age -> number

// Q. update user schema to make email lowercase and default age to be 0.
