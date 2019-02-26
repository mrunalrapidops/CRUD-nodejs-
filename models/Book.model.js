var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var CarSchema = new Schema({
  title:String,
  submodelno:Integer,
  category:String  
});
module.exports = mongoose.model('Car',CarSchema);
