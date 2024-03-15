const mongoose = require('mongoose');
// const {Schema}=require('mongoose');
const Schema=mongoose.Schema;
const articlesSchema = new Schema({
    name:String,
    desc:String,
    comment:String,
});
module.exports=mongoose.model("Articles",articlesSchema);