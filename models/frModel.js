"use strict";
const mongoose = require("mongoose");

const frShema=new mongoose.Schema({
    id:String,
    title:String,
    toUSD:String,
    image_url:String,
    email:String
})


const frModel=mongoose.model('myFav',frShema);



module.exports=frModel