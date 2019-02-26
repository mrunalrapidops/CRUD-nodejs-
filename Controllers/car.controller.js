const Car = require('../models/Car.model');
exports.test = function(req,res){
    res.send('Greetings from the Test controller!');
}; 

/* for post we must pass argument that insert in to database
for that in postman select post before URL 
=> in Body menu select raw and json data
and pass 
{
	"name":"Swift",
	"price":"700000"
} */

//post request (inseart in to db)
exports.car_create = function(req,res,next){
    let car = new Car(
        {
            name: req.body.name,
            price: req.body.price 
        }
    );
    car.save(function(err,car){
       
        if(err){
            next( new Error('error occured'));
        }
        res.send('car collection created');
    })

   
};

 exports.car_details = function(req,res){
        Car.findById(req.params.id,function(err, car){
            if (err)return next(err);
            res.send(car);
        })
};
// formate must see first its json
exports.car_update = function (req, res) {
    Car.findByIdAndUpdate(req.params.id, {$set: req.body},
    function (err, car) {
        if (err) return next(err);
        res.send('Product udpated.');
    });
};
//Delete
exports.car_delete = function (req, res) {
    Car.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};