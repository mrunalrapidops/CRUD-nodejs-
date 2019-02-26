var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var CarSchema = new Schema({
  name:{type:String,required:true, max:100},
  price:{type:Number,required:true} 
});
//Export the Model because other file can use this
module.exports = mongoose.model('Car',CarSchema);