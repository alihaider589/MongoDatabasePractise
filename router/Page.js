const express=require('express');
const page=express.Router();


page.get('/',(req,res)=>{
    res.send("This is Page ")
})
module.exports = page;