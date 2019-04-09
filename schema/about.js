var mongoose = require('mongoose')


var aboutSchema = mongoose.Schema({
name :String ,
password:Number
})

console.log("Schema Contact ")
var Contact = mongoose.model("Product",aboutSchema)