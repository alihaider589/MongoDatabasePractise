const express=require('express');
const second=express.Router();


second.get('/',(req,res)=>{
    res.send("This is Second ")
})
module.exports = second;