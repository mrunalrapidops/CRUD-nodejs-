const express = require('express');
const bodyParser = require('body-parser');

const car = require('./routes/car.route');

var app = express(); //instatnce of expess class

const mongoose = require('mongoose');
const url = 'mongodb://localhost/example'; 
mongoose.connect(url,{ useNewUrlParser: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:')); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended :false}));
app.use('/car',car);
app.use((err,req,res,next) => {
    console.log(err.stack);
//    next();
})

var port = 8080; 

//start server
app.listen(port,function(){
    console.log('server started @ ' + port);
}) 
