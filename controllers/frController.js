"use Strict";

const { request, response } = require('express');
const frModel=require('../models/frModel');

const getFav=(request,response)=>{
    frModel.find({email:request.query.email},(err,frData)=>{
        response.json(frData)
    })
}


const addFav=(request,response)=>{
    const{id,title,description,toUSD,image_url,email}=request.body;
    const newFav=new frModel({id,title,description,toUSD,image_url,email})
    newFav.save();
    response.json(newFav);
}


const deleteFav=(request,response)=>{
    const favId=request.params.fav_id;
    frModel.deleteOne({_id:favId},(err,deletedFav)=>{
        response.json(deletedFav)
    })

}

const updateFav=(request,response)=>{
    const{id,title,description,toUSD,image_url,email}=request.body;
    const favId=request.params.fav_id;
    frModel.findByIdAndUpdate({_id:favId},{id,title,description,toUSD,image_url,email},{new:true},(err,updatedData)=>{
        response.json(updatedData)
    })

}



module.exports={
    addFav,getFav,deleteFav,updateFav
}
