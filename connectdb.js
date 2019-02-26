const mongoose = require('mongoose');
const url = 'mongodb://localhost/example'; 
mongoose.connect(url,{ useNewUrlParser: true });
mongoose.Promise = global.Promise;
var db = mongoose.connect;
db.on('error', console.error.bind(console, 'MongoDB connection error:')); 
module.exports = database ;
