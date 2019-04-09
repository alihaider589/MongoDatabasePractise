

var express = require('express')
var mongoose = require('mongoose')
var bodyparser = require('body-parser')
var path = require('path')

var home = require('./router/home')
var page = require('./router/Page')
var second = require('./router/second')

var schema = require('./schema/about')


var App = express();
App.get('/',(request,response)=>{

    // req.get();
    response.send("Hello world ");
    
})



// App.get('/home',(req,res)=>{
//     res.send('response to Homes');
// });

App.listen(5000,()=>{
    console.log('server started')
})

App.use('/1',home)
App.use('/2',page)
App.use('/3',second)
// npm install --save express
// npm install --save body-parser
// npm install --save path 
// npm install --save mongoose
// npm install -g nodemon