//Router require for how URIs respond to client requests.
const express = require('express');
const router = express.Router();
const car_controller = require('../Controllers/car.controller');
router.get('/test',car_controller.test);
router.post('/create', car_controller.car_create);
router.get('/:id',car_controller.car_details);//id
router.put('/:id/update', car_controller.car_update);
router.delete('/:id/delete', car_controller.car_delete);
module.exports = router;