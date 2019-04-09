const express=require('express');
const app=express.Router();


app.get('/',(req,res)=>{
    res.send("This is home ")
})
module.exports = app;