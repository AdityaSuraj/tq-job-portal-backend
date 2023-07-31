const DashboardRouter = require('express').Router();
const cityController = require('../controllers/CityController');
const CityController = new cityController()

DashboardRouter.post('/new-city', CityController.addCity);


module.exports = DashboardRouter;