const express = require('express');

const cors = require('cors');

const axios = require('axios');

require('dotenv').config();

const app= express();

app.use(cors());

app.use(express.json());

const mongoose = require("mongoose");
const { request, response } = require('express');

const PORT=process.env.PORT;

const MONGO=process.env.MONGO;

mongoose.connect(MONGO);
const{addFav,getFav,deleteFav,updateFav}=require('./controllers/frController');


app.get('/fav',getFav);
app.post('/fav',addFav);
app.delete('/fav/fav:_id',deleteFav);
app.put('/fav/fav:_id',updateFav);




const allData=(request,response)=>{
    const url="https://watches-world.herokuapp.com/watches-list/";
    axios.get(url).then(resData=>{
        response.json(resData.data)
    })
}


app.get('/allData',allData);










app.listen(PORT);